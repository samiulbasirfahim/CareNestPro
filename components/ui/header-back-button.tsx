import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "./button";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export function HeaderBackButton() {
    if (router.canGoBack())
        return (
            <TouchableOpacity
                className="bg-transparent my-2 ps-0 justify-start"
                onPress={() => router.back()}
            >
                <Ionicons name="chevron-back-outline" size={24} color="#636363" />
            </TouchableOpacity>
        );
}
