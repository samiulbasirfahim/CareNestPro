import { useCareProviderStore } from "@/app/store/careProviderStore";
import { EnableLocationModal } from "@/components/common/enable-location-modal";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Toast } from "toastify-react-native";

export default function Page() {
	const [showModal, setShowModal] = useState<boolean>(false);

	const router = useRouter();

	const { careProviderData, updateCareProviderData } = useCareProviderStore();

	const onSubmit = async () => {
		try {
			console.log("On submit");
			console.log(careProviderData);

			if (careProviderData.user_data.first_name === "") {
				Toast.error("Please enter a fist name");
				return;
			}
			if (careProviderData.user_data.last_name === "") {
				Toast.error("Please enter a last name");
				return;
			}
			if (careProviderData.profile_data.languages.length === 0) {
				Toast.error("Please select at least one language");
				return;
			}
			if (careProviderData.profile_data.country === "") {
				Toast.error("Please select a country");
				return;
			}
			if (careProviderData.profile_data.state === "") {
				Toast.error("Please select a state");
				return;
			}
			if (careProviderData.profile_data.city === "") {
				Toast.error("Please enter a city");
				return;
			}
			if (careProviderData.profile_data.zip_code === "") {
				Toast.error("Please enter a zip code");
				return;
			}
			if (careProviderData.profile_data.nationality === "") {
				Toast.error("Please select a nationality");
				return;
			}
			if (careProviderData.profile_data.about_me === "") {
				Toast.error("Please enter your about me");
				return;
			}
			if (careProviderData.profile_data.profile_title === "") {
				Toast.error("Please enter a title");
				return;
			}
			if (careProviderData.profile_data.years_of_experience === 0) {
				Toast.error("Please select your years of experience");
				return;
			}
			if (careProviderData.profile_data.native_language === "") {
				Toast.error("Please select a native language");
				return;
			}
			if (
				careProviderData.profile_data.category_specific_details
					.communication_language === ""
			) {
				Toast.error("Please select an other language");
				return;
			}
			if (
				careProviderData.profile_data.category_specific_details
					.housekeeping_preference.length === 0
			) {
				Toast.error(
					"Please select atleast one housekeeping preference"
				);
				return;
			}

			router.push({
				pathname: "/signup",
				params: { role: "housekeeping" },
			});
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Housekeeping details"
				subtitle="Welcome! Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="flex flex-col gap-6">
					<Input
						label="First Name"
						placeholder="Input First Name"
						value={careProviderData.user_data.first_name}
						onChangeText={(value: any) => {
							updateCareProviderData({
								user_data: {
									...careProviderData.user_data,
									first_name: value,
								},
							});
						}}
					/>
					<Input
						label="Last Name"
						placeholder="Input Last Name"
						value={careProviderData.user_data.last_name}
						onChangeText={(value: any) => {
							updateCareProviderData({
								user_data: {
									...careProviderData.user_data,
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
						/>
					</View>
					<Typography className="flex-1">
						Use my current Location instead
					</Typography>
				</View>

				<DropDown
					list={["English", "Spanish", "French", "Igbo"]}
					title="Preferred Language"
					isMulti={true}
					values={careProviderData.profile_data.languages}
					onChange={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								languages: value,
							},
						});
					}}
				/>
				<Input
					label="Country"
					placeholder="Input country"
					value={careProviderData.profile_data.country}
					onChangeText={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								country: value,
							},
						});
					}}
				/>
				<Input
					label="State"
					placeholder="Input state"
					value={careProviderData.profile_data.state}
					onChangeText={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								state: value,
							},
						});
					}}
				/>
				<Input
					label="City"
					placeholder="Input City"
					value={careProviderData.profile_data.city}
					onChangeText={(text: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								city: text,
							},
						});
					}}
				/>
				<Input
					label="Zip Code"
					placeholder="Input Zip Code"
					value={careProviderData.profile_data.zip_code}
					onChangeText={(text: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								zip_code: text,
							},
						});
					}}
				/>
				<Input
					label="Nationality"
					placeholder="Input nationality"
					value={careProviderData.profile_data.nationality}
					onChangeText={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								nationality: value,
							},
						});
					}}
				/>

				<Textarea
					label="Tell us about yourself"
					placeholder="Kindly highlight your skills and experience, The childcare services you offer and other relevant information."
					value={careProviderData.profile_data.about_me}
					onChange={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								about_me: value,
							},
						});
					}}
				/>
				<Textarea
					label="Title"
					placeholder="Give your application a title that sums you up as a child care provider"
					value={careProviderData.profile_data.profile_title}
					onChange={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								profile_title: value,
							},
						});
					}}
				/>

				<View className="flex-row">
					<View className="flex-shrink-0 w-8">
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
						/>
					</View>
					<Typography className="flex-1">
						I would like to automatically send the above application
						to potential careseekers
					</Typography>
				</View>

				<Input
					label="Years of experience"
					placeholder="Input years of experience"
					value={careProviderData.profile_data.years_of_experience.toString()}
					onChangeText={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								years_of_experience: value,
							},
						});
					}}
				/>
				<DropDown
					list={["English", "Mandarine", "Others"]}
					title="Native Language"
					value={careProviderData.profile_data.native_language}
					onChange={(value: any) =>
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								native_language: value,
							},
						})
					}
				/>
				<DropDown
					list={["English", "Mandarine", "Others"]}
					title="Other Language"
					value={
						careProviderData.profile_data.category_specific_details
							.communication_language
					}
					onChange={(value: any) =>
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								category_specific_details: {
									...careProviderData.profile_data
										.category_specific_details,
									communication_language: value,
								},
							},
						})
					}
				/>

				<Text className="text-[#4D4D4D] font-medium text-base">
					Choose your house keeping preference
				</Text>

				<View className="p-4 flex flex-col gap-4 rounded-lg border border-[#E6E6E6]">
					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-full">
							<View className="flex-shrink-0 w-8">
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
									onPress={(isChecked: boolean) => {
										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													housekeeping_preference:
														isChecked
															? "Interested in live-in jobs"
															: "",
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1 text-[#666666]">
								Interested in live-in jobs
							</Typography>
						</View>
					</View>
				</View>

				<View className="p-4 flex flex-col gap-4 rounded-lg border border-[#E6E6E6]">
					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-full">
							<View className="flex-shrink-0 w-8">
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
									onPress={(isChecked: boolean) => {
										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													housekeeping_preference:
														isChecked
															? "Interested in live-out jobs"
															: "",
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1 text-[#666666]">
								Interested in live-out jobs
							</Typography>
						</View>
					</View>
				</View>

				<DropDown
					list={["Child Care", "Tutoring", "Elderly Care"]}
					title="Other services you can offer"
					isMulti={true}
					values={careProviderData.profile_data.additional_services}
					onChange={(value: any) => {
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								additional_services: value,
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
