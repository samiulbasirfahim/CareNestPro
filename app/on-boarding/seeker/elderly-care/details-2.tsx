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
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Elderly care details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 60,
				}}
				contentContainerClassName="gap-6"
			>
				<DropDown
					list={["Copanionship", "Carer"]}
					title="Elderly care Type"
				/>
				<DropDown
					list={["Cousin", "Friend", "Niece", "Other"]}
					title="Relationship with elderly"
				/>

				<Input
					className="text-title font-semibold"
					label="Age of elderly"
					placeholder="Input age"
				/>

				<DropDown
					list={["Male", "Female", "Other"]}
					title="Gender of elderly"
				/>

				<DropDown
					list={[
						"Stroke",
						"Cancer",
						"Hypertension",
						"Just old age symptoms",
						"Dimentia",
						"Others",
					]}
					title="Health condition of elderly"
					isMulti={true}
				/>

				<Input
					label="(If others) Specify"
					placeholder="Input health condition of elderly"
				/>

				<DropDown
					list={[
						"Mobility",
						"Feeding",
						"Bathing",
						"Company",
						"Others",
					]}
					title="What form of assistance is needed"
					isMulti={true}
				/>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() =>
						router.push(
							"/on-boarding/seeker/elderly-care/details-3"
						)
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
