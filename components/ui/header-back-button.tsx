import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable } from "react-native";

export function HeaderBackButton() {
	if (router.canGoBack())
		return (
			<Pressable
				style={({ pressed }) => ({
					opacity: pressed ? 0.7 : 1,
					transform: [{ scale: pressed ? 0.98 : 1 }],
				})}
				className="bg-transparent my-2 ps-0 justify-start"
				onPress={() => router.back()}
			>
				<Ionicons
					name="chevron-back-outline"
					size={24}
					color="#636363"
				/>
			</Pressable>
		);
}
