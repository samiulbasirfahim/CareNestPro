import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Star } from "lucide-react-native";
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";

export default function ActivityDetails() {
	const { id } = useLocalSearchParams();
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full">
			<View className="w-full h-30 pt-14 flex flex-row gap-3 bg-[#F3FAFC] p-5 items-center">
				<Pressable onPress={() => router.back()}>
					<ArrowLeft size={20} color="#636363" />
				</Pressable>
				<Text className="text-[#515151] text-2xl font-medium">
					Details
				</Text>
			</View>
			<ScrollView
				className="p-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="w-full flex flex-1 flex-col gap-3">
					<Text className="text-lg font-medium text-[#4D4D4D]">
						Professional nanny to care for two kids over 10 days
						consecutively
					</Text>
					<View className="w-full flex flex-row items-center gap-6 py-3">
						<View className="w-16 h-16 flex items-center justify-center">
							<Image
								source={require("@/assets/images/avatar.jpg")}
								resizeMethod="resize"
								className="w-full h-full rounded-full"
							/>
						</View>
						<View className="flex flex-1 flex-col gap-0">
							<View className="flex flex-row gap-0">
								<Text className="text-[#2CCA3B] text-lg font-medium">
									Care seeker
								</Text>
								<Text className="text-[#4D4D4D] font-medium text-lg">
									- Aleem Sarah
								</Text>
							</View>

							<Text className="text-[#808080] font-medium text-base">
								Lagos, Nigeria
							</Text>
							<Text className="text-[#808080] font-normal text-sm">
								Joined June 2022
							</Text>
						</View>
					</View>

					<View className="w-full flex flex-row items-center gap-2">
						<View className="w-min border border-[#F5F5F5] rounded-lg bg-white p-3 flex flex-col gap-2">
							<Text className="text-[#999999] font-medium text-base">
								Date range for task
							</Text>
							<Text className="text-[#808080] text-lg font-medium">
								24 Nov - 30 Nov
							</Text>
						</View>

						<View className="w-min border border-[#F5F5F5] rounded-lg bg-white p-3 flex flex-col gap-2">
							<Text className="text-[#999999] font-medium text-base">
								Rate
							</Text>
							<Text className="text-[#808080] text-lg font-medium">
								$135/hr
							</Text>
						</View>

						<View className="flex-1 border border-[#F5F5F5] rounded-lg bg-white p-3 flex flex-col gap-2">
							<Text className="text-[#999999] font-medium text-base">
								Rating
							</Text>
							<View className="w-full flex flex-row gap-2">
								<Text className="text-[#808080] text-lg font-medium">
									5.0
								</Text>
								<View className="flex flex-row items-center gap-1">
									<Star
										size={12}
										fill={"#CB9E49"}
										color={"#CB9E49"}
									/>
									<Star
										size={12}
										fill={"#CB9E49"}
										color={"#CB9E49"}
									/>
									<Star
										size={12}
										fill={"#CB9E49"}
										color={"#CB9E49"}
									/>
									<Star
										size={12}
										fill={"#CB9E49"}
										color={"#CB9E49"}
									/>
									<Star
										size={12}
										fill={"#CB9E49"}
										color={"#CB9E49"}
									/>
								</View>
							</View>
						</View>
					</View>

					<Textarea
						label="Review the care seeker"
						placeholder="Input feedback of your time with caregiver"
					/>
					<Textarea
						label="Testimonials"
						placeholder="Input feedback of your time with caregiver"
					/>
					<Button title="Submit" className="mt-8" />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
