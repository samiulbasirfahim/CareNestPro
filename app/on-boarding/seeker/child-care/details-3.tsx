import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useCareSeekerStore } from "@/store/careSeekerStore";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "toastify-react-native";

export default function Page() {
	const router = useRouter();
	const { careSeekerData, updateCareSeekerData } = useCareSeekerStore();

	const onSubmit = async () => {
		try {
			console.log("On Submit");
			console.log(careSeekerData);
			if (
				careSeekerData.job_data.details.provider_experience_requirements
					?.communication_and_language.length === 0
			) {
				Toast.error(
					"Please select at least one communication language"
				);
				return;
			}
			if (
				careSeekerData.job_data.details.provider_experience_requirements
					?.special_preferences.length === 0
			) {
				Toast.error("Please select at least one special preference");
				return;
			}
			if (
				careSeekerData.job_data.details.provider_experience_requirements
					?.preferred_option.length === 0
			) {
				Toast.error("Please select at least one preferred option");
				return;
			}

			router.push({
				pathname: "/on-boarding/seeker/child-care/details-4",
				params: { role: "childcare" },
			});
		} catch (err: any) {
			console.log("Error: ", err.message);
		}
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<Header
				title="Child care details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-3 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 60,
				}}
			>
				<View className="w-full flex flex-wrap flex-row gap-1 py-3">
					<Typography className="font-semibold text-black">
						What qualities, skills and language would you like your
						caregiver to possess (optional)?
						<Typography className="font-normal text-[#808080]">
							{" "}
							Select care giver preference.
						</Typography>
					</Typography>
				</View>

				<View className="w-full flex flex-row gap-6 py-3">
					<DropDown
						list={["Live-In", "Live-Out", "Hybrid"]}
						title="Personality and Interpersonal Skills"
						isMulti={true}
						values={
							careSeekerData.job_data.details
								.provider_experience_requirements
								?.preferred_option
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								preferred_option: [],
								additional_care_categories: [],
							};

							updateCareSeekerData({
								job_data: {
									...careSeekerData.job_data,
									details: {
										...careSeekerData.job_data.details,
										provider_experience_requirements: {
											...existingSeekerInfo,
											preferred_option: value,
										},
									},
								},
							});
						}}
					/>
				</View>

				<View className="w-full flex flex-row gap-6 py-3">
					<DropDown
						list={[
							"Fluent in English",
							"Fluent in French",
							"Fluent in Spanish",
							"Fluent in Yoruba",
							"Fluent in Igbo",
							"Fluent in Idoma",
							"Fluent in Edo",
						]}
						title="Communication & Language"
						isMulti={true}
						values={
							careSeekerData.job_data.details
								.provider_experience_requirements
								?.preferred_option
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								preferred_option: [],
								additional_care_categories: [],
							};

							updateCareSeekerData({
								job_data: {
									...careSeekerData.job_data,
									details: {
										...careSeekerData.job_data.details,
										provider_experience_requirements: {
											...existingSeekerInfo,
											communication_and_language: value,
										},
									},
								},
							});
						}}
					/>
				</View>

				<View className="w-full flex flex-row gap-6 py-3">
					<DropDown
						list={[
							"Experience with Autism",
							"Experience with ADHD",
							"Experience with Cerebral Palsy",
							"Experience with Twins or Multiples",
							"Experience with Special Needs",
							"Experience with Speech Delay",
						]}
						title="Special Preferences"
						isMulti={true}
						values={
							careSeekerData.job_data.details
								.provider_experience_requirements
								?.preferred_option
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								preferred_option: [],
								additional_care_categories: [],
							};

							updateCareSeekerData({
								job_data: {
									...careSeekerData.job_data,
									details: {
										...careSeekerData.job_data.details,
										provider_experience_requirements: {
											...existingSeekerInfo,
											special_preferences: value,
										},
									},
								},
							});
						}}
					/>
				</View>

				<View className="w-full flex flex-row gap-6 py-3">
					<DropDown
						list={["Elderly Care", "Tutoring", "Housekeeping"]}
						title="Want your care provider to offer more than one type of care?"
						subtitle="Select an extra category below"
						isMulti={true}
						values={
							careSeekerData.job_data.details
								.provider_experience_requirements
								?.preferred_option
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								preferred_option: [],
								additional_care_categories: [],
							};

							updateCareSeekerData({
								job_data: {
									...careSeekerData.job_data,
									details: {
										...careSeekerData.job_data.details,
										provider_experience_requirements: {
											...existingSeekerInfo,
											additional_care_categories: value,
										},
									},
								},
							});
						}}
					/>
				</View>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={onSubmit}
					className="bg-primary items-center py-3 rounded-lg w-full mt-6"
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
