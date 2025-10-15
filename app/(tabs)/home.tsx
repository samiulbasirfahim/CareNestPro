import { Link } from "expo-router";
import { BadgeCheck, Bell, ListFilter, Search } from "lucide-react-native";
import {
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";

export interface JobProps {
	id: number;
	title: string;
	description: string;
	postedAt: string;
	budget: number;
}

export const jobs: JobProps[] = [
	{
		id: 1,
		postedAt: "Posted 10 minutes ago",
		title: "Housekeeper needed for 3-bedroom apartment (weekly service)",
		description:
			"Experienced housekeeper required to maintain cleanliness in a 3-bedroom apartment in Ikeja. Must be organized, punctual, and detail-oriented. Should know how to handle laundry and basic cooking.",
		budget: 15000,
	},
	{
		id: 2,
		postedAt: "Posted 20 minutes ago",
		title: "Nanny for weekend child care (Friday–Sunday)",
		description:
			"Looking for a caring nanny to stay with two toddlers over weekends. Meals provided. Must have prior childcare experience and references.",
		budget: 18500,
	},
	{
		id: 3,
		postedAt: "Posted 30 minutes ago",
		title: "Personal chef for private family (2-week contract)",
		description:
			"Private family in Lekki seeks a personal chef to prepare healthy meals. Knowledge of local and continental dishes required. Accommodation available.",
		budget: 30000,
	},
	{
		id: 4,
		postedAt: "Posted 45 minutes ago",
		title: "Driver needed for daily school runs",
		description:
			"Responsible driver required to pick and drop two kids daily. Must have valid driver’s license and clean record. Vehicle provided.",
		budget: 10000,
	},
	{
		id: 5,
		postedAt: "Posted 1 hour ago",
		title: "Elderly care assistant for 5-day shift",
		description:
			"Caring individual needed to assist an elderly woman with daily routines, light cooking, and companionship. Nursing background preferred.",
		budget: 22000,
	},
	{
		id: 6,
		postedAt: "Posted 1 hour ago",
		title: "Pet sitter for 7 days (dog & cat)",
		description:
			"Seeking trustworthy pet sitter for one week. Must feed, walk, and monitor pets daily. Accommodation optional.",
		budget: 12000,
	},
	{
		id: 7,
		postedAt: "Posted 2 hours ago",
		title: "Housemaid needed for family of four (live-in)",
		description:
			"Family in Victoria Island needs a full-time housemaid to handle cleaning, laundry, and childcare support. Meals and accommodation included.",
		budget: 20000,
	},
	{
		id: 8,
		postedAt: "Posted 3 hours ago",
		title: "Gardener for weekly lawn maintenance",
		description:
			"Looking for experienced gardener to manage small residential garden. Duties include trimming, watering, and general upkeep.",
		budget: 8000,
	},
	{
		id: 9,
		postedAt: "Posted 4 hours ago",
		title: "Temporary babysitter for 5 evenings",
		description:
			"Babysitter required for five consecutive evenings. Two children (ages 4 & 6). Must be patient and fun.",
		budget: 14000,
	},
	{
		id: 10,
		postedAt: "Posted 5 hours ago",
		title: "Laundry service provider (per-day work)",
		description:
			"Need someone skilled in laundry and ironing for a one-week service. Should provide quick, clean work.",
		budget: 9500,
	},
];

export default function Page() {
	return (
		<SafeAreaView className="w-full h-full">
			<View className="w-full h-40 flex flex-col gap-3 bg-[#F3FAFC] p-5">
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
							className="bg-white border-[#DEF0F7] border w-full rounded-md h-12 px-4 pl-12 text-foreground"
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
				className="p-5"
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
						description={job.description}
						postedAt={job.postedAt}
						budget={job.budget}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

function JobCard({ id, title, description, postedAt, budget }: JobProps) {
	return (
		<Link
			href={{
				pathname: "/job/[id]",
				params: { id },
			}}
			asChild
		>
			<Pressable className="w-full bg-white border border-[#E6E6E6] p-3 rounded-lg flex flex-col gap-2">
				<Text className="text-[#808080] text-sm font-medium">
					{postedAt}
				</Text>
				<Text className="text-[#4D4D4D] text-base font-medium">
					{title}
				</Text>
				<Text className="text-[#999999] text-base font-medium">
					{description}
				</Text>
				<Text className="text-[#436D7B] text-base font-medium">
					Budget - #{budget}/day
				</Text>
			</Pressable>
		</Link>
	);
}
