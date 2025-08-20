import image from "@/assets/images/splash/page-1.png";
import SplashScreen from "@/components/layout/splash-screen";

export default function Page() {
  return (
    <SplashScreen
      image={image}
      c_page={1}
      nextLink="/splash/2"
      t_page={3}
      description="Connect with trusted care providers in your area for personalized support when you need it most"
    />
  );
}
