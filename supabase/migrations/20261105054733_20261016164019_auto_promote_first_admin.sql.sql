/*
# Auto-promote first user to admin
*/
CREATE OR REPLACE FUNCTION public.promote_first_user_to_admin()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  profile_count integer;
BEGIN
  SELECT COUNT(*) INTO profile_count FROM public.profiles;
  IF profile_count = 1 THEN
    UPDATE public.profiles SET role = 'admin' WHERE id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_profile_created_first_admin ON public.profiles;
CREATE TRIGGER on_profile_created_first_admin
  AFTER INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.promote_first_user_to_admin();