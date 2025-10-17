import { Input } from "@/components/ui/input";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function PersonalInformation() {
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<View className="w-full h-32 pt-14 flex flex-col gap-3 px-5 items-start">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Personal Information
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
				<Input
					label="Email address"
					placeholder="Input email address"
				/>
				<Input label="Country" placeholder="Input country" />
			</ScrollView>
		</SafeAreaView>
	);
}
