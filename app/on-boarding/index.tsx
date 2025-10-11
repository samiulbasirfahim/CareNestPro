import { OptionCard } from "@/components/common/option-card";
import SafeView from "@/components/layout/safe-view";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";

export default function Page() {
	const [selectedProvider, setSelectedProvider] = useState<
		"childcare" | "elderly" | "tutoring" | "housekeeping"
	>("childcare");

	return (
		<SafeAreaView className="w-full h-full">
			<Header
				title="What category of Care are you Interested in"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<SafeView className="p-6 gap-8">
				<View className="gap-4">
					<View className="gap-4 flex-row">
						<OptionCard
							image={require("@/assets/images/on-boarding/category/image-1.png")}
							title="Childcare"
							subtitle="Find the Right child Care Provider"
							selected={selectedProvider === "childcare"}
							onPress={() => setSelectedProvider("childcare")}
						/>
						<OptionCard
							image={require("@/assets/images/on-boarding/category/image-2.png")}
							title="Elderly Care"
							subtitle="Find Your Perfect Elderly Care provider"
							selected={selectedProvider === "elderly"}
							onPress={() => setSelectedProvider("elderly")}
						/>
					</View>
					<View className="gap-4 flex-row">
						<OptionCard
							image={require("@/assets/images/on-boarding/category/image-3.png")}
							title="Tutoring"
							subtitle="Find Expert Tutors for Every Subject Area"
							selected={selectedProvider === "tutoring"}
							onPress={() => setSelectedProvider("tutoring")}
						/>
						<OptionCard
							image={require("@/assets/images/on-boarding/category/image-4.png")}
							title="HouseKeeping"
							subtitle="Find Reliable House Keepers"
							selected={selectedProvider === "housekeeping"}
							onPress={() => setSelectedProvider("housekeeping")}
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
						router.push({
							pathname:
								selectedProvider === "childcare"
									? "/on-boarding/child-care/details-1"
									: selectedProvider === "elderly"
										? "/on-boarding/elderly-care/details-1"
										: // : selectedProvider === "tutoring"
											// ? "/on-boarding/tutoring/details-1"
											"/splash",
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
		</SafeAreaView>
	);
}
