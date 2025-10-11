import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { Host } from "react-native-portalize";
import "./global.css";

export default function RootLayout() {
	const [isReady, setIsReady] = useState(false);
	const colorScheme = useColorScheme();

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
				style={colorScheme === "dark" ? "light" : "dark"}
				translucent={true}
				backgroundColor="transparent"
			/>
			<Stack>
				<Stack.Screen
					name="(public)"
					options={{ headerShown: false }}
				/>
			</Stack>
		</Host>
	);
}
