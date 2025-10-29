import { Button } from "@/components/ui/button";
import DateInput from "@/components/ui/date-input";
import { useWalletStore } from "@/store/walletStore";
import { useRouter } from "expo-router";
import { ArrowLeft, ChevronDown } from "lucide-react-native";
import { useState } from "react";
import {
	ActivityIndicator,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";
import { twMerge } from "tailwind-merge";
import { Toast } from "toastify-react-native";
import { TransactionCard } from ".";

export default function WalletHistoryFilter() {
	const router = useRouter();

	const [activeTab, setActiveTab] = useState("Custom Period");

	const tabs = ["Custom Period", "This Week", "Last Week"];
	const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
		null
	);
	const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

	const { isLoading, error, filterWalletHistory, walletHistory } =
		useWalletStore();

	const onSubmit = async () => {
		try {
			if (!selectedStartDate || !selectedEndDate) {
				Toast.error("Please select a date range");
				return;
			}
			await filterWalletHistory(
				selectedStartDate.toISOString(),
				selectedEndDate.toISOString()
			);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	if (isLoading) {
		return <ActivityIndicator size="large" color="#0D99C9" />;
	}

	if (error) {
		return <Text className="text-red-500 text-base">{error}</Text>;
	}

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

			{isLoading && <ActivityIndicator size="large" color="#0D99C9" />}

			{error && <Text className="text-red-500 text-base">{error}</Text>}

			<ScrollView
				className="p-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="flex-row items-center justify-start gap-6">
					{tabs.map((tab) => {
						const isActive = activeTab === tab;
						return (
							<Pressable
								key={tab}
								onPress={() => setActiveTab(tab)}
								style={({ pressed }) => ({
									opacity: pressed ? 0.8 : 1,
									transform: [{ scale: pressed ? 0.98 : 1 }],
								})}
								className={twMerge(
									"px-3 py-1.5 rounded-md border",
									isActive
										? "border-[#0D99C9]"
										: "border-transparent"
								)}
							>
								<Text
									className={twMerge(
										"text-base font-medium",
										isActive
											? "text-[#0D99C9]"
											: "text-[#999999]"
									)}
								>
									{tab}
								</Text>
							</Pressable>
						);
					})}
				</View>

				<DateInput
					placeholder="Start date"
					iconColor="#0D99C9"
					value={selectedStartDate}
					onChange={setSelectedStartDate}
				/>

				<DateInput
					placeholder="End date"
					iconColor="#0D99C9"
					value={selectedEndDate}
					onChange={setSelectedEndDate}
				/>
				<Button onPress={onSubmit} title="View" />
				<Button
					variant="primary-outline"
					renderIcon={<ChevronDown size={20} color="#0D99C9" />}
					title="Download"
				/>

				{(!selectedStartDate || !selectedEndDate) && (
					<View className="w-full h-full flex items-center">
						<Text className="text-base font-normal text-[#CCCCCC]">
							Please select a date range
						</Text>
					</View>
				)}

				{walletHistory.length === 0 && (
					<View className="w-full h-full flex items-center">
						<Text className="text-base font-normal text-[#CCCCCC]">
							No transactions found
						</Text>
					</View>
				)}

				{selectedStartDate &&
					selectedEndDate &&
					walletHistory.map((transaction, index) => (
						<Pressable
							key={index}
							onPress={() =>
								router.push(
									`/provider/wallet/${transaction.id}`
								)
							}
						>
							<TransactionCard {...transaction} />
						</Pressable>
					))}
			</ScrollView>
		</SafeAreaView>
	);
}
