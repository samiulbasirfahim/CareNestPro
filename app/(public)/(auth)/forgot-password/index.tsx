import { Input } from "@/components/ui/input";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
	return (
		<View className="flex-1 bg-white p-6 gap-6">
			<View className="gap-4">
				<Text className="text-4xl text-title">Forgot Password</Text>
				<Text className="text-xl text-foreground">
					We will send you a{" "}
					<Text className="font-semibold text-title">
						One Time Password
					</Text>{" "}
					to your email or phone number to reset your password
				</Text>
			</View>
			<Input label="Email Adress" placeholder="Input email address" />

			<Pressable
				style={({ pressed }) => ({
					opacity: pressed ? 0.7 : 1,
					transform: [{ scale: pressed ? 0.98 : 1 }],
				})}
				className="bg-primary items-center py-3 rounded-lg w-full mt-8"
				onPress={() => router.push("/forgot-password/otp")}
			>
				<Text className="text-center text-lg text-white font-semibold">
					Get OTP
				</Text>
			</Pressable>
		</View>
	);
}
