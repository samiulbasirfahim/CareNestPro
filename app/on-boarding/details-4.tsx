import { Header } from "@/components/ui/header";
import { useRouter } from "expo-router";
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
						<Text
							className={twMerge(
								"text-foreground font-normal text-lg",
								activeTab === "reoccuring" ? "text-white" : ""
							)}
						>
							Reoccuring
						</Text>
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
						<Text
							className={twMerge(
								"text-foreground font-normal text-lg",
								activeTab === "one-off" ? "text-white" : ""
							)}
						>
							One - Off
						</Text>
					</TouchableHighlight>
				</View>

				<View></View>
			</ScrollView>
		</SafeAreaView>
	);
}
