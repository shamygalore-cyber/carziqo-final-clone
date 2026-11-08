-- Expand the language constraint on profiles to support more languages.
-- New languages: Filipino, Spanish, Chinese, Hindi, Arabic, Portuguese, French, German, Japanese, Korean, Russian, Indonesian, Vietnamese, Thai, Malay, Turkish, Italian, Dutch.

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_language_check;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_language_check
  CHECK (language = ANY (ARRAY[
    'en'::text,   -- English
    'fil'::text,  -- Filipino
    'es'::text,   -- Spanish
    'zh'::text,   -- Chinese
    'hi'::text,   -- Hindi
    'ar'::text,   -- Arabic
    'pt'::text,   -- Portuguese
    'fr'::text,   -- French
    'de'::text,   -- German
    'ja'::text,   -- Japanese
    'ko'::text,   -- Korean
    'ru'::text,   -- Russian
    'id'::text,   -- Indonesian
    'vi'::text,   -- Vietnamese
    'th'::text,   -- Thai
    'ms'::text,   -- Malay
    'tr'::text,   -- Turkish
    'it'::text,   -- Italian
    'nl'::text    -- Dutch
  ]));