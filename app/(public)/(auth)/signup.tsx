import SafeView from "@/components/layout/safe-view";
import { InputPassword } from "@/components/ui/input";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
	const router = useRouter();

	return (
		<>
			<SafeView>
				<View className="p-6 gap-8">
					<View className="gap-4">
						<Text className="text-4xl text-title">Sign Up</Text>
						<Text className="text-xl text-foreground">
							Kindly enter your password
						</Text>
					</View>
					<InputPassword
						label="Password"
						placeholder="Input Password"
					/>

					<InputPassword
						label="Confirm Password"
						placeholder="Input Password"
					/>

					<View className="mt-10 items-center gap-2">
						<Pressable
							style={({ pressed }) => ({
								opacity: pressed ? 0.7 : 1,
								transform: [{ scale: pressed ? 0.98 : 1 }],
							})}
							onPress={() => {
								router.push("/(tabs)/home");
							}}
							className="bg-primary items-center py-3 rounded-lg w-full"
						>
							<Text className="text-center text-lg text-white font-semibold">
								Sign Up
							</Text>
						</Pressable>
					</View>
				</View>
			</SafeView>
		</>
	);
}
