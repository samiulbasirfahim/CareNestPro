import { View, ImageBackground, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
    image: ImageSourcePropType;
};

export default function SplashScreen({ image }: Props) {
    return (
        <View className="flex-1">
            <ImageBackground source={image} className="flex-1" resizeMode="cover">
                <View className="absolute inset-0 bg-black/50" />

                <LinearGradient
                    colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.7)"]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="h-full w-full"
                />
            </ImageBackground>
        </View>
    );
}
