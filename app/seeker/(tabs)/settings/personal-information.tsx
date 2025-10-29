import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePersonalInfoStore } from "@/store/personalInfoStore";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
	Pressable,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";
import { Toast } from "toastify-react-native";

export default function PersonalInformation() {
	const router = useRouter();

	const {
		isLoading,
		error,
		fetchPersonalInfo,
		personalInfo,
		updatePersonalInfo,
		savePersonalInfo,
	} = usePersonalInfoStore();

	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		fetchPersonalInfo();
	}, []);

	const onRefresh = async () => {
		setRefreshing(true);
		await fetchPersonalInfo();
		setRefreshing(false);
	};

	const onSubmit = async () => {
		const response = await savePersonalInfo();
		if (response && response.status === 200) {
			Toast.success("Profile updated successfully!");
		} else {
			Toast.error("Failed to update profile.");
		}
		await onRefresh();
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			{/* Header */}
			<View className="w-full h-32 pt-14 flex flex-col gap-3 px-5 items-start">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Personal Information
					</Text>
				</View>
			</View>

			{/* Body */}
			<ScrollView
				className="p-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 40,
				}}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						tintColor="#0D99C9"
						colors={["#0D99C9"]}
					/>
				}
				contentContainerClassName="gap-6"
			>
				{isLoading && <Text>Loading...</Text>}

				{error && (
					<Text className="text-red-500 text-base">{error}</Text>
				)}

				{!isLoading && !error && (
					<>
						<Input
							label="Email Address"
							placeholder="Input email address"
							value={personalInfo.email}
							onChangeText={(text: any) =>
								updatePersonalInfo({ email: text })
							}
						/>

						<Input
							label="Country"
							placeholder="Input country"
							value={personalInfo.country}
							onChangeText={(text: any) =>
								updatePersonalInfo({ country: text })
							}
						/>

						<Input
							label="Bank Account Number"
							placeholder="Input Bank Account Number"
							value={personalInfo.bank_account_number}
							onChangeText={(text: any) =>
								updatePersonalInfo({
									bank_account_number: text,
								})
							}
						/>

						<Input
							label="Bank Code"
							placeholder="Input Bank Code"
							value={personalInfo.bank_code}
							onChangeText={(text: any) =>
								updatePersonalInfo({ bank_code: text })
							}
						/>

						<Button
							title={isLoading ? "Saving..." : "Save"}
							disabled={isLoading}
							onPress={onSubmit}
							className="mt-4"
						/>
					</>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}
