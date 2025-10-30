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
					.subjects_experienced_in.length === 0
			) {
				Toast.error(
					"Please select atleast one subject you experienced"
				);
				return;
			}
			if (
				careProviderData.profile_data.category_specific_details
					.tutoring_services.length === 0
			) {
				Toast.error(
					"Please select atleast one tutoring service you would offer"
				);
				return;
			}
			if (
				careProviderData.profile_data.category_specific_details
					.experience_level_taught.length === 0
			) {
				Toast.error(
					"Please select atleast one experience level you have taught"
				);
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
				params: { role: "tutoring" },
			});
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Tutoring details"
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
					Choose the experiences that would help the care provider
					support you better.
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"Mathematics"
												)
											) {
												experiencedSubjects.push(
													"Mathematics"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) => s !== "Mathematics"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Mathematics
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"English"
												)
											) {
												experiencedSubjects.push(
													"English"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) => s !== "English"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">English</Typography>
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"Physics"
												)
											) {
												experiencedSubjects.push(
													"Physics"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) => s !== "Physics"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">Physics</Typography>
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"Chemistry"
												)
											) {
												experiencedSubjects.push(
													"Chemistry"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) => s !== "Chemistry"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Chemistry
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"Science"
												)
											) {
												experiencedSubjects.push(
													"Science"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) => s !== "Science"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">Science</Typography>
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"History"
												)
											) {
												experiencedSubjects.push(
													"History"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) => s !== "History"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">History</Typography>
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"Other Languages"
												)
											) {
												experiencedSubjects.push(
													"Other Languages"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) =>
														s !== "Other Languages"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Other Languages
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
										let experiencedSubjects = [
											...careProviderData.profile_data
												.category_specific_details
												.subjects_experienced_in,
										];

										if (isChecked) {
											if (
												!experiencedSubjects.includes(
													"Music"
												)
											) {
												experiencedSubjects.push(
													"Music"
												);
											}
										} else {
											experiencedSubjects =
												experiencedSubjects.filter(
													(s) => s !== "Music"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													subjects_experienced_in:
														experiencedSubjects,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">Music</Typography>
						</View>
					</View>
				</View>

				<Text className="text-[#4D4D4D] font-medium text-base">
					Choose the type of tutoring services you would be providing
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
										let tutoringServices = [
											...careProviderData.profile_data
												.category_specific_details
												.tutoring_services,
										];

										if (isChecked) {
											if (
												!tutoringServices.includes(
													"Individual Tutoring"
												)
											) {
												tutoringServices.push(
													"Individual Tutoring"
												);
											}
										} else {
											tutoringServices =
												tutoringServices.filter(
													(s) =>
														s !==
														"Individual Tutoring"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													tutoring_services:
														tutoringServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Individual Tutoring
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
										let tutoringServices = [
											...careProviderData.profile_data
												.category_specific_details
												.tutoring_services,
										];

										if (isChecked) {
											if (
												!tutoringServices.includes(
													"Group Lessons"
												)
											) {
												tutoringServices.push(
													"Group Lessons"
												);
											}
										} else {
											tutoringServices =
												tutoringServices.filter(
													(s) => s !== "Group Lessons"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													tutoring_services:
														tutoringServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Group Lessons
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
										let tutoringServices = [
											...careProviderData.profile_data
												.category_specific_details
												.tutoring_services,
										];

										if (isChecked) {
											if (
												!tutoringServices.includes(
													"Exam Preparation"
												)
											) {
												tutoringServices.push(
													"Exam Preparation"
												);
											}
										} else {
											tutoringServices =
												tutoringServices.filter(
													(s) =>
														s !== "Exam Preparation"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													tutoring_services:
														tutoringServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Exam Preparation
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
										let tutoringServices = [
											...careProviderData.profile_data
												.category_specific_details
												.tutoring_services,
										];

										if (isChecked) {
											if (
												!tutoringServices.includes(
													"Homework help"
												)
											) {
												tutoringServices.push(
													"Homework help"
												);
											}
										} else {
											tutoringServices =
												tutoringServices.filter(
													(s) => s !== "Homework help"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													tutoring_services:
														tutoringServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Homework help
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
										let tutoringServices = [
											...careProviderData.profile_data
												.category_specific_details
												.tutoring_services,
										];

										if (isChecked) {
											if (
												!tutoringServices.includes(
													"Special needs tutoring"
												)
											) {
												tutoringServices.push(
													"Special needs tutoring"
												);
											}
										} else {
											tutoringServices =
												tutoringServices.filter(
													(s) =>
														s !==
														"Special needs tutoring"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													tutoring_services:
														tutoringServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Special needs tutoring
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
										let tutoringServices = [
											...careProviderData.profile_data
												.category_specific_details
												.tutoring_services,
										];

										if (isChecked) {
											if (
												!tutoringServices.includes(
													"Homeschooling"
												)
											) {
												tutoringServices.push(
													"Homeschooling"
												);
											}
										} else {
											tutoringServices =
												tutoringServices.filter(
													(s) => s !== "Homeschooling"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													tutoring_services:
														tutoringServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Homeschooling
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
										let tutoringServices = [
											...careProviderData.profile_data
												.category_specific_details
												.tutoring_services,
										];

										if (isChecked) {
											if (
												!tutoringServices.includes(
													"Online Tutoring"
												)
											) {
												tutoringServices.push(
													"Online Tutoring"
												);
											}
										} else {
											tutoringServices =
												tutoringServices.filter(
													(s) =>
														s !== "Online Tutoring"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													tutoring_services:
														tutoringServices,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Online Tutoring
							</Typography>
						</View>
					</View>
				</View>

				<Text className="text-[#4D4D4D] font-medium text-base">
					Select experience level
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
										let experienceLevel = [
											...careProviderData.profile_data
												.category_specific_details
												.experience_level_taught,
										];

										if (isChecked) {
											if (
												!experienceLevel.includes(
													"Primary School"
												)
											) {
												experienceLevel.push(
													"Primary School"
												);
											}
										} else {
											experienceLevel =
												experienceLevel.filter(
													(s) =>
														s !== "Primary School"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													experience_level_taught:
														experienceLevel,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Primary School
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
										let experienceLevel = [
											...careProviderData.profile_data
												.category_specific_details
												.experience_level_taught,
										];

										if (isChecked) {
											if (
												!experienceLevel.includes(
													"Secondary School"
												)
											) {
												experienceLevel.push(
													"Secondary School"
												);
											}
										} else {
											experienceLevel =
												experienceLevel.filter(
													(s) =>
														s !== "Secondary School"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													experience_level_taught:
														experienceLevel,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								Secondary School
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
										let experienceLevel = [
											...careProviderData.profile_data
												.category_specific_details
												.experience_level_taught,
										];

										if (isChecked) {
											if (
												!experienceLevel.includes(
													"A-Levels"
												)
											) {
												experienceLevel.push(
													"A-Levels"
												);
											}
										} else {
											experienceLevel =
												experienceLevel.filter(
													(s) => s !== "A-Levels"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													experience_level_taught:
														experienceLevel,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">A-Levels</Typography>
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
										let experienceLevel = [
											...careProviderData.profile_data
												.category_specific_details
												.experience_level_taught,
										];

										if (isChecked) {
											if (
												!experienceLevel.includes(
													"University"
												)
											) {
												experienceLevel.push(
													"University"
												);
											}
										} else {
											experienceLevel =
												experienceLevel.filter(
													(s) => s !== "University"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													experience_level_taught:
														experienceLevel,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">
								University
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
										let experienceLevel = [
											...careProviderData.profile_data
												.category_specific_details
												.experience_level_taught,
										];

										if (isChecked) {
											if (
												!experienceLevel.includes(
													"Adults"
												)
											) {
												experienceLevel.push("Adults");
											}
										} else {
											experienceLevel =
												experienceLevel.filter(
													(s) => s !== "Adults"
												);
										}

										updateCareProviderData({
											profile_data: {
												...careProviderData.profile_data,
												category_specific_details: {
													...careProviderData
														.profile_data
														.category_specific_details,
													experience_level_taught:
														experienceLevel,
												},
											},
										});
									}}
								/>
							</View>
							<Typography className="flex-1">Adults</Typography>
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
					list={["Child Care", "Housekeeping", "Elderly Care"]}
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
