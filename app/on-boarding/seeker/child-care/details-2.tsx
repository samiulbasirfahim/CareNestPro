import DateInput from "@/components/ui/date-input";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";

export default function Page() {
	const router = useRouter();

	const [ageOfChildOne, setAgeOfChildOne] = useState<Date | null>(null);

	return (
		<SafeAreaView className="w-full h-full">
			<Header
				title="Child care details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<DropDown
					list={["Nanny", "babysitter"]}
					title="Childcare Type"
				/>
				<DropDown
					list={[
						"1 Child",
						"2 Children",
						"3 Children",
						"4+ Children",
					]}
					title="Numbers of child(ren) that needs care"
				/>

				<View className="w-full flex-row gap-3 items-start">
					<View className="w-[36%] flex-1 flex items-center">
						<DateInput
							label="Age of child 1"
							placeholder="DD-MM-YYYY"
							value={ageOfChildOne}
							onChange={setAgeOfChildOne}
						/>
					</View>

					<View className="w-[60%] flex-1 flex items-center">
						<DropDown
							list={["Male", "Female", "Other"]}
							title="Gender of child 1"
						/>
					</View>
				</View>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() =>
						router.push("/on-boarding/seeker/child-care/details-3")
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
