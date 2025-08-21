import { Text, TouchableOpacity, View } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PaginationDots from "./pagination-dot";

export default function SplashTabBar({
    state,
    navigation,
}: MaterialTopTabBarProps) {
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
                    <PaginationDots currentIndex={currentIndex} totalPage={totalPage} />
                    {
                        //     <View className="gap-2 flex-row">
                        //     {Array.from({ length: totalPage }, (_, i) => i).map((i) => (
                        //         <View
                        //             key={i}
                        //             className={`h-3 ${currentIndex !== i ? "w-3 bg-accent rounded-full" : "w-10 bg-primary rounded-lg"}`}
                        //         ></View>
                        //     ))}
                        // </View>
                    }
                    <TouchableOpacity
                        onPress={() => {
                            if (currentIndex === totalPage - 1) {
                                return router.push("/register");
                            }
                            goRight();
                        }}
                    >
                        <Text className="text-primary text-xl">
                            {currentIndex === totalPage - 1 ? "Get Started" : "Next"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-white text-lg mb-4 text-center">
                    Connect with trusted care providers in your area for personalized
                    support when you need it most
                </Text>

                <TouchableOpacity
                    className="bg-primary rounded-2xl px-6 py-3"
                    onPress={() => {
                        router.push({
                            pathname: "/register",
                        });
                    }}
                >
                    <Text className="text-white text-center font-semibold">
                        Get Started
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-white rounded-2xl px-6 py-3"
                    onPress={() => {
                        router.push({
                            pathname: "/login",
                        });
                    }}
                >
                    <Text className="text-primary text-lg text-center font-semibold">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

// {state.routes.map((route, index) => {
//     const { options } = descriptors[route.key];
//     const label =
//         options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//                 ? options.title
//                 : route.name;
//
//     const isFocused = state.index === index;
//
//     const onPress = () => {
//         const event = navigation.emit({
//             type: "tabPress",
//             target: route.key,
//             canPreventDefault: true,
//         });
//
//         if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name, route.params);
//         }
//     };
//
//     const onLongPress = () => {
//         navigation.emit({
//             type: "tabLongPress",
//             target: route.key,
//         });
//     };
//
//     return (
//         <PlatformPressable
//             href={buildHref(route.name, route.params)}
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarButtonTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//             key={index}
//         >
//             <Text
//                 style={{ color: isFocused ? colors.primary : colors.text }}
//                 className="mb-8"
//             >
//                 {label.toString()}
//             </Text>
//         </PlatformPressable>
//     );
// })}
