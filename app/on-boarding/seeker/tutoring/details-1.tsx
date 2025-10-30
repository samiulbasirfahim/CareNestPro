import { EnableLocationModal } from "@/components/common/enable-location-modal";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Page() {
	const [showModal, setShowModal] = useState<boolean>(false);

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
					<Typography>Use my current Location instead</Typography>
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
				<DropDown
					list={["Option 1", "Option 2", "Option 3"]}
					title="City"
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
					router.push("/on-boarding/seeker/tutoring/details-2");
				}}
			/>
		</SafeAreaView>
	);
}
