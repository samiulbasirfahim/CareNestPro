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
					.type_of_care_provider === ""
			) {
				Toast.error("Please select a type of care provider");
				return;
			}
			if (careProviderData.profile_data.skills.length === 0) {
				Toast.error("Please select at least one skill");
				return;
			}
			if (careProviderData.profile_data.experience_level === "") {
				Toast.error("Please select an experience level");
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
				params: { role: "childcare" },
			});
		} catch (err: any) {
			console.log(err.message);
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
					<View className="flex flex-col gap-1">
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
					</View>
					<View className="flex flex-col gap-1">
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
				<DropDown
					list={["Nanny", "Babysitter"]}
					title="What kind of child care provider are you"
					value={
						careProviderData.profile_data.category_specific_details
							.type_of_care_provider
					}
					onChange={(value: any) =>
						updateCareProviderData({
							profile_data: {
								...careProviderData.profile_data,
								category_specific_details: {
									...careProviderData.profile_data
										.category_specific_details,
									type_of_care_provider: value,
								},
							},
						})
					}
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
										let updatedSkills = [
											...careProviderData.profile_data
												.skills,
										];

										if (isChecked) {
											if (
												!updatedSkills.includes(
													"sleep-in"
												)
											) {
												updatedSkills.push("sleep-in");
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) => s !== "sleep-in"
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
							<Typography className="flex-1">sleep-in</Typography>
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
													"live-in"
												)
											) {
												updatedSkills.push("live-in");
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) => s !== "live-in"
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
							<Typography className="flex-1">live-in</Typography>
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
													"Non-smoker"
												)
											) {
												updatedSkills.push(
													"Non-smoker"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) => s !== "Non-smoker"
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
								Non-smoker
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
													"Cook basic meals"
												)
											) {
												updatedSkills.push(
													"Cook basic meals"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !== "Cook basic meals"
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
								Cook basic meals
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
													"Help with homework"
												)
											) {
												updatedSkills.push(
													"Help with homework"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Help with homework"
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
								Help with homework
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
													"Sign language"
												)
											) {
												updatedSkills.push(
													"Sign language"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) => s !== "Sign language"
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
								Sign language
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
													"Experience with autism"
												)
											) {
												updatedSkills.push(
													"Experience with autism"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Experience with autism"
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
								Experience with autism
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
													"Can drive"
												)
											) {
												updatedSkills.push("Can drive");
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) => s !== "Can drive"
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
								Can drive
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
													"Special needs experience"
												)
											) {
												updatedSkills.push(
													"Special needs experience"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Special needs experience"
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
								Special needs experience
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
													"Experience with speech delay"
												)
											) {
												updatedSkills.push(
													"Experience with speech delay"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Experience with speech delay"
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
								Experience with speech delay
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
													"Experience with twins"
												)
											) {
												updatedSkills.push(
													"Experience with twins"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Experience with twins"
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
								Experience with twins
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
													"Behavioral support"
												)
											) {
												updatedSkills.push(
													"Behavioral support"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Behavioral support"
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
								Behavioral support
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
													"Speaks Yoruba fluently"
												)
											) {
												updatedSkills.push(
													"Speaks Yoruba fluently"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Speaks Yoruba fluently"
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
								Speaks Yoruba fluently
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
													"Willingly to live-in"
												)
											) {
												updatedSkills.push(
													"Willingly to live-in"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Willingly to live-in"
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
								Willingly to live-in
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
													"Speaks Hausa fluently"
												)
											) {
												updatedSkills.push(
													"Speaks Hausa fluently"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Speaks Hausa fluently"
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
								Speaks Hausa fluently
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
													"Speaks Igbo fluently"
												)
											) {
												updatedSkills.push(
													"Speaks Igbo fluently"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Speaks Igbo fluently"
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
								Speaks Igbo fluently
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
													"Speaks French fluently"
												)
											) {
												updatedSkills.push(
													"Speaks French fluently"
												);
											}
										} else {
											updatedSkills =
												updatedSkills.filter(
													(s) =>
														s !==
														"Speaks French fluently"
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
								Speaks French fluently
							</Typography>
						</View>
					</View>
				</View>
				<Text className="text-[#4D4D4D] font-medium text-base">
					Choose the experience level
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
										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												experience_level: isChecked
													? "Newborn (Up to 12 months)"
													: "",
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Newborn (Up to 12 months)
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
										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												experience_level: isChecked
													? "Toddler (1-3 years)"
													: "",
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Toddler (1-3 years)
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
										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												experience_level: isChecked
													? "Early School Age (4-6 years)"
													: "",
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Early School Age (4-6 years)
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
										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												experience_level: isChecked
													? "Primary School Age (7-12 years)"
													: "",
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Primary School Age (7-12 years)
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
										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												experience_level: isChecked
													? "Teenager (12+ years)"
													: "",
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Teenager (12+ years)
							</Typography>
						</View>
					</View>
				</View>
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
					keyboardType="number-pad"
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

				<DropDown
					list={["Tutoring", "Housekeeping", "Elderly Care"]}
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
