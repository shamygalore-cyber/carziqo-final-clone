/*
# Admin wallet adjustment function

1. New Function
- `admin_adjust_wallet(p_user_id uuid, p_new_balance numeric, p_reason text)`: SECURITY DEFINER, admin-only.
  Lets an admin set a user's wallet_balance to an exact value. The previous balance and new balance are logged in audit_logs.
  The caller must be an admin (checked via is_admin()).

2. Security
- Function is SECURITY DEFINER with a pinned search_path.
- EXECUTE is revoked from PUBLIC and anon; granted to authenticated only.
- The is_admin() check inside the function body ensures only admins can call it.
- This bypasses RLS (which blocks direct profile UPDATE of wallet_balance from the client) because it runs as the owner.

3. Validation
- p_new_balance must be >= 0 and <= 100,000,000.
- p_user_id must exist in profiles.
- p_reason is optional but recommended for audit trail.

4. Notes
- Idempotent: CREATE OR REPLACE can be re-run safely.
*/

CREATE OR REPLACE FUNCTION public.admin_adjust_wallet(
  p_user_id uuid,
  p_new_balance numeric,
  p_reason text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'pg_catalog'
AS $$
DECLARE
  v_old_balance numeric;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  IF p_new_balance IS NULL OR p_new_balance < 0 OR p_new_balance > 100000000 THEN
    RAISE EXCEPTION 'Invalid balance amount';
  END IF;

  SELECT wallet_balance INTO v_old_balance FROM public.profiles WHERE id = p_user_id;
  IF v_old_balance IS NULL THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  UPDATE public.profiles
  SET wallet_balance = p_new_balance
  WHERE id = p_user_id;

  PERFORM public.log_action(
    p_user_id,
    'wallet_adjusted',
    'Admin set balance from ' || v_old_balance || ' to ' || p_new_balance || COALESCE(': ' || p_reason, '')
  );
END;
$$;

REVOKE EXECUTE ON FUNCTION public.admin_adjust_wallet(uuid, numeric, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_adjust_wallet(uuid, numeric, text) TO authenticated;