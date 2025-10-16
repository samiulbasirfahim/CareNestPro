import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function WalletHistory() {
	const { id } = useLocalSearchParams();
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
				className="p-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			></ScrollView>
		</SafeAreaView>
	);
}
