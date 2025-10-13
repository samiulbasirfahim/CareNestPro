import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView } from "react-native";

export default function Page() {
	const router = useRouter();

	const [ageOfChildOne, setAgeOfChildOne] = useState<Date | null>(null);

	return (
		<SafeAreaView className="w-full h-full">
			<Header
				title="Elderly care details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 60,
				}}
				contentContainerClassName="gap-6"
			>
				<DropDown
					list={[
						"English",
						"Mathematics",
						"Basic science",
						"Phonetics",
						"Others",
					]}
					title="What subject(s) need tutoring"
					isMulti={true}
				/>
				<DropDown
					list={["Group Lessons", "Individual Tutoring"]}
					title="What is the learning environment needed"
				/>

				<DropDown
					list={[
						"Exam preparation",
						"Homework help",
						"Special needs tutoring",
						"Homeschooling (onsite)",
						"Online Tutoring",
					]}
					title="What is the purpose of this learning"
				/>

				<DropDown
					list={[
						"1 - 5 years",
						"6 - 10 years",
						"11 - 15 years",
						"16 - 20 years",
						"21 - 25 years",
						"26 - 30 years",
						"Above 30",
					]}
					title="Age range of the student"
				/>

				<Input
					label="(If others) Specify"
					placeholder="Input health condition of elderly"
				/>

				<DropDown
					list={["Child Care", "Elderly Care", "Housekeeping"]}
					title="Additional Care"
					isMulti={true}
				/>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() =>
						router.push("/on-boarding/seeker/tutoring/details-3")
					}
					className="bg-primary items-center py-3 rounded-lg w-full"
				>
					<Typography
						variant="subtitle"
						className="text-center text-lg text-white font-semibold"
					>
						Next
					</Typography>
				</Pressable>
			</ScrollView>
		</SafeAreaView>
	);
}
