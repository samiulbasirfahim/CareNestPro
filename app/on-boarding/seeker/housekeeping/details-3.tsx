import WeekCalendar from "@/components/common/week-calendar";
import { Button } from "@/components/ui/button";
import DateInput from "@/components/ui/date-input";
import MultiSelectComponent from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import TimeInput from "@/components/ui/time-input";
import { Typography } from "@/components/ui/typography";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useRouter } from "expo-router";
import { Info } from "lucide-react-native";
import { useState } from "react";
import {
	Image,
	Pressable,
	ScrollView,
	Text,
	useWindowDimensions,
	View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Portal } from "react-native-portalize";
import { SafeAreaView } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

export default function Page() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<"reoccuring" | "one-off">(
		"reoccuring"
	);

	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<SafeAreaView className="flex-1 bg-white">
			<Header
				title="Housekeeping details"
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
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.7 : 1,
							transform: [{ scale: pressed ? 0.98 : 1 }],
						})}
						onPress={() => setActiveTab("reoccuring")}
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
					</Pressable>

					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.7 : 1,
							transform: [{ scale: pressed ? 0.98 : 1 }],
						})}
						onPress={() => setActiveTab("one-off")}
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
					</Pressable>
				</View>

				{activeTab === "reoccuring" ? <Reoccuring /> : <OneOff />}

				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() => setShowModal(true)}
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
			<SignupModal
				showModal={showModal}
				onClose={() => {
					setShowModal(false);
					router.push("/signup");
				}}
			/>
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

	const [selectedDate, setSelectedDate] = useState<number | null>(null);

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

			<WeekCalendar />

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

			<View className="flex-row items-center">
				<View className="flex-shrink-0">
					<BouncyCheckbox
						innerIconStyle={{
							borderWidth: 1,
							width: 18,
							height: 18,
							borderRadius: 3,
							borderColor: "#CCCCCC",
						}}
						iconStyle={{
							width: 18,
							height: 18,
							borderRadius: 3,
							borderColor: "#CCCCCC",
						}}
						fillColor="#0D99C9"
					/>
				</View>
				<Typography className="text-sm">
					Same time applies to selected date range
				</Typography>
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

				<View className="relative flex flex-1 items-center justify-center pr-9">
					<MultiSlider
						isMarkersSeparated={true}
						customMarkerLeft={(e) => {
							return (
								<CustomSliderMarkerLeft
									currentValue={e.currentValue}
								/>
							);
						}}
						customMarkerRight={(e) => {
							return (
								<CustomSliderMarkerRight
									currentValue={e.currentValue}
								/>
							);
						}}
						enabledOne={true}
						enabledTwo={true}
						min={10}
						max={3000}
						step={10}
						values={[80, 1230]}
						sliderLength={320}
					/>

					<View className="w-full flex flex-row items-center justify-between bg-red-500">
						<Text className="text-[#808080] text-sm absolute -top-3 left-0">
							$10
						</Text>
						<Text className="text-[#808080] text-sm absolute -top-3 -right-5">
							$3000
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const CustomSliderMarkerLeft = ({ currentValue }: any) => {
	return (
		<View className="relative">
			<View className="absolute -top-8 -left-1">
				<Text className="text-black text-base">${currentValue}</Text>
			</View>

			<View
				style={{
					width: 18,
					height: 18,
					borderWidth: 1,
					borderRadius: 10,
					borderColor: "#0D99C9",
					backgroundColor: "#FFFFFF",
					alignItems: "center",
					justifyContent: "center",
					position: "absolute",
					top: -8,
					left: 0,
					zIndex: 10,
				}}
			></View>
		</View>
	);
};

const CustomSliderMarkerRight = ({ currentValue }: any) => {
	return (
		<View className="relative">
			<View className="absolute -top-8 -left-1">
				<Text className="text-black text-base">${currentValue}</Text>
			</View>

			<View
				style={{
					width: 18,
					height: 18,
					borderWidth: 1,
					borderRadius: 10,
					borderColor: "#0D99C9",
					backgroundColor: "#FFFFFF",
					alignItems: "center",
					justifyContent: "center",
					position: "absolute",
					top: -8,
					left: 0,
					zIndex: 10,
				}}
			></View>
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

				<View className="relative flex flex-1 items-center justify-center pr-9">
					<MultiSlider
						isMarkersSeparated={true}
						customMarkerLeft={(e) => {
							return (
								<CustomSliderMarkerLeft
									currentValue={e.currentValue}
								/>
							);
						}}
						customMarkerRight={(e) => {
							return (
								<CustomSliderMarkerRight
									currentValue={e.currentValue}
								/>
							);
						}}
						enabledOne={true}
						enabledTwo={true}
						min={10}
						max={3000}
						step={10}
						values={[80, 1230]}
						sliderLength={320}
					/>

					<View className="w-full flex flex-row items-center justify-between bg-red-500">
						<Text className="text-[#808080] text-sm absolute -top-3 left-0">
							$10
						</Text>
						<Text className="text-[#808080] text-sm absolute -top-3 -right-5">
							$3000
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export function SignupModal({
	showModal,
	onClose,
}: {
	showModal: boolean;
	onClose: () => void;
}) {
	const { height } = useWindowDimensions();
	return (
		<Portal>
			{showModal && (
				<Pressable
					className="flex-1 bg-black/50 px-4 items-center justify-center"
					onPress={onClose}
				>
					<Pressable className="w-full bg-white gap-2 px-2 py-6">
						<Image
							source={require("@/assets/images/signup-modal-icon.png")}
							resizeMode="cover"
							className="mx-auto"
						/>

						<View className="px-4 items-center gap-3 py-5">
							<Typography
								variant="sm-title"
								className="text-2xl text-center text-[#515151] font-medium leading-7"
							>
								Sign Up to View Care Providers near you
							</Typography>
							<Typography
								className="text-center"
								variant="sm-subtitle"
							>
								Kindly enter your email address below to view
								care providers near you.
							</Typography>
							<Input
								label="Email address"
								placeholder="Input email address"
							/>
							<Button
								title="Sign Up"
								textClassName="text-lg"
								onPress={onClose}
								className="mt-12"
							/>
						</View>
					</Pressable>
				</Pressable>
			)}
		</Portal>
	);
}
