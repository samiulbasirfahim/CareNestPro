import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "expo-router";
import { ArrowLeft, ChevronRight, X } from "lucide-react-native";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Portal } from "react-native-portalize";

export default function Settings() {
	const router = useRouter();
	const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

	return (
		<SafeAreaView className="w-full h-full bg-white">
			<View className="w-full h-28 pt-14 flex flex-col gap-3 px-5 items-center">
				<View className="w-full flex flex-row items-center gap-3">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<Text className="text-[#515151] text-2xl font-medium">
						Settings
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
				<Pressable
					onPress={() =>
						router.push("/provider/settings/verify-identity")
					}
				>
					<View className="w-full flex flex-row items-center justify-between p-3 py-4 border border-[#E6E6E6] bg-white rounded-lg">
						<View className="flex flex-row items-center gap-3">
							<Text className="text-[#666666] text-base font-normal">
								Verify my identity
							</Text>
							<View className="bg-[#FFFBF5] border border-[#FFF0D6] py-1 px-3 rounded-md">
								<Text className="text-[#D19E45] text-base font-normal">
									Pending
								</Text>
							</View>
						</View>
						<ChevronRight size={20} color="#333333" />
					</View>
				</Pressable>

				<Pressable
					onPress={() =>
						router.push("/provider/settings/personal-information")
					}
				>
					<View className="w-full flex flex-row items-center justify-between p-3 py-4 border border-[#E6E6E6] bg-white rounded-lg">
						<View className="flex flex-row items-center gap-3">
							<Text className="text-[#666666] text-base font-normal">
								Personal Information
							</Text>
						</View>
						<ChevronRight size={20} color="#333333" />
					</View>
				</Pressable>

				<Pressable
					onPress={() => router.push("/provider/settings/payment")}
				>
					<View className="w-full flex flex-row items-center justify-between p-3 py-4 border border-[#E6E6E6] bg-white rounded-lg">
						<View className="flex flex-row items-center gap-3">
							<Text className="text-[#666666] text-base font-normal">
								Payment
							</Text>
						</View>
						<ChevronRight size={20} color="#333333" />
					</View>
				</Pressable>

				<Pressable
					onPress={() => router.push("/provider/settings/password")}
				>
					<View className="w-full flex flex-row items-center justify-between p-3 py-4 border border-[#E6E6E6] bg-white rounded-lg">
						<View className="flex flex-row items-center gap-3">
							<Text className="text-[#666666] text-base font-normal">
								Password
							</Text>
						</View>
						<ChevronRight size={20} color="#333333" />
					</View>
				</Pressable>

				<Pressable onPress={() => setShowLogoutModal(true)}>
					<View className="w-full flex flex-row items-center justify-between p-3 py-4 border border-[#E6E6E6] bg-white rounded-lg">
						<View className="flex flex-row items-center gap-3">
							<Text className="text-[#D22847] text-base font-normal">
								Log Out
							</Text>
						</View>
						<ChevronRight size={20} color="#D22847" />
					</View>
				</Pressable>

				<LogoutModal
					showModal={showLogoutModal}
					onClose={() => {
						setShowLogoutModal(false);
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

export function LogoutModal({
	showModal,
	onClose,
}: {
	showModal: boolean;
	onClose: () => void;
}) {
	const { logout } = useAuthStore();
	const router = useRouter();

	return (
		<Portal>
			{showModal && (
				<Pressable
					className="flex-1 bg-black/50 px-4 items-center justify-center"
					onPress={onClose}
				>
					<Pressable className="w-full bg-white gap-2 rounded-md p-4 relative pt-10">
						<View className="px-4 items-center gap-1 pb-4">
							<Text className="text-[#515151] text-2xl font-semibold">
								Log Out
							</Text>
							<Text className="text-[#9B9B9B] text-base font-normal">
								Are you sure you want to Log out?
							</Text>
							<View className="w-full flex flex-row items-center justify-between gap-3 pt-6">
								<Button
									title="Log Out"
									className="bg-[#D22853] border-[#D22853] flex-1"
									textClassName="text-lg text-white"
									onPress={() => {
										logout();
										router.push("/");
										onClose();
									}}
								/>
								<Button
									title="Cancel"
									className="bg-[#F2F2F2] border-[#F2F2F2] flex-1"
									textClassName="text-[#666666] text-lg"
									onPress={onClose}
								/>
							</View>
						</View>

						<Pressable
							onPress={onClose}
							className="w-4 h-4 flex items-center justify-center p-3 rounded-full border border-[#B3B3B3] bg-white absolute top-3 right-3"
						>
							<X size={14} color="#B3B3B3" />
						</Pressable>
					</Pressable>
				</Pressable>
			)}
		</Portal>
	);
}
