import image from "@/assets/images/splash/page-3.png";
import SplashScreen from "@/components/layout/splash-screen";

export default function Page() {
    return (
        <SplashScreen
            image={image}
            nextLink="/register"
            c_page={3}
            t_page={3}
            description="Connect with trusted care providers in your area for personalized support when you need it most"
        />
    );
}
