import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pyramid, ScrollText, Settings, Wallet } from "lucide-react-native";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";

	return (
		<>
			<StatusBar
				translucent={true}
				backgroundColor={isDark ? "transparent" : "#000"}
			/>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						height: 90,
						paddingTop: 5,
					},
					tabBarActiveTintColor: "#1F6E9D",
					tabBarInactiveTintColor: "#8B8DA7",
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="home" size={size} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="activities"
					options={{
						title: "Activities",
						tabBarIcon: ({ color, size }) => (
							<Pyramid color={color} size={size} />
						),
					}}
				/>
				<Tabs.Screen
					name="wallet"
					options={{
						title: "Wallet",
						tabBarIcon: ({ color, size }) => (
							<Wallet color={color} size={size} />
						),
					}}
				/>
				<Tabs.Screen
					name="message"
					options={{
						title: "Message",
						tabBarIcon: ({ color, size }) => (
							<ScrollText color={color} size={size} />
						),
					}}
				/>
				<Tabs.Screen
					name="setting"
					options={{
						title: "Setting",
						tabBarIcon: ({ color, size }) => (
							<Settings color={color} size={size} />
						),
					}}
				/>
			</Tabs>
		</>
	);
}
