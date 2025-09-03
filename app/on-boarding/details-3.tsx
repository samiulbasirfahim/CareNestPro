import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
	const router = useRouter();

	return (
		<SafeAreaView className="flex-1 bg-white">
			<Header
				title="Child care details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView
				className="p-5"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
			>
				<View className="w-full flex flex-wrap flex-row gap-1 py-3">
					<Text className="font-semibold text-black">
						What qualities matter most to you in a care provider?
					</Text>
					<Text>Select the ones that feel right.</Text>
				</View>

				<View className="flex-col gap-4 w-full border rounded-md border-[#E6E6E6] p-4">
					<View className="w-full flex flex-row gap-6">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Patient
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Reliable
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Friendly
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Nurthuring
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Empathetic
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Calm
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Observant
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Supportive
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>
				</View>

				<Text className="font-semibold text-black py-3">
					Choose the experiences that would help the care provider
					support you better.
				</Text>

				<View className="flex-col flex-1 flex-wrap gap-4 w-full border rounded-md border-[#E6E6E6] p-4">
					<View className="w-full flex flex-row gap-6 flex-1 flex-wrap">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Sleep-in
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Live-in
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6 flex-1 flex-wrap">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Non-smoker
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Cook basic meals
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6 flex-1 flex-wrap">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Help with homework
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Sign language
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6 flex-1 flex-wrap">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Experience with autism
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Can drive
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-1 flex-wrap flex-row gap-6">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Special needs experience
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Experience with speech delay
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6 flex-1 flex-wrap">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Experience with twins
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Behavioral support
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6 flex-1 flex-wrap">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Speaks Yoruba Fluently
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Willing to live-in
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex flex-row gap-6 flex-1 flex-wrap">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Speaks Hausa Fluently
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>

						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Speaks Igbo Fluently
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>

					<View className="w-full flex-1 flex-wrap flex flex-row gap-6">
						<View className="flex-row">
							<BouncyCheckbox
								className="flex-row items-center gap-2"
								size={20}
								fillColor="#0D99C9"
								unFillColor="#FFFFFF"
								textComponent={
									<Text className="font-medium text-foreground">
										Speaks French Fluently
									</Text>
								}
								iconStyle={{ borderColor: "#0D99C9" }}
								innerIconStyle={{
									borderWidth: 1.5,
									borderRadius: 3,
									borderColor: "#CCCCCC",
								}}
								textStyle={{ fontFamily: "Inter" }}
							/>
						</View>
					</View>
				</View>

				<View className="w-full flex flex-wrap flex-row gap-1 py-3">
					<Text className="font-semibold text-black">
						Want your care provider to offer more than one type of
						care?
					</Text>
					<Text>Select an extra category below.</Text>
				</View>

				<DropDown
					list={[
						"Elderly Care",
						"Tutoring",
						"Housekeeping",
						"Babysitter",
					]}
					title="Select option"
				/>

				<TouchableHighlight
					onPress={() => router.push("/on-boarding/details-4")}
					underlayColor={"transparent"}
					className="bg-primary items-center py-3 rounded-lg w-full mt-6"
				>
					<Typography
						variant="subtitle"
						className="text-center text-lg text-white font-semibold"
					>
						Next
					</Typography>
				</TouchableHighlight>
			</ScrollView>
		</SafeAreaView>
	);
}
