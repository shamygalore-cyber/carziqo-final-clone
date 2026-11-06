/*
# Create payment-qr storage bucket and seed payment methods

1. New Storage Bucket
- `payment-qr`: public bucket for admin-uploaded QR code images shown in the recharge flow.

2. Seed Data
- Inserts two payment methods (GCash and USDT) using the existing QR images already in the public/assets folder.
- The images are referenced as /assets/payment/bank-payment.jpg and /assets/payment/usdt-payment.jpg — these are served from the app's public folder, so no storage upload is needed for the initial seed.
- Admins can later upload new QR images via the admin panel, which will store them in the payment-qr bucket.

3. Security
- payment_methods already has RLS enabled with admin-only write policies and authenticated read of active methods.
- The payment-qr bucket is public so the recharge modal can display the QR image by URL.

4. Notes
- Idempotent: the INSERT uses ON CONFLICT DO NOTHING on method_name to avoid duplicates.
- The bucket is created with public = true.
*/

INSERT INTO storage.buckets (id, name, public)
VALUES ('payment-qr', 'payment-qr', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for payment-qr bucket
DROP POLICY IF EXISTS "admin_upload_payment_qr" ON storage.objects;
CREATE POLICY "admin_upload_payment_qr" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'payment-qr' AND public.is_admin());

DROP POLICY IF EXISTS "admin_update_payment_qr" ON storage.objects;
CREATE POLICY "admin_update_payment_qr" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'payment-qr' AND public.is_admin())
  WITH CHECK (bucket_id = 'payment-qr' AND public.is_admin());

DROP POLICY IF EXISTS "admin_delete_payment_qr" ON storage.objects;
CREATE POLICY "admin_delete_payment_qr" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'payment-qr' AND public.is_admin());

DROP POLICY IF EXISTS "public_read_payment_qr" ON storage.objects;
CREATE POLICY "public_read_payment_qr" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'payment-qr');

-- Seed initial payment methods if none exist
INSERT INTO public.payment_methods (method_name, qr_image_url, instructions, is_active)
SELECT 'GCash / Bank Transfer', '/assets/payment/bank-payment.jpg', 'Send the exact amount to the account shown in the QR code. Take a screenshot of the confirmation and upload it as proof.', true
WHERE NOT EXISTS (SELECT 1 FROM public.payment_methods);

INSERT INTO public.payment_methods (method_name, qr_image_url, instructions, is_active)
SELECT 'USDT (Crypto)', '/assets/payment/usdt-payment.jpg', 'Send the equivalent USDT to the wallet address shown in the QR code. Take a screenshot of the transaction and upload it as proof.', true
WHERE NOT EXISTS (SELECT 1 FROM public.payment_methods WHERE method_name = 'USDT (Crypto)');