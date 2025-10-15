import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";

	return (
		<>
			<StatusBar
				translucent={true}
				backgroundColor={isDark ? "transparent" : "#000"}
			/>
			<Stack>
				<Stack.Screen name="splash" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			</Stack>
		</>
	);
}
