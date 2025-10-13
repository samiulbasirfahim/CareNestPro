import { EnableLocationModal } from "@/components/common/enable-location-modal";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Page() {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<SafeAreaView className="w-full h-full">
			<Header
				title="Elderly care details"
				subtitle="Welcome! Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="flex flex-col gap-6">
					<Input label="First Name" placeholder="Input First Name" />
					<Input label="Last Name" placeholder="Input Last Name" />
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
					list={["Option 1", "Option 2", "Option 3"]}
					title="Preferred Language"
				/>
				<DropDown
					list={["Option 1", "Option 2", "Option 3"]}
					title="Country"
				/>
				<DropDown
					list={["Option 1", "Option 2", "Option 3"]}
					title="State"
				/>
				<Input label="City" placeholder="Input City" />
				<Input label="Zip Code" placeholder="Input Zip Code" />
				<DropDown
					list={["Option 1", "Option 2", "Option 3"]}
					title="Nationality"
				/>
				<Input
					label="National Identification Number"
					placeholder="Input NIN"
				/>
				<Input label="Phone Number" placeholder="Input Phone Number" />

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
								/>
							</View>
							<Typography className="flex-1">
								Registered Nurse
							</Typography>
						</View>
					</View>
				</View>

				<DropDown
					list={["1 - 3 years", "4 - 8 years", "9 - 12 years"]}
					title="Years of experience"
				/>

				<Textarea
					label="Tell us about yourself"
					placeholder="Kindly highlight your skills and experience, The childcare services you offer and other relevant information."
				/>

				<Textarea
					label="Title"
					placeholder="Give your application a title that sums you up as a child care provider"
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
				/>

				<DropDown
					list={["English", "Mandarine", "Others"]}
					title="Other Language"
				/>

				<DropDown
					list={["English", "Mandarine", "Others"]}
					title="Other services you can offer"
				/>

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					className="bg-primary items-center py-3 rounded-lg w-full border-2 border-primary"
					onPress={() => setShowModal(true)}
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
					router.push("/signup");
				}}
			/>
		</SafeAreaView>
	);
}
