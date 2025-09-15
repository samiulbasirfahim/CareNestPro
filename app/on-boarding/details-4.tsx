import DateInput from "@/components/ui/date-input";
import MultiSelectComponent from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import TimeInput from "@/components/ui/time-input";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import { Info } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

export default function Page() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<"reoccuring" | "one-off">(
		"reoccuring"
	);

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
				<View className="w-full h-16 flex-row flex-wrap items-center justify-center gap-3 p-1.5 rounded-md border-[0.5px] border-[#CCCCCC]">
					<TouchableHighlight
						onPress={() => setActiveTab("reoccuring")}
						underlayColor={"transparent"}
						className={twMerge(
							"h-full w-[48%] flex items-center justify-center p-3 rounded-md",
							activeTab === "reoccuring"
								? "bg-primary"
								: "bg-transparent"
						)}
					>
						<View>
							<Text
								className={twMerge(
									"text-foreground font-normal text-lg",
									activeTab === "reoccuring"
										? "text-white"
										: ""
								)}
							>
								Reoccuring
							</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => setActiveTab("one-off")}
						underlayColor={"transparent"}
						className={twMerge(
							"h-full w-[48%] flex items-center justify-center p-3 rounded-md",
							activeTab === "one-off"
								? "bg-primary"
								: "bg-transparent"
						)}
					>
						<View>
							<Text
								className={twMerge(
									"text-foreground font-normal text-lg",
									activeTab === "one-off" ? "text-white" : ""
								)}
							>
								One - Off
							</Text>
						</View>
					</TouchableHighlight>
				</View>

				{activeTab === "reoccuring" ? <Reoccuring /> : <OneOff />}

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

const Reoccuring = () => {
	const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
		null
	);
	const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

	const [selectedStartTime, setSelectedStartTime] = useState<Date | null>(
		null
	);
	const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null);

	const [selectedRepeat, setSelectedRepeat] = useState<number[] | []>([]);

	return (
		<View className="w-full flex flex-col gap-3 py-5">
			<DateInput
				label="Start Date"
				placeholder="Select date"
				value={selectedStartDate}
				onChange={setSelectedStartDate}
			/>

			<DateInput
				label="End Date"
				placeholder="Select date"
				value={selectedEndDate}
				onChange={setSelectedEndDate}
			/>

			<View className="w-full flex flex-row gap-3 items-center">
				<View className="w-[48%] flex-1 flex items-center">
					<Input
						label="Repeat every"
						labelStyle="font-medium text-base"
						placeholder="Specify No of times"
						inputStyle="h-14"
					/>
				</View>

				<View className="w-[48%] flex-1 flex items-center">
					<MultiSelectComponent
						list={[
							"Weekly",
							"Monthly",
							"Quarterly",
							"Yearly",
							"Custom",
						]}
						placeholder="Weekly"
					/>
				</View>
			</View>

			<View className="w-full flex flex-col gap-3 py-3">
				<Text className="text-[#4D4D4D] font-medium text-base">
					Repeat
				</Text>

				<View className="w-full flex flex-row gap-2 items-center justify-around flex-wrap">
					{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
						<TouchableHighlight
							key={index}
							onPress={() => {
								if (
									selectedRepeat.find((val) => val === index)
								) {
									setSelectedRepeat(
										selectedRepeat.filter(
											(val) => val !== index
										)
									);
								} else {
									setSelectedRepeat([
										...selectedRepeat,
										index,
									]);
								}
							}}
							underlayColor={"transparent"}
						>
							<View className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent border border-[#E6E6E6]">
								<Text className="text-sm text-foreground">
									{day}
								</Text>
							</View>
						</TouchableHighlight>
					))}
				</View>
			</View>

			<View className="w-full flex flex-row gap-3 items-center">
				<View className="w-[48%] flex-1 flex items-center">
					<TimeInput
						label="Start Time"
						placeholder="Select Time"
						value={selectedStartTime}
						onChange={setSelectedStartTime}
					/>
				</View>

				<View className="w-[48%] flex-1 flex items-center">
					<TimeInput
						label="End Time"
						placeholder="Select Time"
						value={selectedEndTime}
						onChange={setSelectedEndTime}
					/>
				</View>
			</View>

			<Text className="font-normal text-[#4D4D4D] text-base">
				How much would you be offering
				<Text className="text-[#808080]"> (per hour)</Text>
			</Text>

			<View className="p-3 rounded-lg border border-[#F2F2F2] flex flex-col gap-3">
				<View className="bg-green-500/10 w-min flex-row flex items-center p-2 gap-1 rounded-md">
					<Info size={16} color="#70CC7A" />

					<Text className="text-[#70CC7A] font-normal text-sm">
						average range in your area is $32 - $55
					</Text>
				</View>
			</View>
		</View>
	);
};

const OneOff = () => {
	const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
		null
	);

	const [selectedStartTime, setSelectedStartTime] = useState<Date | null>(
		null
	);
	const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null);

	return (
		<View className="w-full flex flex-col gap-3 py-5">
			<DateInput
				label="Date"
				placeholder="Select date"
				value={selectedStartDate}
				onChange={setSelectedStartDate}
			/>

			<View className="w-full flex flex-row gap-3 items-center">
				<View className="w-[48%] flex-1 flex items-center">
					<TimeInput
						label="Start Time"
						placeholder="Select Time"
						value={selectedStartTime}
						onChange={setSelectedStartTime}
					/>
				</View>

				<View className="w-[48%] flex-1 flex items-center">
					<TimeInput
						label="End Time"
						placeholder="Select Time"
						value={selectedEndTime}
						onChange={setSelectedEndTime}
					/>
				</View>
			</View>

			<Text className="font-normal text-[#4D4D4D] text-base">
				How much would you be offering
				<Text className="text-[#808080]"> (per hour)</Text>
			</Text>

			<View className="p-3 rounded-lg border border-[#F2F2F2] flex flex-col gap-3">
				<View className="bg-green-500/10 w-min flex-row flex items-center p-2 gap-1 rounded-md">
					<Info size={16} color="#70CC7A" />

					<Text className="text-[#70CC7A] font-normal text-sm">
						average range in your area is $32 - $55
					</Text>
				</View>
			</View>
		</View>
	);
};
