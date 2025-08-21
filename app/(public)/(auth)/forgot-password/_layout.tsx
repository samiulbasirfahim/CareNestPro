import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function ForgotPasswordLayout() {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,

                headerShown: true,
                headerTitle: "",
                headerLeft() {
                    return (
                        <TouchableOpacity onPress={() => router.back()} className="p-3">
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    );
                },
            }}
        />
    );
}
