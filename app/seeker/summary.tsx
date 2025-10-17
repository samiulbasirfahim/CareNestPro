import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import { ArrowLeft, Lightbulb } from "lucide-react-native";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Summary() {
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<View className="w-full h-28 pt-14 flex flex-col gap-3 px-5 items-center">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Summary
					</Text>
				</View>
			</View>
			<ScrollView
				className="p-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				contentContainerClassName="gap-6"
			>
				<View className="w-full flex flex-row items-center gap-4 bg-[#E1F9E4] border border-[#D9F7DD] rounded-md px-4 py-3">
					<Lightbulb size={20} color={"#7AE285"} />
					<Text className="text-[#70CC7A] text-base font-normal flex-1">
						This was generated based on the information you gave,
						This would help care providers understand your
						preference.
					</Text>
				</View>

				<View className="bg-white p-4 border border-[#E6E6E6] rounded-md">
					<Text className="text-[#666666] text-base font-normal">
						Professional nanny needed in Lagos to care for two kids
						over 10 consecutive days. Looking for trustworthy
						individual with childcare background, clean record, and
						own transportation. Must be patient, creative, and
						capable of handling emergencies responsibly
					</Text>
				</View>

				<Textarea
					label="Message to Care Provider"
					placeholder="Input any other information you might want to share with care providers"
				/>

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
						I acknowledge that I have read and accepted{" "}
						<Text className="text-[#0D99C9]">
							CareNestPro's{" "}
							<Text className="underline">Terms of Use</Text>,{" "}
							<Text className="underline">Agreement</Text> and{" "}
							<Text className="underline">Privacy Policy</Text>
						</Text>
					</Typography>
				</View>

				<Button title="Submit Request" className="mt-8" />
			</ScrollView>
		</SafeAreaView>
	);
}
