import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Host } from "react-native-portalize";
import ToastManager from "toastify-react-native";
import "./global.css";

export default function RootLayout() {
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
					name="provider"
					options={{ headerShown: false }}
				/>
			</Stack>
			<ToastManager />
		</Host>
	);
}
