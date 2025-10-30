import FileUploadIcon from "@/assets/images/upload-file-icon.svg";
import DropDown from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";

import { Button } from "@/components/ui/button";
import { useIdentityVerificationStore } from "@/store/identityVerificationStore";
import * as DocumentPicker from "expo-document-picker";
import { Toast } from "toastify-react-native";

export default function VerifyIdentity() {
	const router = useRouter();

	const [governmentIdFile, setGovernmentIdFile] = useState<any>(null);
	const [profilePictureFile, setProfilePictureFile] = useState<any>(null);

	const { verifyGovernmentIdentity, verifyProfilePicture, isLoading, error } =
		useIdentityVerificationStore();

	const handleFilePick = async ({
		type,
	}: {
		type: "government_id" | "profile_picture";
	}) => {
		try {
			const result = await DocumentPicker.getDocumentAsync({
				type: ["image/jpeg", "image/png"],
				copyToCacheDirectory: true,
			});

			if (result.canceled) return;

			const selected = result.assets[0];
			if (!selected.size) return;

			if (selected.size > 3 * 1024 * 1024) {
				alert("File size exceeds 3MB limit");
				return;
			}

			if (type === "government_id") {
				setGovernmentIdFile(selected);
			} else {
				setProfilePictureFile(selected);
			}
		} catch (err) {
			console.log("File selection error:", err);
		}
	};

	const handleSubmit = async () => {
		try {
			if (!governmentIdFile && !profilePictureFile) {
				Toast.error("Please select a file");
				return;
			}

			if (governmentIdFile) {
				const response = await verifyGovernmentIdentity({
					government_id: governmentIdFile,
				});

				if (!response) {
					Toast.error(error || "Failed to verify identity");
					return;
				}
				if (response?.status === 200) {
					Toast.success(
						response.data?.message ||
							"Identity verified successfully"
					);
				} else {
					Toast.error(
						response?.data?.detail ||
							response?.data?.message ||
							"Failed to verify identity"
					);
				}
			}
			if (profilePictureFile) {
				const response = await verifyProfilePicture({
					image: profilePictureFile,
				});

				if (!response) {
					Toast.error(error || "Failed to verify profile picture");
					return;
				}
				if (response?.status === 200) {
					Toast.success(
						response.data?.message ||
							"Profile picture uploaded successfully"
					);
				} else {
					Toast.error(
						response?.data?.detail ||
							response?.data?.message ||
							"Failed to verify profile picture"
					);
				}
			}
		} catch (err) {
			console.log("File selection error:", err);
		}
	};

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<View className="w-full h-28 pt-14 flex flex-col gap-3 px-5 items-center">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Verify my Identity
					</Text>
				</View>
			</View>
			<ScrollView
				className="p-5 bg-white"
				contentContainerStyle={{
					flexGrow: 1,
					paddingBottom: 60,
				}}
				contentContainerClassName="gap-6"
			>
				<DropDown
					list={["Option 1", "Option 2", "Option 3"]}
					title="License Type"
					placeholder="Select option"
				/>
				<Input label="Address" placeholder="Input address" />
				<Text className="text-[#4D4D4D] text-base font-medium">
					Upload picture of yourself
				</Text>
				<Pressable
					onPress={() => handleFilePick({ type: "profile_picture" })}
					className="w-full border border-[#E3E3E3] rounded-lg py-8 px-4 flex items-center justify-center bg-white"
					style={({ pressed }) => ({
						opacity: pressed ? 0.9 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
				>
					{/* Placeholder or selected file preview */}
					{profilePictureFile ? (
						<Image
							source={{ uri: profilePictureFile.uri }}
							className="w-20 h-20 rounded-md mb-3"
							resizeMode="cover"
						/>
					) : (
						<View className="flex-1 justify-center items-center">
							<FileUploadIcon width={60} height={60} />
						</View>
					)}

					<Text className="text-[#0D99C9] text-base font-semibold mb-1">
						Upload File
					</Text>
					<Text className="text-[#666666] text-sm">
						Supported format: jpg, png
					</Text>
					<Text className="text-[#666666] text-sm">
						Maximum Size: 3MB
					</Text>
				</Pressable>

				<Text className="text-[#4D4D4D] text-base font-medium">
					Upload Government ID
				</Text>
				<Pressable
					onPress={() => handleFilePick({ type: "government_id" })}
					className="w-full border border-[#E3E3E3] rounded-lg py-8 px-4 flex items-center justify-center bg-white"
					style={({ pressed }) => ({
						opacity: pressed ? 0.9 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
				>
					{/* Placeholder or selected file preview */}
					{governmentIdFile ? (
						<Image
							source={{ uri: governmentIdFile.uri }}
							className="w-20 h-20 rounded-md mb-3"
							resizeMode="cover"
						/>
					) : (
						<View className="flex-1 justify-center items-center">
							<FileUploadIcon width={60} height={60} />
						</View>
					)}

					<Text className="text-[#0D99C9] text-base font-semibold mb-1">
						Upload File
					</Text>
					<Text className="text-[#666666] text-sm">
						Supported format: jpg, png
					</Text>
					<Text className="text-[#666666] text-sm">
						Maximum Size: 3MB
					</Text>
				</Pressable>

				<Button
					onPress={handleSubmit}
					title={isLoading ? "Uploading..." : "Get Verified"}
					disabled={isLoading}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
