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
				title="Housekeeping care details"
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
						"House keeper",
						"Cook",
						"Laundry Support",
						"Cleaner",
						"Others",
					]}
					title="What kind of Housekeeping"
				/>
				<DropDown
					list={[
						"Bungalow",
						"Duplex",
						"2 storey building",
						"3 storey building",
						"Others",
					]}
					title="Size of your house"
				/>

				<Input
					label="Number of Bedrooms"
					placeholder="Input number of bedrooms"
				/>
				<Input
					label="Number of Bathrooms"
					placeholder="Input number of bathrooms"
				/>
				<Input
					label="Number of Toilets"
					placeholder="Input number of Toilets"
				/>

				<DropDown
					list={["Option 1", "Option 2", "Option 3", "Others"]}
					title="Pets present"
				/>

				<Input
					label="(If yes) Specify Pet present"
					placeholder="Input pet name"
				/>

				<DropDown
					list={["Child Care", "Elderly Care", "Tutoring"]}
					title="Additional Care"
					isMulti={true}
				/>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() =>
						router.push("/on-boarding/housekeeping/details-3")
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
