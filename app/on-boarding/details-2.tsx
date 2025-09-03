import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, TouchableHighlight } from "react-native";

export default function Page() {
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full">
			<Header
				title="Child care details"
				subtitle="Kindly select options to help us understand your preferences"
			/>
			<ScrollView className="p-6" contentContainerClassName="gap-6">
				<DropDown
					list={["Nanny", "babysitter"]}
					title="Childcare Type"
				/>
				<DropDown
					list={[
						"1 Child",
						"2 Children",
						"3 Children",
						"4+ Children",
					]}
					title="Numbers of child(ren) that needs care"
				/>
				<DropDown
					list={["Option 1", "Option 2", "Option 3"]}
					title="Gender of child 1"
				/>

				<TouchableHighlight
					onPress={() => router.push("/on-boarding/details-3")}
					underlayColor={"transparent"}
					className="bg-primary items-center py-3 rounded-lg w-full"
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
