import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, useColorScheme } from "react-native";

export default function ForgotPasswordLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";

	return (
		<>
			<StatusBar
				translucent={true}
				backgroundColor={isDark ? "transparent" : "#000"}
			/>
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
		</>
	);
}
