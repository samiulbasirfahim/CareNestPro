import image from "@/assets/images/splash/page-1.png";
import SplashScreen from "@/components/layout/splash-screen";

export default function Page() {
	return (
		<SplashScreen image={image} />
		// <Redirect href="/(public)/splash" />
	);
}
