import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useCareProviderStore } from "@/store/careProviderStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Toast } from "toastify-react-native";

export default function Page() {
	const router = useRouter();
	const { careProviderData, updateCareProviderData } = useCareProviderStore();

	const [workReason, setWorkReason] = useState<string>(
		careProviderData.profile_data.work_reason || ""
	);

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 60,
				}}
				contentContainerClassName="gap-6"
			>
				<Text className="text-[#4D4D4D] font-medium text-lg">
					Why do you want to work with CareNestPro
				</Text>

				<View className="w-full p-4 border border-[#E6E6E6] rounded-lg flex flex-row items-center">
					<View className="flex-shrink-0">
						<BouncyCheckbox
							isChecked={workReason === "Grow my Business"}
							onPress={() =>
								setWorkReason((prev) =>
									prev === "Grow my Business"
										? ""
										: "Grow my Business"
								)
							}
							innerIconStyle={{
								borderWidth: 2,
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							iconStyle={{
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							fillColor="#0D99C9"
						/>
					</View>
					<Typography className="text-[#666666]">
						Grow my Business
					</Typography>
				</View>

				<View className="w-full p-4 border border-[#E6E6E6] rounded-lg flex flex-row items-center">
					<View className="flex-shrink-0">
						<BouncyCheckbox
							isChecked={workReason === "Earn extra income"}
							onPress={() =>
								setWorkReason((prev) =>
									prev === "Earn extra income"
										? ""
										: "Earn extra income"
								)
							}
							innerIconStyle={{
								borderWidth: 2,
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							iconStyle={{
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							fillColor="#0D99C9"
						/>
					</View>
					<Typography className="text-[#666666]">
						Earn extra income
					</Typography>
				</View>

				<View className="w-full p-4 border border-[#E6E6E6] rounded-lg flex flex-row items-center">
					<View className="flex-shrink-0">
						<BouncyCheckbox
							isChecked={
								workReason ===
								"I'm passionate about providing care"
							}
							onPress={() =>
								setWorkReason((prev) =>
									prev ===
									"I'm passionate about providing care"
										? ""
										: "I'm passionate about providing care"
								)
							}
							innerIconStyle={{
								borderWidth: 2,
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							iconStyle={{
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							fillColor="#0D99C9"
						/>
					</View>
					<Typography className="text-[#666666]">
						I'm passionate about providing care
					</Typography>
				</View>

				<View className="w-full p-4 border border-[#E6E6E6] rounded-lg flex flex-row items-center">
					<View className="flex-shrink-0">
						<BouncyCheckbox
							isChecked={workReason === "All of the above"}
							onPress={() =>
								setWorkReason((prev) =>
									prev === "All of the above"
										? ""
										: "All of the above"
								)
							}
							innerIconStyle={{
								borderWidth: 2,
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							iconStyle={{
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							fillColor="#0D99C9"
						/>
					</View>
					<Typography className="text-[#666666]">
						All of the above
					</Typography>
				</View>

				<View className="w-full p-4 border border-[#E6E6E6] rounded-lg flex flex-row items-center">
					<View className="flex-shrink-0">
						<BouncyCheckbox
							isChecked={workReason === "None of the above"}
							onPress={() =>
								setWorkReason((prev) =>
									prev === "None of the above"
										? ""
										: "None of the above"
								)
							}
							innerIconStyle={{
								borderWidth: 2,
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							iconStyle={{
								width: 20,
								height: 20,
								borderRadius: 10,
								borderColor: "#CCCCCC",
							}}
							fillColor="#0D99C9"
						/>
					</View>
					<Typography className="text-[#666666]">
						None of the above
					</Typography>
				</View>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					className="bg-primary items-center py-3 rounded-lg w-full border-2 border-primary"
					onPress={() => {
						updateCareProviderData({
							profile_data: { work_reason: workReason },
						});
						if (!workReason) {
							Toast.error("Please select a work reason");
							return;
						}
						router.push("/on-boarding/provider/provider-choose");
					}}
				>
					<Typography
						variant="subtitle"
						className="text-center text-lg text-white font-semibold"
					>
						Next
					</Typography>
				</Pressable>
			</ScrollView>
		</SafeAreaView>
	);
}
