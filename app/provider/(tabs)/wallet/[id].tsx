import { cn } from "@/app/lib";
import { useWalletStore } from "@/app/store/walletStore";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, ChevronDown } from "lucide-react-native";
import { useCallback, useEffect, useState } from "react";
import {
	Pressable,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";

export default function WalletHistory() {
	const { id } = useLocalSearchParams();
	console.log(`getting id: ${id}`);
	const router = useRouter();
	const { isLoading, walletHistoryDetails, getWalletHistoryDetails, error } =
		useWalletStore();
	const [refreshing, setRefreshing] = useState(false);
	const [dateObj, setDateObj] = useState(new Date());

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		await getWalletHistoryDetails(Number(id));
		walletHistoryDetails?.transaction_date &&
			setDateObj(parseISO(walletHistoryDetails?.transaction_date));

		setRefreshing(false);
	}, [id]);

	useEffect(() => {
		if (id) {
			getWalletHistoryDetails(Number(id));
			walletHistoryDetails?.transaction_date &&
				setDateObj(parseISO(walletHistoryDetails?.transaction_date));
		}
	}, [id]);

	// if (isLoading) {
	// 	return (
	// 		<SafeAreaView className="w-full h-full bg-white">
	// 			<View className="w-full h-full flex items-center justify-center">
	// 				<Text className="text-base font-medium text-[#0D99C9]">
	// 					Loading wallet history details...
	// 				</Text>
	// 			</View>
	// 		</SafeAreaView>
	// 	);
	// }

	// if (!walletHistoryDetails || error) {
	// 	return (
	// 		<SafeAreaView className="w-full h-full bg-white">
	// 			<View className="w-full h-full flex items-center justify-center">
	// 				<Text className="text-base font-medium text-[#CCCCCC]">
	// 					{error || "Wallet history details not found"}
	// 				</Text>
	// 			</View>
	// 		</SafeAreaView>
	// 	);
	// }

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

			{isLoading && (
				<View className="w-full h-full flex items-center justify-center">
					<Text className="text-base font-medium text-[#0D99C9]">
						Loading wallet history details...
					</Text>
				</View>
			)}

			{(!walletHistoryDetails || error) && (
				<View className="w-full h-full flex items-center justify-center">
					<Text className="text-base font-medium text-[#CCCCCC]">
						{error || "Wallet history details not found"}
					</Text>
				</View>
			)}

			{walletHistoryDetails && (
				<ScrollView
					className="p-5 mt-5 bg-white"
					contentContainerStyle={{
						flexGrow: 1,
						paddingBottom: 40,
					}}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
							colors={["#0D99C9"]}
							tintColor="#0D99C9"
						/>
					}
					contentContainerClassName="gap-6"
				>
					<View className="w-full flex flex-row items-center justify-between">
						<Text className="text-base font-medium text-[#8F8F8F]">
							Transaction Number
						</Text>
						<Text className="text-[#4F4F4F] text-lg font-normal">
							#{id}
						</Text>
					</View>

					<View className="w-full flex flex-row items-center justify-between">
						<Text className="text-base font-medium text-[#8F8F8F]">
							Status
						</Text>
						<Text
							className={cn(
								"text-lg font-normal",
								walletHistoryDetails.status === "Deposit"
									? "text-[#22906B]"
									: "text-[#FFB647]"
							)}
						>
							{walletHistoryDetails.status}
						</Text>
					</View>

					<View className="w-full flex flex-row items-center justify-between">
						<Text className="text-base font-medium text-[#8F8F8F]">
							Transaction Date
						</Text>
						<Text className="text-[#4F4F4F] text-lg font-normal">
							{format(dateObj, "dd MMM yyyy")}
						</Text>
					</View>

					<View className="w-full flex flex-row items-center justify-between">
						<Text className="text-base font-medium text-[#8F8F8F]">
							Transaction Time
						</Text>
						<Text className="text-[#4F4F4F] text-lg font-normal">
							{format(dateObj, "hh.mm a")}
						</Text>
					</View>

					<View className="w-full flex flex-row items-center justify-between">
						<Text className="text-base font-medium text-[#8F8F8F]">
							Amount Paid
						</Text>
						<Text className="text-[#4F4F4F] text-lg font-normal">
							₦ {walletHistoryDetails.amount_paid}
						</Text>
					</View>

					<Button
						className="mt-8"
						variant="primary-outline"
						renderIcon={<ChevronDown size={20} color="#0D99C9" />}
						title="Download"
					/>
				</ScrollView>
			)}
		</SafeAreaView>
	);
}
