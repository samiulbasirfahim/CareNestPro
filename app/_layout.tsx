import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Host } from "react-native-portalize";
import "./global.css";

export default function RootLayout() {
	const [isReady, setIsReady] = useState(false);
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";

	useEffect(() => {
		(async () => {
			setIsReady(true);
		})();
	}, []);

	return (
		<Host>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />

			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="/" options={{ headerShown: false }} />
				<Stack.Screen
					name="/provider/(tabs)"
					options={{ headerShown: false }}
				/>
			</Stack>
		</Host>
	);
}
