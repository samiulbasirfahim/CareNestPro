import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { StatusBar } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();
export const Tab = withLayoutContext(Navigator);

export default function SplashLayout() {
    return (
        <>
            <Tab
                screenOptions={{
                    swipeEnabled: true,
                    tabBarStyle: {
                        display: "none",
                    },
                    lazy: false,
                    lazyPreloadDistance: 0,
                }}
            />
        </>
    );
}
