import SplashTabBar from "@/components/layout/splash-tabBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();
export const Tab = withLayoutContext(Navigator);

export default function SplashLayout() {
    return (
        <>
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
