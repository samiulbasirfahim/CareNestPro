import DateInput from "@/components/ui/date-input";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useCareSeekerStore } from "@/store/careSeekerStore";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";

const getDefaultChildInfo = () => ({
	who_needs_care: "",
	childcare_type: "",
	number_of_children: "",
	children: [],
	provider_experience_requirement: {
		communication_and_language: [],
		special_preferences: [],
		preferred_options: [],
		additional_care_categories: [],
	},
});

export default function Page() {
	const router = useRouter();
	const { careSeekerData, updateCareSeekerData } = useCareSeekerStore();

	const childInfo =
		careSeekerData.job_data.details.child_information ||
		getDefaultChildInfo();

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="Child care details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-6 bg-white"
				contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
				contentContainerClassName="gap-6"
			>
				{/* Childcare Type */}
				<DropDown
					list={["Nanny", "Babysitter"]}
					title="Childcare Type"
					value={childInfo.childcare_type}
					onChange={(value: string) =>
						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									child_information: {
										...childInfo,
										childcare_type: value,
									},
								},
							},
						})
					}
				/>

				{/* Number of children */}
				<DropDown
					list={["1 Child", "2 Children", "3 Children", "4 Children"]}
					title="Number of child(ren) that need care"
					value={childInfo.number_of_children}
					onChange={(value: string) => {
						const count = parseInt(value);
						const children = Array(count)
							.fill(null)
							.map(() => ({ age: "", gender: "" }));

						updateCareSeekerData({
							job_data: {
								...careSeekerData.job_data,
								details: {
									...careSeekerData.job_data.details,
									child_information: {
										...childInfo,
										number_of_children: value,
										children,
									},
								},
							},
						});
					}}
				/>

				{/* Children details */}
				{childInfo.children.map((child, index) => (
					<View
						key={index}
						className="w-full flex-row gap-3 items-start"
					>
						{/* Age */}
						<View className="w-[40%] flex-1">
							<DateInput
								label={`Age of child ${index + 1}`}
								placeholder="DD-MM-YYYY"
								value={child.age as any}
								onChange={(value: any) => {
									const updatedChildren = [
										...childInfo.children,
									];
									updatedChildren[index] = {
										...updatedChildren[index],
										age: value,
									};

									updateCareSeekerData({
										job_data: {
											...careSeekerData.job_data,
											details: {
												...careSeekerData.job_data
													.details,
												child_information: {
													...childInfo,
													children: updatedChildren,
												},
											},
										},
									});
								}}
							/>
						</View>

						<View className="w-[60%] flex-1">
							<DropDown
								list={["Male", "Female", "Other"]}
								title={`Gender of child ${index + 1}`}
								value={child.gender}
								onChange={(value: any) => {
									const updatedChildren = [
										...childInfo.children,
									];
									updatedChildren[index] = {
										...updatedChildren[index],
										gender: value,
									};

									updateCareSeekerData({
										job_data: {
											...careSeekerData.job_data,
											details: {
												...careSeekerData.job_data
													.details,
												child_information: {
													...childInfo,
													children: updatedChildren,
												},
											},
										},
									});
								}}
							/>
						</View>
					</View>
				))}

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() =>
						router.push("/on-boarding/seeker/child-care/details-3")
					}
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
