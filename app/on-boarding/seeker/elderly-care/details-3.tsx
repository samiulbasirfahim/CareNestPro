import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useCareSeekerStore } from "@/store/careSeekerStore";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import { Toast } from "toastify-react-native";

export default function Page() {
	const router = useRouter();
	const { careSeekerData, updateCareSeekerData } = useCareSeekerStore();

	const onSubmit = async () => {
		try {
			console.log("On Submit");
			console.log(careSeekerData);

			const experienceReq =
				careSeekerData.job_data.details
					.provider_experience_requirements;

			if (
				!experienceReq?.personality_and_interpersonal_skills ||
				experienceReq.personality_and_interpersonal_skills.length === 0
			) {
				Toast.show({
					type: "error",
					text1: "Please select at least one personality skill",
				});
				return;
			}

			if (
				!experienceReq?.communication_and_language ||
				experienceReq.communication_and_language.length === 0
			) {
				Toast.show({
					type: "error",
					text1: "Please select at least one communication language",
				});
				return;
			}

			if (
				!experienceReq?.special_preferences ||
				experienceReq.special_preferences.length === 0
			) {
				Toast.show({
					type: "error",
					text1: "Please select at least one special preference",
				});
				return;
			}

			if (
				!experienceReq?.additional_care_categories ||
				experienceReq.additional_care_categories.length === 0
			) {
				Toast.show({
					type: "error",
					text1: "Please select at least one additional care category",
				});
				return;
			}

			router.push("/on-boarding/seeker/elderly-care/details-4");
		} catch (err: any) {
			console.log("Error: ", err.message);
			Toast.show({
				type: "error",
				text1: "Something went wrong, please try again.",
			});
		}
	};

	return (
		<SafeAreaView className="flex-1 w-full h-full bg-white">
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
								?.personality_and_interpersonal_skills
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								additional_care_categories: [],
								personality_and_interpersonal_skills: [],
								preferred_option: [],
							};

							updateCareSeekerData({
								job_data: {
									...careSeekerData.job_data,
									details: {
										...careSeekerData.job_data.details,
										provider_experience_requirements: {
											...existingSeekerInfo,
											personality_and_interpersonal_skills:
												value,
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
								?.communication_and_language
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								additional_care_categories: [],
								personality_and_interpersonal_skills: [],
								preferred_option: [],
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
								?.special_preferences
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								additional_care_categories: [],
								personality_and_interpersonal_skills: [],
								preferred_option: [],
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
						list={["Childcare", "Tutoring", "Housekeeping"]}
						title="Want your care provider to offer more than one type of care?"
						subtitle="Select an extra category below"
						isMulti={true}
						values={
							careSeekerData.job_data.details
								.provider_experience_requirements
								?.additional_care_categories
						}
						onChange={(value: any) => {
							const existingSeekerInfo = careSeekerData.job_data
								.details.provider_experience_requirements || {
								communication_and_language: [],
								special_preferences: [],
								additional_care_categories: [],
								personality_and_interpersonal_skills: [],
								preferred_option: [],
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
