import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";

export default function WalletHistoryFilter() {
	const router = useRouter();

	const [activeTab, setActiveTab] = useState("Custom Period");

	const tabs = ["Custom Period", "This Week", "Last Week"];

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
			</ScrollView>
		</SafeAreaView>
	);
}
