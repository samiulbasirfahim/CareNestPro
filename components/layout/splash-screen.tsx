import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RelativePathString, router } from "expo-router";
import SafeView from "./safe-view";

type Props = {
    image: ImageSourcePropType;
    description: string;
    c_page: number;
    t_page: number;
    nextLink: string;
};

export default function SplashScreen({
    image,
    description,
    c_page,
    t_page,
    nextLink,
}: Props) {
    return (
        <View className="flex-1">
            <ImageBackground source={image} className="flex-1" resizeMode="cover">
                <View className="absolute inset-0 bg-black/50" />

                <LinearGradient
                    colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.7)"]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute inset-0"
                />
                <SafeView>
                    <View className="flex-1 p-4 gap-6 justify-end">


                        <View className="flex-row justify-between">
                            <View className="gap-2 flex-row">
                                {Array.from({ length: t_page }, (_, i) => i + 1).map((i) => (
                                    <View
                                        key={i}
                                        className={`h-3 ${i !== c_page ? "w-3 bg-accent rounded-full" : "w-10 bg-primary rounded-lg"}`}
                                    ></View>
                                ))}
                            </View>
                            <TouchableOpacity
                                onPress={() =>
                                    router.push({
                                        pathname: nextLink as any,
                                    })
                                }
                            >
                                <Text className="text-primary text-xl">
                                    {c_page === t_page ? "Get Started" : "Next"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text className="text-white text-lg mb-4 text-center">
                            {description}
                        </Text>
                        <TouchableOpacity
                            className="bg-primary rounded-2xl px-6 py-3"
                            onPress={() => {
                                router.push({
                                    pathname: "/register",
                                });
                            }}
                        >
                            <Text className="text-white text-lg text-center font-semibold">
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
                </SafeView>
            </ImageBackground>
        </View>
    );
}
