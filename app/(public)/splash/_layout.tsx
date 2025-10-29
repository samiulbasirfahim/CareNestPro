import PaginationDots from "@/components/common/pagination-dot";
import {
	createMaterialTopTabNavigator,
	MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { router, withLayoutContext } from "expo-router";
import { Pressable, StatusBar, Text, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();
export const Tab = withLayoutContext(Navigator);

export default function SplashLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";

	return (
		<>
			<StatusBar
				translucent={true}
				backgroundColor={isDark ? "transparent" : "#000"}
			/>

			<Tab
				tabBarPosition="bottom"
				tabBar={SplashTabBar}
				screenOptions={{
					swipeEnabled: true,
					lazy: false,
				}}
			/>
		</>
	);
}

function SplashTabBar({ state, navigation }: MaterialTopTabBarProps) {
	const currentIndex = state.index;
	const totalPage = state.routeNames.length;

	function goRight() {
		if (currentIndex < totalPage - 1) {
			const nextRoute = state.routes[currentIndex + 1].name;
			navigation.navigate(nextRoute);
		}
	}

	const insets = useSafeAreaInsets();
	return (
		<>
			<View
				className="flex-1 p-4 gap-6 justify-end bottom-0 absolute"
				style={{
					marginBottom: insets.bottom,
				}}
			>
				<View className="flex-row justify-between">
					<PaginationDots
						currentIndex={currentIndex}
						totalPage={totalPage}
					/>
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.7 : 1,
							transform: [{ scale: pressed ? 0.98 : 1 }],
						})}
						onPress={() => {
							if (currentIndex === totalPage - 1) {
								return router.push("/on-boarding/provider");
							}
							goRight();
						}}
					>
						<Text className="text-primary text-xl">
							{currentIndex === totalPage - 1
								? // ? "Get Started"
									"Care Provider"
								: "Next"}
						</Text>
					</Pressable>
				</View>
				<Text className="text-white text-lg mb-4 text-center">
					Connect with trusted care providers in your area for
					personalized support when you need it most
				</Text>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					className="bg-primary rounded-2xl px-6 py-3 border-2 border-primary"
					onPress={() => {
						router.push({
							pathname: "/on-boarding/seeker",
						});
					}}
				>
					<Text className="text-white text-center font-semibold text-lg">
						Get Started
					</Text>
				</Pressable>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					className="bg-white rounded-2xl px-6 py-3 border-2 border-white"
					onPress={() => {
						router.push({
							pathname: "/login",
						});
					}}
				>
					<Text className="text-primary text-lg text-center font-semibold">
						Login
					</Text>
				</Pressable>
			</View>
		</>
	);
}
