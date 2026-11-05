/*
# Add More Cars and Free Starter Car Feature
*/
ALTER TABLE public.cars ADD COLUMN IF NOT EXISTS is_free boolean NOT NULL DEFAULT false;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS free_investment_id uuid REFERENCES public.investments(id) ON DELETE SET NULL;

INSERT INTO public.cars (car_name, image_url, price, daily_return_rate, status, is_free) VALUES
('Aston Martin DB11', 'https://images.pexels.com/photos/6239334/pexels-photo-6239334.jpeg?auto=compress&cs=tinysrgb&w=800', 1600.00, 3.50, 'active', false),
('Ferrari 488 GTB', 'https://images.pexels.com/photos/29126220/pexels-photo-29126220.jpeg?auto=compress&cs=tinysrgb&w=800', 1800.00, 3.80, 'active', false),
('McLaren 720S', 'https://images.pexels.com/photos/9452144/pexels-photo-9452144.jpeg?auto=compress&cs=tinysrgb&w=800', 2200.00, 4.00, 'active', false),
('Bentley Continental GT', 'https://images.pexels.com/photos/18776099/pexels-photo-18776099.jpeg?auto=compress&cs=tinysrgb&w=800', 2500.00, 4.20, 'active', false),
('Rolls Royce Ghost', 'https://images.pexels.com/photos/3764986/pexels-photo-3764986.jpeg?auto=compress&cs=tinysrgb&w=800', 3500.00, 4.80, 'active', false),
('Bugatti Chiron', 'https://images.pexels.com/photos/29964453/pexels-photo-29964453.jpeg?auto=compress&cs=tinysrgb&w=800', 5000.00, 6.00, 'active', false),
('Toyota Corolla — FREE Starter', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800', 100.00, 1.00, 'active', true)
ON CONFLICT DO NOTHING;

CREATE OR REPLACE FUNCTION public.assign_free_car()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  free_car RECORD;
  inv_id uuid;
BEGIN
  SELECT * INTO free_car FROM public.cars WHERE is_free = true AND status = 'active' LIMIT 1;
  IF free_car.id IS NULL THEN
    RETURN NEW;
  END IF;

  INSERT INTO public.investments (
    user_id, car_id, car_name, car_image_url,
    investment_amount, duration_days, daily_payout
  ) VALUES (
    NEW.id,
    free_car.id,
    free_car.car_name,
    free_car.image_url,
    0.00,
    15,
    (free_car.price * free_car.daily_return_rate) / 100
  )
  RETURNING id INTO inv_id;

  UPDATE public.profiles SET free_investment_id = inv_id WHERE id = NEW.id;
  PERFORM public.log_action(NEW.id, 'free_car_assigned', 'Free starter car: ' || free_car.car_name);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_profile_created_free_car ON public.profiles;
CREATE TRIGGER on_profile_created_free_car
  AFTER INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.assign_free_car();