-- Fix: the investments_status_check constraint only allowed active/completed/cancelled.
-- The admin_manage_investment function sets status = 'paused', which violated this constraint.
-- Add 'paused' to the allowed values.

ALTER TABLE public.investments DROP CONSTRAINT IF EXISTS investments_status_check;

ALTER TABLE public.investments
  ADD CONSTRAINT investments_status_check
  CHECK (status = ANY (ARRAY['active'::text, 'completed'::text, 'cancelled'::text, 'paused'::text]));