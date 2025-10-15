import { Button } from "@/components/ui/button";
import { useLocalSearchParams } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { jobs } from "../(tabs)/home";

export default function JobDetails() {
	const { id } = useLocalSearchParams();
	const job = jobs.find((job) => job.id === Number(id));

	if (!job) {
		return (
			<View className="flex-1 items-center justify-center">
				<Text>Job not found</Text>
			</View>
		);
	}

	return (
		<SafeAreaView className="w-full h-full">
			<View className="w-full h-24 flex flex-row gap-3 bg-[#F3FAFC] p-5 items-center">
				<ArrowLeft size={20} color="#636363" />
				<Text className="text-[#515151] text-2xl font-medium">
					Job detail
				</Text>
			</View>
			<ScrollView
				className="p-5"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="w-full flex flex-1 flex-col gap-3">
					<Text className="text-[#4D4D4D] text-xl font-medium">
						{job.title}
					</Text>
					<Text className="text-[#808080] text-base font-normal">
						{job.postedAt}
					</Text>
					<Text className="text-[#808080] text-base font-medium">
						Job Description
					</Text>

					<Text className="text-[#999999] text-base font-medium">
						{job.description}
					</Text>
					<Text className="text-[#808080] text-base font-medium">
						Skills and expertise
					</Text>
					<View className="w-full flex flex-row flex-wrap gap-3"></View>

					<Button title="Apply Now" className="mt-8" />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
