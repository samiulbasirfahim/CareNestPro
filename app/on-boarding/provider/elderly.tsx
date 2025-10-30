import { EnableLocationModal } from "@/components/common/enable-location-modal";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { useCareProviderStore } from "@/store/careProviderStore";
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
			if (
				careProviderData.profile_data.category_specific_details
					?.personality_and_interpersonal_skills &&
				careProviderData.profile_data.category_specific_details
					?.personality_and_interpersonal_skills.length === 0
			) {
				Toast.error(
					"Please select at least one services you can provide"
				);
				return;
			}
			if (careProviderData.profile_data.skills.length === 0) {
				Toast.error("Please select at least one skill");
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

			router.push({
				pathname: "/signup",
				params: { role: "elderly" },
			});
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Elderly care details"
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
							onPress={() => {
								setShowModal(true);
							}}
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

				<Text className="text-[#4D4D4D] font-medium text-base">
					Choose the services you can provide
				</Text>

				<View className="p-4 flex flex-col gap-4 rounded-lg border border-[#E6E6E6]">
					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Hypertension"
												)
											) {
												udpatedServices.push(
													"Hypertension"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Hypertension"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Hypertension
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Diabetes"
												)
											) {
												udpatedServices.push(
													"Diabetes"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Diabetes"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">Diabetes</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"clean-up help"
												)
											) {
												udpatedServices.push(
													"clean-up help"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "clean-up help"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								clean-up help
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Healthy Diet"
												)
											) {
												udpatedServices.push(
													"Healthy Diet"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Healthy Diet"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Healthy Diet
							</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"CPR Trained"
												)
											) {
												udpatedServices.push(
													"CPR Trained"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "CPR Trained"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								CPR Trained
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Non-smoker"
												)
											) {
												udpatedServices.push(
													"Non-smoker"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Non-smoker"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Non-smoker
							</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Medication Reminder"
												)
											) {
												udpatedServices.push(
													"Medication Reminder"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) =>
														s !==
														"Medication Reminder"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Medication Reminder
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Palliative care"
												)
											) {
												udpatedServices.push(
													"Palliative care"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) =>
														s !== "Palliative care"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Palliative care
							</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Willing to live-in"
												)
											) {
												udpatedServices.push(
													"Willing to live-in"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) =>
														s !==
														"Willing to live-in"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Willing to live-in
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Background checked"
												)
											) {
												udpatedServices.push(
													"Background checked"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) =>
														s !==
														"Background checked"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Background checked
							</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Speaks Yoruba"
												)
											) {
												udpatedServices.push(
													"Speaks Yoruba"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Speaks Yoruba"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Speaks Yoruba
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Speaks Igbo"
												)
											) {
												udpatedServices.push(
													"Speaks Igbo"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Speaks Igbo"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Speaks Igbo
							</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Speaks Hausa"
												)
											) {
												udpatedServices.push(
													"Speaks Hausa"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Speaks Hausa"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Speaks Hausa
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Special needs experience"
												)
											) {
												udpatedServices.push(
													"Special needs experience"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) =>
														s !==
														"Special needs experience"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Special needs experience
							</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let udpatedServices = [
											...(careProviderData.profile_data
												.category_specific_details
												?.personality_and_interpersonal_skills ||
												[]),
										];

										if (isChecked) {
											if (
												!udpatedServices.includes(
													"Can drive"
												)
											) {
												udpatedServices.push(
													"Can drive"
												);
											}
										} else {
											udpatedServices =
												udpatedServices.filter(
													(s) => s !== "Can drive"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													personality_and_interpersonal_skills:
														udpatedServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Can drive
							</Typography>
						</View>
					</View>
				</View>

				<Text className="text-[#4D4D4D] font-medium text-base">
					Choose the skill you have
				</Text>

				<View className="p-4 flex flex-col gap-4 rounded-lg border border-[#E6E6E6]">
					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"First Aid Certificate"
												)
											) {
												updatedSkills.push(
													"First Aid Certificate"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"First Aid Certificate"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								First Aid Certificate
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"CPR Certificate"
												)
											) {
												updatedSkills.push(
													"CPR Certificate"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !== "CPR Certificate"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								CPR Certificate
							</Typography>
						</View>
					</View>
					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"Special Needs care training"
												)
											) {
												updatedSkills.push(
													"Special Needs care training"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Special Needs care training"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Special Needs care training
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"Speech Therapist"
												)
											) {
												updatedSkills.push(
													"Speech Therapist"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !== "Speech Therapist"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Speech Therapist
							</Typography>
						</View>
					</View>
					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"Physical Therapist"
												)
											) {
												updatedSkills.push(
													"Physical Therapist"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Physical Therapist"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Physical Therapist
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"Occupational Therapist"
												)
											) {
												updatedSkills.push(
													"Occupational Therapist"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Occupational Therapist"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Occupational Therapist
							</Typography>
						</View>
					</View>

					<View className="w-full flex flex-row gap-1 items-center justify-start">
						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"Healthcare Assistance"
												)
											) {
												updatedSkills.push(
													"Healthcare Assistance"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Healthcare Assistance"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Healthcare Assistance
							</Typography>
						</View>

						<View className="flex-row w-[48%]">
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"Registered Nurse"
												)
											) {
												updatedSkills.push(
													"Registered Nurse"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !== "Registered Nurse"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												skills: updatedSkills,
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Registered Nurse
							</Typography>
						</View>
					</View>
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

				<DropDown
					list={["Tutoring", "Housekeeping", "Childcare"]}
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
