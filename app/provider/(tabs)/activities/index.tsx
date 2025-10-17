import { Tab, Tabs } from "@/components/ui/tabs";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";

export default function Activities() {
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full">
			<View className="w-full h-28 pt-14 flex flex-col gap-3 bg-[#F3FAFC] px-5 items-center">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Activities
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
				<Tabs>
					<Tab title="Active (1)">
						<View className="w-full flex py-5 flex-col gap-3">
							<ActiveTabItemCard />
						</View>
					</Tab>
					<Tab title="Closed (20)">
						<View className="w-full flex py-5 flex-col gap-3">
							{Array.from({ length: 8 }).map((_, index) => (
								<ClosedTabItemCard key={index} />
							))}
						</View>
					</Tab>
					<Tab title="Pending (4)">
						<View className="w-full flex py-5 flex-col gap-3">
							{Array.from({ length: 8 }).map((_, index) => (
								<PendingTabItemCard key={index} />
							))}
						</View>
					</Tab>
				</Tabs>
			</ScrollView>
		</SafeAreaView>
	);
}

function ActiveTabItemCard() {
	return (
		<View className="w-full flex flex-row gap-4 items-center">
			<View className="flex flex-col gap-1 items-center">
				<Text className="text-[#B3B3B3] text-sm font-normal">Wed</Text>
				<Text className="text-[#666666] text-sm font-normal">12</Text>
			</View>
			<View className="border-l-4 border-[#0D99C9] rounded-lg p-4 bg-[#F5F5F5] flex flex-1 flex-row gap-4">
				<Image
					source={require("@/assets/images/avatar.jpg")}
					className="w-12 h-12 rounded-full"
				/>
				<View className="flex flex-col gap-0">
					<Text className="text-[#4D4D4D] text-base font-medium">
						Child Care with Aleem Sarah
					</Text>
					<Text className="text-[#999999] text-sm font-normal">
						06:30 am - 03:35 pm
					</Text>
				</View>
			</View>
		</View>
	);
}

function ClosedTabItemCard() {
	const router = useRouter();
	return (
		<Pressable onPress={() => router.push("/activities/[id]")}>
			<View className="w-full flex flex-col gap-3 border border-[#E6E6E6] bg-white rounded-lg p-4">
				<Text className="text-[#4D4D4D] text-base font-medium">
					Professional nanny to care for two kids over 10 days
					consecutively
				</Text>
				<Text className="text-[#999999] text-sm font-normal">
					Professional nanny needed in Lagos to care for two kids over
					10 consecutive days. Looking for trustworthy individual with
					childcare background, clean record, and own transportation.
					Must be patient, creative, and capable of handling
					emergencies responsibly
				</Text>
			</View>
		</Pressable>
	);
}

function PendingTabItemCard() {
	return (
		<Pressable className="w-full bg-white border border-[#E6E6E6] p-3 rounded-lg flex flex-col gap-2">
			<Text className="text-[#808080] text-sm font-medium">
				Posted 5 minutes ago
			</Text>
			<Text className="text-[#4D4D4D] text-base font-medium">
				Professional nanny to care for two kids over 10 days
				consecutively
			</Text>
			<Text className="text-[#999999] text-base font-medium">
				Professional nanny needed in Lagos to care for two kids over 10
				consecutive days. Looking for trustworthy individual with
				childcare background, clean record, and own transportation. Must
				be patient, creative, and capable of handling emergencies
				responsibly
			</Text>
		</Pressable>
	);
}
