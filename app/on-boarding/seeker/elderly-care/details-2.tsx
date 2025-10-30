import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { useCareSeekerStore } from "@/store/careSeekerStore";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, ScrollView } from "react-native";
import { Toast } from "toastify-react-native";

const getDefaultElderlyInfo = () => ({
	who_needs_care: "",
	elderly_care_type: "",
	relationship_with_elderly: "",
	age_of_elderly: "",
	gender_of_elderly: "",
	health_condition_of_elderly: "",
	other_health_condition: "",
	form_of_assistance_needed: [],
});

export default function Page() {
	const router = useRouter();

	const { careSeekerData, updateCareSeekerData } = useCareSeekerStore();

	const elderlyInfo =
		careSeekerData.job_data.details.elderly_information ||
		getDefaultElderlyInfo();

	const onSubmit = async () => {
		try {
			console.log("Elderly Care Details Submit:", elderlyInfo);

			if (!elderlyInfo.elderly_care_type) {
				Toast.show({
					type: "error",
					text1: "Please select the elderly care type",
				});
				return;
			}

			if (!elderlyInfo.relationship_with_elderly) {
				Toast.show({
					type: "error",
					text1: "Please select your relationship with the elderly",
				});
				return;
			}

			if (!elderlyInfo.age_of_elderly) {
				Toast.show({
					type: "error",
					text1: "Please enter the age of the elderly",
				});
				return;
			}

			if (!elderlyInfo.gender_of_elderly) {
				Toast.show({
					type: "error",
					text1: "Please select the gender of the elderly",
				});
				return;
			}

			if (!elderlyInfo.health_condition_of_elderly) {
				Toast.show({
					type: "error",
					text1: "Please select the health condition of the elderly",
				});
				return;
			}

			if (
				elderlyInfo.health_condition_of_elderly === "Others" &&
				!elderlyInfo.other_health_condition
			) {
				Toast.show({
					type: "error",
					text1: "Please specify the other health condition",
				});
				return;
			}

			if (
				!elderlyInfo.form_of_assistance_needed ||
				elderlyInfo.form_of_assistance_needed.length === 0
			) {
				Toast.show({
					type: "error",
					text1: "Please select at least one form of assistance needed",
				});
				return;
			}

			router.push("/on-boarding/seeker/elderly-care/details-3");
		} catch (err: any) {
			console.log("Error:", err.message);
			Toast.show({
				type: "error",
				text1: err.message || "Something went wrong, please try again.",
			});
		}
	};

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
					value={elderlyInfo.elderly_care_type}
					onChange={(value: string) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									elderly_information: {
										...elderlyInfo,
										elderly_care_type: value,
									},
								},
							},
						})
					}
				/>
				<DropDown
					list={["Cousin", "Friend", "Niece", "Other"]}
					title="Relationship with elderly"
					value={elderlyInfo.relationship_with_elderly}
					onChange={(value: string) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									elderly_information: {
										...elderlyInfo,
										relationship_with_elderly: value,
									},
								},
							},
						})
					}
				/>

				<Input
					className="text-title font-semibold"
					label="Age of elderly"
					placeholder="Input age"
					value={elderlyInfo.age_of_elderly}
					onChangeText={(value: string) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									elderly_information: {
										...elderlyInfo,
										age_of_elderly: value,
									},
								},
							},
						})
					}
				/>

				<DropDown
					list={["Male", "Female", "Other"]}
					title="Gender of elderly"
					value={elderlyInfo.gender_of_elderly}
					onChange={(value: string) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									elderly_information: {
										...elderlyInfo,
										gender_of_elderly: value,
									},
								},
							},
						})
					}
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
					value={elderlyInfo.health_condition_of_elderly}
					onChange={(value: string) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									elderly_information: {
										...elderlyInfo,
										health_condition_of_elderly: value,
									},
								},
							},
						})
					}
				/>

				<Input
					label="(If others) Specify"
					placeholder="Input health condition of elderly"
					value={elderlyInfo.other_health_condition}
					onChangeText={(value: string) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									elderly_information: {
										...elderlyInfo,
										other_health_condition: value,
									},
								},
							},
						})
					}
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
					values={elderlyInfo.form_of_assistance_needed}
					onChange={(value: any) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									elderly_information: {
										...elderlyInfo,
										form_of_assistance_needed: value,
									},
								},
							},
						})
					}
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
