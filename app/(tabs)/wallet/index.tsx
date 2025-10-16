import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { ArrowLeft, ListFilter, Search, Wallet } from "lucide-react-native";
import {
	FlatList,
	ImageBackground,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";

type TransactionProps = {
	id: number;
	type: "Wallet funded" | "Withdrawal";
	date: string;
	time: string;
	amount: string;
};

const transactions: TransactionProps[] = [
	{
		id: 1,
		type: "Wallet funded",
		date: "07-03-24",
		time: "02:15 am",
		amount: "₦3,800.00",
	},
	{
		id: 2,
		type: "Withdrawal",
		date: "07-03-24",
		time: "02:15 am",
		amount: "₦3,800.00",
	},
	{
		id: 3,
		type: "Wallet funded",
		date: "07-03-24",
		time: "02:15 am",
		amount: "₦3,800.00",
	},
	{
		id: 4,
		type: "Wallet funded",
		date: "07-03-24",
		time: "02:15 am",
		amount: "₦3,800.00",
	},
	{
		id: 5,
		type: "Wallet funded",
		date: "07-03-24",
		time: "02:15 am",
		amount: "₦3,800.00",
	},
	{
		id: 6,
		type: "Wallet funded",
		date: "07-03-24",
		time: "02:15 am",
		amount: "₦3,800.00",
	},
];
export default function WalletPage() {
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<View className="w-full pt-14 h-24 flex flex-col gap-3 p-5">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Wallet History
					</Text>
				</View>
			</View>
			<ScrollView
				className="px-5"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 70,
				}}
				contentContainerClassName="gap-6"
			>
				<ImageBackground
					source={require("@/assets/images/wallet-history-banner-bg.png")}
					resizeMode="cover"
					className="w-full h-48 rounded-lg p-5"
				>
					<View className="w-full h-full rounded-lg flex flex-col gap-4 items-center">
						<View className="w-full flex flex-row gap-4 items-center">
							<View className="flex flex-col gap-2 flex-1">
								<Text className="text-xl font-medium text-[#0D99C9]">
									$ 53,589.00
								</Text>
								<Text className="text-base font-normal text-[#265977]">
									Total amount earned
								</Text>
							</View>

							<View className="w-0.5 h-full bg-[#98C0D8]"></View>

							<View className="flex flex-col gap-2 items-end pl-8">
								<Text className="text-xl font-medium text-[#0D99C9]">
									25
								</Text>
								<Text className="text-base font-normal text-[#265977]">
									Total hours
								</Text>
							</View>
						</View>
						<Button title="Withdraw Fund" className="mt-7" />
					</View>
				</ImageBackground>

				<View className="w-full flex flex-col gap-1">
					<Text className="text-[#525252] font-medium text-lg">
						Wallet History
					</Text>

					<View className="w-full flex flex-row gap-6 items-center justify-between">
						<View className="relative flex-1 flex-row items-center">
							<TextInput
								className="bg-white border-[#DEF0F7] border w-full rounded-md h-12 px-4 pl-12 text-foreground placeholder:text-[#CCCCCC]"
								placeholder="Search for amount"
								style={{
									textAlignVertical: "center",
								}}
							/>
							<Pressable
								style={({ pressed }) => ({
									opacity: pressed ? 0.7 : 1,
									transform: [{ scale: pressed ? 0.98 : 1 }],
								})}
								className="absolute left-4"
							>
								<Search size={18} color="#C4C4C4" />
							</Pressable>
						</View>

						<Pressable
							onPress={() =>
								router.push("/wallet/history-filter")
							}
							className="bg-white p-3 rounded-md border border-[#DEF0F7]"
						>
							<ListFilter size={18} color="#0D99C9" />
						</Pressable>
					</View>
				</View>

				<FlatList
					data={transactions}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<Pressable onPress={() => router.push("/wallet/[id]")}>
							<TransactionCard {...item} />
						</Pressable>
					)}
					ItemSeparatorComponent={() => <View className="h-3" />}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

function TransactionCard({ type, date, time, amount }: TransactionProps) {
	// Define color and icon based on type
	const isFunded = type === "Wallet funded";
	const iconColor = isFunded ? "#7EC87E" : "#FFB647";
	const bgColor = isFunded ? "#F8FCF8" : "#FFFBF5";
	const textColor = isFunded ? "#737C28" : "#737C28";
	const Icon = isFunded ? Wallet : Wallet;

	return (
		<View className="w-full flex flex-row items-center gap-6 p-5 py-4 rounded-lg border border-[#EDEDED] bg-white">
			{/* Left Icon */}
			<View
				className="w-12 h-12 p-1 rounded-full flex items-center justify-center"
				style={{ backgroundColor: bgColor }}
			>
				<Icon size={18} color={iconColor} />
			</View>

			{/* Middle Info */}
			<View className="flex flex-1 flex-col">
				<Text className="text-[#4D4D4D] text-lg font-medium">
					{type}
				</Text>
				<View className="flex flex-row gap-2 items-center">
					<Text className="text-[#8F8F8F] text-sm">{date}</Text>
					<View className="w-[1px] h-[12px] bg-[#C9C9C9]" />
					<Text className="text-[#8F8F8F] text-sm">{time}</Text>
				</View>
			</View>

			{/* Right Amount */}
			<View>
				<Text
					style={{ color: textColor }}
					className="text-lg font-medium"
				>
					{amount}
				</Text>
			</View>
		</View>
	);
}
