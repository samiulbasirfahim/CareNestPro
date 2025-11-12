import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function CareTypeChooseLayout() {
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
					headerShown: false,
				}}
			>
				<Stack.Screen name="/" options={{ headerShown: false }} />
			</Stack>
		</>
	);
}
