import { JobProps, useJobsStore } from "@/store/jobsStore";
import { Link } from "expo-router";
import { BadgeCheck, Bell, ListFilter, Search } from "lucide-react-native";
import { useCallback, useEffect, useState } from "react";
import {
	Pressable,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";

export default function HomePage() {
	const { jobs, getJobs, isLoading, error } = useJobsStore();
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		getJobs();
	}, []);

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		await getJobs();
		setRefreshing(false);
	}, [getJobs]);

	if (isLoading && !refreshing) {
		return (
			<SafeAreaView className="w-full h-full flex items-center justify-center">
				<Text className="text-base font-medium">Loading jobs...</Text>
			</SafeAreaView>
		);
	}

	if (error) {
		return (
			<SafeAreaView className="w-full h-full flex items-center justify-center">
				<Text className="text-base font-medium text-red-500">
					{error}
				</Text>
			</SafeAreaView>
		);
	}

	if (!jobs.length) {
		return (
			<SafeAreaView className="w-full h-full flex items-center justify-center">
				<Text className="text-base font-medium">No jobs found</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView className="w-full h-full">
			<View className="w-full pt-14 h-40 flex flex-col gap-3 bg-[#F3FAFC] p-5">
				<View className="w-full flex flex-row items-center justify-between">
					<View className="flex flex-row gap-2 items-center">
						<BadgeCheck size={24} color="#DDF3DF" fill="#8ED796" />
						<Text className="text-[#636363] text-base font-medium">
							Hello, Susanna!
						</Text>
					</View>
					<View>
						<Bell size={18} color="#797676" fill="#797676" />
					</View>
				</View>

				<View className="w-full flex flex-row gap-6 items-center justify-between">
					<View className="relative flex-1 flex-row items-center">
						<TextInput
							className="bg-white border-[#DEF0F7] border w-full rounded-md h-12 px-4 pl-12 text-foreground placeholder:text-[#CCCCCC]"
							placeholder="Search for jobs"
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

					<Pressable className="bg-white p-3 rounded-md border border-[#DEF0F7]">
						<ListFilter size={18} color="#0D99C9" />
					</Pressable>
				</View>
			</View>
			<ScrollView
				className="p-5 bg-white"
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={["#0D99C9"]}
					/>
				}
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				{jobs.map((job, index) => (
					<JobCard
						key={index}
						id={job.id}
						title={job.title}
						summary_short={job.summary_short}
						posted_ago={job.posted_ago}
						budget_display={job.budget_display}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

function JobCard({
	id,
	title,
	summary_short,
	posted_ago,
	budget_display,
}: JobProps) {
	return (
		<Link
			href={{
				pathname: "/provider/(tabs)/home/[id]",
				params: { id },
			}}
			asChild
		>
			<Pressable className="w-full bg-white border border-[#E6E6E6] p-3 rounded-lg flex flex-col gap-2">
				<Text className="text-[#808080] text-sm font-medium">
					{posted_ago}
				</Text>
				<Text className="text-[#4D4D4D] text-base font-medium">
					{title}
				</Text>
				<Text className="text-[#999999] text-base font-medium">
					{summary_short}
				</Text>
				<Text className="text-[#436D7B] text-base font-medium">
					{budget_display}
				</Text>
			</Pressable>
		</Link>
	);
}
