import { Stack } from "expo-router";

export default function OnBoardingLayout() {
	return (
		<>
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
