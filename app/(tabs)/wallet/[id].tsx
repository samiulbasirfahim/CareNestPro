import { Button } from "@/components/ui/button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, ChevronDown } from "lucide-react-native";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function WalletHistory() {
	const { id } = useLocalSearchParams();
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<View className="w-full pt-14 h-32 flex flex-col gap-3 px-5">
				<View className="w-full h-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Wallet History
					</Text>
				</View>
			</View>
			<ScrollView
				className="p-5 mt-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="w-full flex flex-row items-center justify-between">
					<Text className="text-base font-medium text-[#8F8F8F]">
						Transaction Number
					</Text>
					<Text className="text-[#4F4F4F] text-lg font-normal">
						#253654547
					</Text>
				</View>

				<View className="w-full flex flex-row items-center justify-between">
					<Text className="text-base font-medium text-[#8F8F8F]">
						Status
					</Text>
					<Text className="text-[#22906B] text-lg font-normal">
						Withdrawal
					</Text>
				</View>

				<View className="w-full flex flex-row items-center justify-between">
					<Text className="text-base font-medium text-[#8F8F8F]">
						Transaction Date
					</Text>
					<Text className="text-[#4F4F4F] text-lg font-normal">
						Aug 28, 2024
					</Text>
				</View>

				<View className="w-full flex flex-row items-center justify-between">
					<Text className="text-base font-medium text-[#8F8F8F]">
						Transaction Time
					</Text>
					<Text className="text-[#4F4F4F] text-lg font-normal">
						2:40 PM
					</Text>
				</View>

				<View className="w-full flex flex-row items-center justify-between">
					<Text className="text-base font-medium text-[#8F8F8F]">
						Amount Paid
					</Text>
					<Text className="text-[#4F4F4F] text-lg font-normal">
						$3,000.00
					</Text>
				</View>

				<Button
					className="mt-8"
					variant="primary-outline"
					renderIcon={<ChevronDown size={20} color="#0D99C9" />}
					title="Download"
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
