/*
# Create Storage Buckets for Recharge Proofs and User Avatars
*/
INSERT INTO storage.buckets (id, name, public) VALUES
  ('recharge-proofs', 'recharge-proofs', true),
  ('user-avatars', 'user-avatars', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "auth_upload_recharge_proofs" ON storage.objects;
CREATE POLICY "auth_upload_recharge_proofs" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'recharge-proofs');

DROP POLICY IF EXISTS "auth_upload_user_avatars" ON storage.objects;
CREATE POLICY "auth_upload_user_avatars" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'user-avatars');

DROP POLICY IF EXISTS "auth_update_user_avatars" ON storage.objects;
CREATE POLICY "auth_update_user_avatars" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'user-avatars')
  WITH CHECK (bucket_id = 'user-avatars');