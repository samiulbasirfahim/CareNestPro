import { Button } from "@/components/ui/button";
import { useJobsStore } from "@/store/jobsStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useCallback, useEffect, useState } from "react";
import {
	ActivityIndicator,
	Pressable,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";

export default function JobDetails() {
	const router = useRouter();
	const { id } = useLocalSearchParams();

	const { getJob, job, isLoading, error } = useJobsStore();
	const [refreshing, setRefreshing] = useState(false);

	// fetch job details initially
	useEffect(() => {
		if (id) getJob(Number(id));
	}, [id]);

	// if no id, redirect to home
	if (!id) {
		router.push("/seeker/(tabs)/home");
		return null;
	}

	// handle pull to refresh
	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		await getJob(Number(id));
		setRefreshing(false);
	}, [id]);

	// loading state (only show if it's the *first load*, not refresh)
	if (isLoading && !refreshing) {
		return (
			<SafeAreaView className="flex-1 items-center justify-center bg-white">
				<ActivityIndicator size="large" color="#0D99C9" />
				<Text className="mt-3 text-[#808080] text-base">
					Loading job details...
				</Text>
			</SafeAreaView>
		);
	}

	// error state
	if (error) {
		return (
			<SafeAreaView className="flex-1 items-center justify-center bg-white">
				<Text className="text-red-500 text-base">{error}</Text>
				<Pressable
					onPress={() => getJob(Number(id))}
					className="mt-4 bg-[#0D99C9] px-5 py-2 rounded-md"
				>
					<Text className="text-white font-medium">Retry</Text>
				</Pressable>
			</SafeAreaView>
		);
	}

	// no job found
	if (!job) {
		return (
			<SafeAreaView className="flex-1 items-center justify-center bg-white">
				<Text className="text-[#808080] text-base">Job not found.</Text>
				<Pressable
					onPress={() => router.back()}
					className="mt-4 bg-[#0D99C9] px-5 py-2 rounded-md"
				>
					<Text className="text-white font-medium">Go Back</Text>
				</Pressable>
			</SafeAreaView>
		);
	}

	// main content
	return (
		<SafeAreaView className="flex-1 bg-white">
			{/* Header */}
			<View className="w-full flex flex-row items-center gap-3 bg-[#F3FAFC] p-5 pt-14">
				<Pressable onPress={() => router.back()}>
					<ArrowLeft size={22} color="#636363" />
				</Pressable>
				<Text className="text-[#515151] text-2xl font-semibold">
					Job Details
				</Text>
			</View>

			{/* Scrollable content with pull-to-refresh */}
			<ScrollView
				className="p-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 60,
				}}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={["#0D99C9"]}
						tintColor="#0D99C9"
					/>
				}
			>
				<View className="flex flex-col gap-4">
					{/* Title & Posted Info */}
					<View className="flex flex-col gap-1">
						<Text className="text-[#4D4D4D] text-xl font-semibold">
							{job.title}
						</Text>
						<Text className="text-[#808080] text-sm">
							{job.posted_ago || "Posted recently"}
						</Text>
					</View>

					{/* Budget */}
					{job.budget_display && (
						<View className="mt-1">
							<Text className="text-[#0D99C9] text-lg font-medium">
								{job.budget_display}
							</Text>
						</View>
					)}

					{/* Description */}
					<View className="mt-3">
						<Text className="text-[#808080] text-base font-semibold mb-1">
							Job Description
						</Text>
						<Text className="text-[#666666] text-base leading-relaxed">
							{job.summary_short ||
								"No description provided for this job."}
						</Text>
					</View>

					{/* Skills & Expertise */}
					{job.skills_and_expertise &&
						job.skills_and_expertise.length > 0 && (
							<View className="mt-4">
								<Text className="text-[#808080] text-base font-semibold mb-2">
									Skills & Expertise
								</Text>
								<View className="flex flex-row flex-wrap gap-2">
									{job.skills_and_expertise.map(
										(skill, index) => (
											<View
												key={index}
												className="bg-[#F3FAFC] border border-[#DEF0F7] px-4 py-1.5 rounded-full"
											>
												<Text className="text-[#0D99C9] text-sm font-medium">
													{skill}
												</Text>
											</View>
										)
									)}
								</View>
							</View>
						)}

					{/* Apply Button */}
					<View className="mt-8">
						<Button
							title="Apply Now"
							className="bg-[#0D99C9] rounded-md"
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
