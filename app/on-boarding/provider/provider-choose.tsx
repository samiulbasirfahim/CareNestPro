import { OptionCard } from "@/components/common/option-card";
import SafeView from "@/components/layout/safe-view";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useCareProviderStore } from "@/store/careProviderStore";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import { Toast } from "toastify-react-native";

export default function Page() {
	const [selectedProvider, setSelectedProvider] = useState<
		"childcare" | "elderlycare" | "tutoring" | "housekeeping"
	>("childcare");

	const { updateCareProviderData } = useCareProviderStore();

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<Header
				title="What category of Care are you are experienced in"
				subtitle="Kindly select options to help us understand your skills"
			/>
			<ScrollView
				className="py-0 w-full bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<SafeView className="p-6 gap-8">
					<View className="gap-4">
						<View className="gap-4 flex-row">
							<OptionCard
								image={require("@/assets/images/on-boarding/category/image-1.png")}
								title="Childcare"
								subtitle="Be the right child care provider"
								selected={selectedProvider === "childcare"}
								onPress={() => setSelectedProvider("childcare")}
							/>
							<OptionCard
								image={require("@/assets/images/on-boarding/category/image-2.png")}
								title="Elderly Care"
								subtitle="Be the perfect elderly care provider"
								selected={selectedProvider === "elderlycare"}
								onPress={() =>
									setSelectedProvider("elderlycare")
								}
							/>
						</View>
						<View className="gap-4 flex-row">
							<OptionCard
								image={require("@/assets/images/on-boarding/category/image-3.png")}
								title="Tutoring"
								subtitle="Provide exper tutors for "
								selected={selectedProvider === "tutoring"}
								onPress={() => setSelectedProvider("tutoring")}
							/>
							<OptionCard
								image={require("@/assets/images/on-boarding/category/image-4.png")}
								title="HouseKeeping"
								subtitle="Find Reliable House Keepers"
								selected={selectedProvider === "housekeeping"}
								onPress={() =>
									setSelectedProvider("housekeeping")
								}
							/>
						</View>
					</View>

					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.7 : 1,
							transform: [{ scale: pressed ? 0.98 : 1 }],
						})}
						className="bg-primary items-center py-3 rounded-lg w-full border-2 border-primary"
						onPress={() => {
							updateCareProviderData({
								profile_data: {
									service_category: selectedProvider,
								},
							});

							if (!selectedProvider) {
								Toast.error("Please select a provider");
								return;
							}

							router.push({
								pathname:
									selectedProvider === "childcare"
										? "/on-boarding/provider/childcare"
										: selectedProvider === "elderlycare"
											? "/on-boarding/provider/elderly"
											: selectedProvider === "tutoring"
												? "/on-boarding/provider/tutoring"
												: selectedProvider ===
													  "housekeeping"
													? "/on-boarding/provider/housekeeping"
													: "/splash",
							});
						}}
					>
						<Typography
							variant="subtitle"
							className="text-center text-lg text-white font-semibold"
						>
							Next
						</Typography>
					</Pressable>
				</SafeView>
			</ScrollView>
		</SafeAreaView>
	);
}
