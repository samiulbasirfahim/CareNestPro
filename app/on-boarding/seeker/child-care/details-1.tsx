import { EnableLocationModal } from "@/components/common/enable-location-modal";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { useCareSeekerStore } from "@/store/careSeekerStore";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Toast } from "toastify-react-native";

export default function Page() {
	const [showModal, setShowModal] = useState<boolean>(false);

	const { careSeekerData, updateCareSeekerData } = useCareSeekerStore();

	const onSubmit = async () => {
		try {
			console.log("On Submit");
			console.log(careSeekerData);
			if (careSeekerData.user_data.first_name === "") {
				Toast.error("Please enter a first name");
				return;
			}
			if (careSeekerData.user_data.last_name === "") {
				Toast.error("Please enter a last name");
				return;
			}
			if (
				careSeekerData.job_data.details.location_information
					.preferred_language === ""
			) {
				Toast.error("Please select a preferred language");
				return;
			}
			if (
				careSeekerData.job_data.details.location_information.country ===
				""
			) {
				Toast.error("Please enter your country");
				return;
			}
			if (
				careSeekerData.job_data.details.location_information.state ===
				""
			) {
				Toast.error("Please enter your state");
				return;
			}
			if (
				careSeekerData.job_data.details.location_information.city === ""
			) {
				Toast.error("Please enter your city");
				return;
			}
			if (
				careSeekerData.job_data.details.location_information
					.zip_code === ""
			) {
				Toast.error("Please enter your zip code");
				return;
			}
			if (
				careSeekerData.job_data.details.location_information
					.nationality === ""
			) {
				Toast.error("Please enter your nationality");
				return;
			}

			router.push({
				pathname: "/on-boarding/seeker/child-care/details-2",
				params: { role: "childcare" },
			});
		} catch (err: any) {
			console.log("Error: ", err.message);
		}
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Child care details"
				subtitle="Welcome! Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 60,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="flex flex-col gap-6">
					<Input
						label="First Name"
						placeholder="Input First Name"
						value={careSeekerData.user_data.first_name}
						onChangeText={(value: any) => {
							updateCareSeekerData({
								user_data: {
									...careSeekerData.user_data,
									first_name: value,
								},
							});
						}}
					/>
					<Input
						label="Last Name"
						placeholder="Input Last Name"
						value={careSeekerData.user_data.last_name}
						onChangeText={(value: any) => {
							updateCareSeekerData({
								user_data: {
									...careSeekerData.user_data,
									last_name: value,
								},
							});
						}}
					/>
				</View>

				<View className="flex-row">
					<View className="flex-shrink-0">
						<BouncyCheckbox
							innerIconStyle={{
								borderWidth: 2,
								width: 20,
								height: 20,
								borderRadius: 6,
								borderColor: "#CCCCCC",
							}}
							iconStyle={{
								width: 20,
								height: 20,
								borderRadius: 6,
								borderColor: "#CCCCCC",
							}}
							fillColor="#0D99C9"
							onPress={() => {
								setShowModal(true);
							}}
						/>
					</View>
					<Typography>Use my current Location instead</Typography>
				</View>

				<DropDown
					list={["English", "Spanish", "French", "Igbo"]}
					title="Preferred Language"
					value={
						careSeekerData.job_data.details.location_information
							.preferred_language
					}
					onChange={(value: any) => {
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									location_information: {
										...careSeekerData.job_data.details
											.location_information,
										preferred_language: value,
									},
								},
							},
						});
					}}
				/>
				<Input
					label="Country"
					placeholder="Input country"
					value={
						careSeekerData.job_data.details.location_information
							.country
					}
					onChangeText={(value: any) => {
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									location_information: {
										...careSeekerData.job_data.details
											.location_information,
										country: value,
									},
								},
							},
						});
					}}
				/>
				<Input
					label="State"
					placeholder="Input state"
					value={
						careSeekerData.job_data.details.location_information
							.state
					}
					onChangeText={(value: any) => {
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									location_information: {
										...careSeekerData.job_data.details
											.location_information,
										state: value,
									},
								},
							},
						});
					}}
				/>
				<Input
					label="City"
					placeholder="Input City"
					value={
						careSeekerData.job_data.details.location_information
							.city
					}
					onChangeText={(value: any) => {
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									location_information: {
										...careSeekerData.job_data.details
											.location_information,
										city: value,
									},
								},
							},
						});
					}}
				/>
				<Input
					label="Zip Code"
					placeholder="Input Zip Code"
					value={
						careSeekerData.job_data.details.location_information
							.zip_code
					}
					onChangeText={(value: any) => {
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									location_information: {
										...careSeekerData.job_data.details
											.location_information,
										zip_code: value,
									},
								},
							},
						});
					}}
				/>
				<Input
					label="Nationality"
					placeholder="Input nationality"
					value={
						careSeekerData.job_data.details.location_information
							.nationality
					}
					onChangeText={(value: any) => {
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									location_information: {
										...careSeekerData.job_data.details
											.location_information,
										nationality: value,
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
					className="bg-primary items-center py-3 rounded-lg w-full border-2 border-primary"
					onPress={onSubmit}
				>
					<Typography
						variant="subtitle"
						className="text-center text-lg text-white font-semibold"
					>
						Next
					</Typography>
				</Pressable>
			</ScrollView>
			<EnableLocationModal
				showModal={showModal}
				onClose={() => {
					setShowModal(false);
				}}
			/>
		</SafeAreaView>
	);
}
