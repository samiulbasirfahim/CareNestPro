import { baseURL } from "@/app/config";
import { useAuthStore } from "@/app/store/authStore";
import { Button } from "@/components/ui/button";
import { InputPassword } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Toast } from "toastify-react-native";

export default function Password() {
	const router = useRouter();
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { accessToken } = useAuthStore();

	const onSubmit = async () => {
		try {
			if (!newPassword || !confirmPassword) {
				Toast.error("Please fill new password and confirm password");
				return;
			}

			if (newPassword !== confirmPassword) {
				Toast.error("New password and confirm password do not match");
				return;
			}

			const response = await axios.post(
				`${baseURL}/api/auth/profile/password_change/`,
				{
					password: newPassword,
					confirm_password: confirmPassword,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);

			if (response.status === 200) {
				Toast.success(
					response?.data?.message || "Password changed successfully"
				);
			} else {
				Toast.error(
					response?.data?.detail ||
						"Failed to change password. Please try again later."
				);
			}
			router.back();
			return;
		} catch (err: any) {
			console.log("Error occured changing password: ", err.message);
			Toast.error(
				err?.response?.data?.detail ||
					"Failed to change password. Please try again later."
			);
		}
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<View className="w-full h-32 pt-14 flex flex-col gap-3 px-5 items-start">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Password
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
				<InputPassword
					label="New Password"
					placeholder="Input new password"
					value={newPassword}
					onChangeText={setNewPassword}
				/>
				<InputPassword
					label="Confirm Password"
					placeholder="Input confirm password"
					value={confirmPassword}
					onChangeText={setConfirmPassword}
				/>

				<Button onPress={onSubmit} title="Change Password" />
			</ScrollView>
		</SafeAreaView>
	);
}
