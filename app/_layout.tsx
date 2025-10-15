import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { Host } from "react-native-portalize";
import "./global.css";

export default function RootLayout() {
	const [isReady, setIsReady] = useState(false);
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";

	useEffect(() => {
		// if (isReady) router.replace("/on-boarding/details");
		// if (isReady) router.replace("/splash");
	}, [isReady]);

	useEffect(() => {
		(async () => {
			setIsReady(true);
		})();
	}, []);

	return (
		<Host>
			<StatusBar
				translucent={true}
				backgroundColor={isDark ? "transparent" : "#000"}
			/>
			<View
				style={{
					height: StatusBar.currentHeight,
					backgroundColor: isDark ? "#000" : "#000",
				}}
			/>

			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="/" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

				<Stack.Screen
					name="job/[id]"
					options={{
						headerShown: true,
						title: "Job Details",
						presentation: "card",
					}}
				/>
			</Stack>
		</Host>
	);
}
