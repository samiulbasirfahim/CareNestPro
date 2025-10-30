import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useCareSeekerStore } from "@/store/careSeekerStore";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, ScrollView } from "react-native";
import { Toast } from "toastify-react-native";

const getDefaultTutoringInfo = () => ({
	subjects_needed: [],
	learning_environment_needed: "",
	purpose_of_learning: "",
	age_range_of_student: "",
	additional_care: [],
});

export default function Page() {
	const router = useRouter();

	const { careSeekerData, updateCareSeekerData } = useCareSeekerStore();

	const tutoringInfo =
		careSeekerData.job_data.details.tutoring_information ||
		getDefaultTutoringInfo();

	const onSubmit = async () => {
		try {
			console.log("Tutoring Details Submit:", tutoringInfo);

			if (
				!tutoringInfo.subjects_needed ||
				tutoringInfo.subjects_needed.length === 0
			) {
				Toast.show({
					type: "error",
					text1: "Please select at least one subject for tutoring",
				});
				return;
			}

			if (!tutoringInfo.learning_environment_needed) {
				Toast.show({
					type: "error",
					text1: "Please select a learning environment",
				});
				return;
			}

			if (!tutoringInfo.purpose_of_learning) {
				Toast.show({
					type: "error",
					text1: "Please select the purpose of learning",
				});
				return;
			}

			if (!tutoringInfo.age_range_of_student) {
				Toast.show({
					type: "error",
					text1: "Please select the age range of the student",
				});
				return;
			}

			if (
				!tutoringInfo.additional_care ||
				tutoringInfo.additional_care.length === 0
			) {
				Toast.show({
					type: "error",
					text1: "Please select at least one additional care option",
				});
				return;
			}

			router.push("/on-boarding/seeker/tutoring/details-3");
		} catch (err: any) {
			console.log("Error:", err.message);
			Toast.show({
				type: "error",
				text1: "Something went wrong, please try again.",
			});
		}
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Tutoring details"
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
					list={[
						"English",
						"Mathematics",
						"Basic science",
						"Phonetics",
						"Others",
					]}
					title="What subject(s) need tutoring"
					isMulti={true}
					values={tutoringInfo.subjects_needed}
					onChange={(value: any) => {
						const existingSeekerInfo = careSeekerData.job_data
							.details.tutoring_information || {
							subjects_needed: [],
							learning_environment_needed: "",
							purpose_of_learning: "",
							age_range_of_student: "",
							additional_care: [],
						};

						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									tutoring_information: {
										...existingSeekerInfo,
										subjects_needed: value,
									},
								},
							},
						});
					}}
				/>
				<DropDown
					list={["Group Lessons", "Individual Tutoring"]}
					title="What is the learning environment needed"
					value={tutoringInfo.learning_environment_needed}
					onChange={(value: any) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									tutoring_information: {
										...tutoringInfo,
										learning_environment_needed: value,
									},
								},
							},
						})
					}
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
					value={tutoringInfo.purpose_of_learning}
					onChange={(value: any) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									tutoring_information: {
										...tutoringInfo,
										purpose_of_learning: value,
									},
								},
							},
						})
					}
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
					value={tutoringInfo.age_range_of_student}
					onChange={(value: any) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									tutoring_information: {
										...tutoringInfo,
										age_range_of_student: value,
									},
								},
							},
						})
					}
				/>

				<DropDown
					list={["Child Care", "Elderly Care", "Housekeeping"]}
					title="Additional Care"
					isMulti={true}
					values={tutoringInfo.additional_care}
					onChange={(value: any) => {
						const existingSeekerInfo = careSeekerData.job_data
							.details.tutoring_information || {
							subjects_needed: [],
							learning_environment_needed: "",
							purpose_of_learning: "",
							age_range_of_student: "",
							additional_care: [],
						};

						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									tutoring_information: {
										...existingSeekerInfo,
										additional_care: value,
									},
								},
							},
						});
					}}
				/>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={onSubmit}
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
