import { Button } from "@/components/ui/button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { jobs } from ".";

export default function JobDetails() {
	const { id } = useLocalSearchParams();
	const job = jobs.find((job) => job.id === Number(id));
	const router = useRouter();

	if (!job) {
		return (
			<View className="flex-1 items-center justify-center">
				<Text>Job not found</Text>
			</View>
		);
	}

	return (
		<SafeAreaView className="w-full h-full">
			<View className="w-full h-30 pt-14 flex flex-row gap-3 bg-[#F3FAFC] p-5 items-center">
				<Pressable onPress={() => router.back()}>
					<ArrowLeft size={20} color="#636363" />
				</Pressable>
				<Text className="text-[#515151] text-2xl font-medium">
					Job Details
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
					<View className="w-full flex flex-row flex-wrap gap-2">
						{job.skills.map((skill, index) => (
							<View
								key={index}
								className="bg-[#F4F4F4] rounded-full px-4 py-1 flex items-center"
							>
								<Text className="text-[#808080] text-sm font-normal">
									{skill}
								</Text>
							</View>
						))}
					</View>

					<Button title="Apply Now" className="mt-8" />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
