/*
# Secure and support reliable user avatar uploads
*/
DROP POLICY IF EXISTS "auth_upload_user_avatars" ON storage.objects;
CREATE POLICY "auth_upload_user_avatars" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'user-avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "auth_update_user_avatars" ON storage.objects;
CREATE POLICY "auth_update_user_avatars" ON storage.objects
  FOR UPDATE TO authenticated
  USING (
    bucket_id = 'user-avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  )
  WITH CHECK (
    bucket_id = 'user-avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );