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
			<View
				style={{
					height: StatusBar.currentHeight,
					backgroundColor: isDark ? "#000" : "#000",
				}}
			/>

			<StatusBar translucent={true} backgroundColor="transparent" />
			<Stack>
				<Stack.Screen
					name="(public)"
					options={{ headerShown: false }}
				/>
			</Stack>
		</Host>
	);
}
