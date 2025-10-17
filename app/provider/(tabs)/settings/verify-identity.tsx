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
import * as DocumentPicker from "expo-document-picker";

export default function VerifyIdentity() {
	const router = useRouter();

	const [file, setFile] = useState<any>(null);

	const handleFilePick = async () => {
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
			setFile(selected);
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
					paddingBottom: 40,
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
					onPress={handleFilePick}
					className="w-full border border-[#E3E3E3] rounded-lg py-8 px-4 flex items-center justify-center bg-white"
					style={({ pressed }) => ({
						opacity: pressed ? 0.9 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
				>
					{/* Placeholder or selected file preview */}
					{file ? (
						<Image
							source={{ uri: file.uri }}
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
					onPress={handleFilePick}
					className="w-full border border-[#E3E3E3] rounded-lg py-8 px-4 flex items-center justify-center bg-white"
					style={({ pressed }) => ({
						opacity: pressed ? 0.9 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
				>
					{/* Placeholder or selected file preview */}
					{file ? (
						<Image
							source={{ uri: file.uri }}
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

				<Button title="Get Verified" />
			</ScrollView>
		</SafeAreaView>
	);
}
