import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function SeekerLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";

	return (
		<>
			<StatusBar
				translucent={true}
				backgroundColor={isDark ? "transparent" : "#000"}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			/>
		</>
	);
}
