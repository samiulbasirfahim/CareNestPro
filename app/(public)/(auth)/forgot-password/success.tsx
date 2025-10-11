import SuccessIcon from "@/assets/svgs/success";
import SafeView from "@/components/layout/safe-view";
import { router, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
	return (
		<>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
			/>
			<SafeView>
				<View className="flex-1 bg-white p-6 gap-6 items-center pt-8">
					{
						// <Image width={0} className="h-auto w-2/3" source={SUCCESSImage} />
					}

					<SuccessIcon />

					<Text className="text-4xl text-title text-center">
						Password Reset Succesfull
					</Text>
					<Text className="text-xl text-foreground text-center">
						You can proceed login with your new password cradentials
					</Text>
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.7 : 1,
							transform: [{ scale: pressed ? 0.98 : 1 }],
						})}
						className="bg-primary items-center py-3 rounded-lg w-full mt-8"
						onPress={() => {
							router.dismissAll();
							router.back();
						}}
					>
						<Text className="text-center text-lg text-white font-semibold">
							Back to Login
						</Text>
					</Pressable>
				</View>
			</SafeView>
		</>
	);
}
