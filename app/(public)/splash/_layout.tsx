import PaginationDots from "@/components/common/pagination-dot";
import {
	createMaterialTopTabNavigator,
	MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { router, withLayoutContext } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();
export const Tab = withLayoutContext(Navigator);

export default function SplashLayout() {
	return (
		<>
			<StatusBar style="light" />
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
					<TouchableOpacity
						onPress={() => {
							if (currentIndex === totalPage - 1) {
								return router.push("/register");
							}
							goRight();
						}}
					>
						<Text className="text-primary text-xl">
							{currentIndex === totalPage - 1
								? "Get Started"
								: "Next"}
						</Text>
					</TouchableOpacity>
				</View>
				<Text className="text-white text-lg mb-4 text-center">
					Connect with trusted care providers in your area for
					personalized support when you need it most
				</Text>

				<TouchableHighlight
					className="bg-primary rounded-2xl px-6 py-3 border-2 border-primary"
					underlayColor={"transparent"}
					onPress={() => {
						router.push({
							pathname: "/register",
						});
					}}
				>
					<Text className="text-white text-center font-semibold text-lg">
						Get Started
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					className="bg-white rounded-2xl px-6 py-3 border-2 border-white"
					underlayColor={"transparent"}
					onPress={() => {
						router.push({
							pathname: "/login",
						});
					}}
				>
					<Text className="text-primary text-lg text-center font-semibold">
						Login
					</Text>
				</TouchableHighlight>
			</View>
		</>
	);
}
