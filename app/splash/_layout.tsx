import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();
export const Tab = withLayoutContext(Navigator);

export default function SplashLayout() {
  return (
    <SafeAreaView className="flex-1">
      <Tab
        screenOptions={{
          swipeEnabled: true,
          tabBarStyle: {
            display: "none",
          },
          lazy: true,
          lazyPreloadDistance: 0,
        }}
      />
    </SafeAreaView>
  );
}
