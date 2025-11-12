import { useAuthStore } from "@/store/authStore";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";

export default function Page() {
	const router = useRouter();
	const { restoreSession } = useAuthStore();

	useEffect(() => {
		const init = async () => {
			await restoreSession();
			const accessToken = await SecureStore.getItemAsync("accessToken");
			const user = JSON.parse(
				(await SecureStore.getItemAsync("user")) as any
			);
			if (accessToken) {
				console.log(accessToken, user);
				if (user?.user_type === "provider") {
					return router.push("/provider/(tabs)/home");
				} else {
					return router.push("/seeker/(tabs)/home");
				}
			} else {
				return router.push("/choose");
			}
		};
		init();
	}, []);

	return null;
}
