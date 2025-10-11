import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function ForgotPasswordLayout() {
	return (
		<Stack
			screenOptions={{
				headerShadowVisible: false,

				headerShown: true,
				headerTitle: "",
				headerLeft() {
					return (
						<Pressable
							onPress={() => router.back()}
							className="p-3"
						>
							<Ionicons
								name="arrow-back"
								size={24}
								color="black"
							/>
						</Pressable>
					);
				},
			}}
		/>
	);
}
