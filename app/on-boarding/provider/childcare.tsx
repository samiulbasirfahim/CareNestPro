import { cn } from "@/app/lib";
import { useCareProviderStore } from "@/app/store/careProviderStore";
import { EnableLocationModal } from "@/components/common/enable-location-modal";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { z } from "zod";

const childCareProviderSchema = z.object({
	firstName: z.string().min(3, {
		message: "First name must be at least 3 characters",
	}),
	lastName: z.string().min(3, {
		message: "Last name must be at least 3 characters",
	}),
	languages: z.array(z.string()),
	country: z.string({ message: "Please select a country" }),
	state: z.string({ message: "Please select a state" }),
	city: z.string({ message: "Please enter a city" }),
	zipCode: z.string({ message: "Please enter a zip code" }),
	nationality: z.string({ message: "Please select a nationality" }),
	nationalIdentificationNumber: z.string({ message: "Please enter a NIN" }),
	phoneNumber: z.string({ message: "Please enter a phone number" }),
	skills: z.array(z.string({ message: "Please select a service" })),
	experienceLevel: z.string({ message: "Please select an experience level" }),
	aboutMe: z.string({ message: "Please enter your about me" }),
	profileTitle: z.string({ message: "Please enter a title" }),
	yearsOfExperience: z.number({
		message: "Please select your years of experience",
	}),
	nativeLanguage: z.string({ message: "Please select a native language" }),
	otherLanguage: z.string({ message: "Please select an other language" }),
	additionalServices: z.array(
		z.string({ message: "Please select an additional service" })
	),
});

type ChildCareProviderFormData = z.infer<typeof childCareProviderSchema>;

export default function Page() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const { careProviderData, updateCareProviderData } = useCareProviderStore();

	const updateChangeHandler = (field: string) => (value: string) => {
		updateCareProviderData({
			user_data: {
				[field]: value,
			},
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ChildCareProviderFormData>({
		resolver: zodResolver(childCareProviderSchema),
		defaultValues: {
			firstName: careProviderData.user_data.first_name,
			lastName: careProviderData.user_data.last_name,
			languages: careProviderData.profile_data.languages,
			country: careProviderData.profile_data.country,
			state: careProviderData.profile_data.state,
			city: careProviderData.profile_data.city,
			zipCode: careProviderData.profile_data.zip_code,
			nationality: careProviderData.profile_data.nationality,
			nationalIdentificationNumber:
				// careProviderData.profile_data.national_identification_number,
				"",
			phoneNumber: "",
			skills: careProviderData.profile_data.skills,
			experienceLevel: careProviderData.profile_data.experience_level,
			aboutMe: careProviderData.profile_data.about_me,
			profileTitle: careProviderData.profile_data.profile_title,
			yearsOfExperience:
				careProviderData.profile_data.years_of_experience,
			nativeLanguage: careProviderData.profile_data.native_language,
			otherLanguage:
				careProviderData.profile_data.category_specific_details
					.communication_language,
			additionalServices:
				careProviderData.profile_data.additional_services,
		},
	});

	const onSubmit = async (data: ChildCareProviderFormData) => {
		// const success = await login(
		// 	data.username,
		// 	data.password,
		// 	data.isRemember ?? false
		// );
		// if (success) {
		// 	toast.success("Login successful");
		// 	navigate("/");
		// } else {
		// 	toast.error(error || "Login failed. Please try again.");
		// }

		console.log("On submit");
		console.log(data);
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
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="flex flex-col gap-6">
					<View className="flex flex-col gap-1">
						<Input
							label="First Name"
							placeholder="Input First Name"
							{...register("firstName")}
							inputStyle={cn(
								errors.firstName
									? "border border-[#D22853]"
									: ""
							)}
						/>
						{errors.firstName && (
							<Text className="text-[#D22853] text-left text-sm w-full">
								{errors.firstName.message}
							</Text>
						)}
					</View>
					<View className="flex flex-col gap-1">
						<Input
							label="Last Name"
							placeholder="Input Last Name"
							{...register("lastName")}
							inputStyle={cn(
								errors.firstName
									? "border border-[#D22853]"
									: ""
							)}
						/>
						{errors.lastName && (
							<Text className="text-[#D22853] text-left text-sm w-full">
								{errors.lastName.message}
							</Text>
						)}
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
						/>
					</View>
					<Typography className="flex-1">
						Use my current Location instead
					</Typography>
				</View>

				<DropDown
					list={["Option 1", "Option 2", "Option 3"]}
					title="Preferred Language"
					// onChange={() => updateChangeHandler("user_type")}
					// {...register("nativeLanguage")}
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
				<DropDown
					list={["Nanny", "Babysitter"]}
					title="What kind of child care provider are you"
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
								/>
							</View>
							<Typography className="flex-1">
								Early School Age (4 - 6 years)
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
								Primary school age (7-12 years)
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
								Teenager (12+ years)
							</Typography>
						</View>
					</View>
				</View>

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
					list={["1 - 3 years", "4 - 8 years", "9 - 12 years"]}
					title="Years of experience"
				/>

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
					onPress={handleSubmit(onSubmit)}
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
