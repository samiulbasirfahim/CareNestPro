import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { ArrowLeft, SendHorizonalIcon } from "lucide-react-native";
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";

export default function MessageInbox() {
	const router = useRouter();

	return (
		<SafeAreaView className="w-full h-full">
			<View className="w-full h-30 pt-14 flex flex-row gap-3 bg-[#F3FAFC] p-5 items-center justify-between">
				<View className="flex flex-row gap-3 items-center">
					<Pressable onPress={() => router.back()}>
						<ArrowLeft size={20} color="#636363" />
					</Pressable>
					<View className="w-12 h-12 flex items-center justify-center">
						<Image
							source={require("@/assets/images/avatar.jpg")}
							resizeMethod="resize"
							className="w-full h-full rounded-full"
						/>
					</View>
					<Text className="text-[#666666] font-medium text-xl">
						Aleem Sarah
					</Text>
				</View>

				<View className="flex flex-row gap-5 items-center">
					<Ionicons name="call" size={18} color="#1F6E9D" />
					<Ionicons name="videocam" size={20} color="#1F6E9D" />
					<Ionicons
						name="ellipsis-vertical"
						size={20}
						color="#666666"
					/>
				</View>
			</View>
			<View className="w-full flex flex-1 h-full flex-col gap-3 relative bg-white">
				{/* top */}
				<ScrollView
					className="p-5 "
					contentContainerStyle={{
						flexGrow: 1,
						paddingBottom: 60,
					}}
					contentContainerClassName="gap-6"
				>
					<View className="w-full flex-1 flex flex-col gap-3">
						{/* {Array.from({ length: 50 }).map((_, index) => (
							<View className="w-full h-6">
								<Text>{index}</Text>
							</View>
						))} */}

						<View className="mx-auto w-min h-auto p-2 bg-[#F7F7F7] rounded-lg text-center">
							<Text className="text-[#999999] font-normal text-base">
								May 3, 2025
							</Text>
						</View>

						<View className="w-full flex items-start">
							<View className="w-[70%] h-auto p-2 bg-[#F5F5F5] rounded-lg rounded-bl-none text-center flex flex-col gap-3">
								<Text className="text-[#999999] font-normal text-base">
									The dishes have been washed and I only need
									to take out the trash
								</Text>
								<Text className="text-[#999999] text-sm">
									13:09 PM
								</Text>
							</View>
						</View>

						<View className="w-full flex items-end gap-3">
							<View className="w-[70%] h-auto p-2 bg-[#0D99C9] rounded-lg rounded-br-none items-end flex flex-col text-right gap-3">
								<Text className="text-[#ffffff] font-normal text-base">
									The dishes have been washed and I only need
									to take out the trash
								</Text>
								<Text className="text-[#ffffff] text-sm">
									13:09 PM
								</Text>
							</View>
							<View className="w-min h-auto p-2 bg-[#E7F2F8] rounded-lg items-end text-right rounded-br-none flex flex-col gap-3">
								<Text className="text-[#0D99C9] font-normal text-base">
									New activity started
								</Text>
								<Text className="text-[#0D99C9] text-sm">
									13:09 PM
								</Text>
							</View>
						</View>

						<View className="w-full flex items-start">
							<View className="w-[70%] h-auto p-2 bg-[#F5F5F5] rounded-lg rounded-bl-none text-center flex flex-col gap-3">
								<Text className="text-[#999999] font-normal text-base">
									The dishes have been washed and I only need
									to take out the trash
								</Text>
								<Text className="text-[#999999] text-sm">
									13:09 PM
								</Text>
							</View>
						</View>

						<View className="mx-auto w-min h-auto p-2 bg-[#F7F7F7] rounded-lg text-center">
							<Text className="text-[#999999] font-normal text-base">
								May 3, 2025
							</Text>
						</View>

						<View className="w-full flex items-end gap-3">
							<View className="w-min h-auto p-2 bg-[#E7F2F8] rounded-lg items-end text-right rounded-br-none flex flex-col gap-3">
								<Text className="text-[#0D99C9] font-normal text-base">
									New activity started
								</Text>
								<Text className="text-[#0D99C9] text-sm">
									13:09 PM
								</Text>
							</View>
						</View>

						<View className="w-full flex items-start">
							<View className="w-[70%] h-auto p-2 bg-[#F5F5F5] rounded-lg rounded-bl-none text-center flex flex-col gap-3">
								<Text className="text-[#999999] font-normal text-base">
									The dishes have been washed and I only need
									to take out the trash
								</Text>
								<Text className="text-[#999999] text-sm">
									13:09 PM
								</Text>
							</View>
						</View>

						<View className="w-full flex items-end gap-3">
							<View className="w-[70%] h-auto p-2 bg-[#0D99C9] rounded-lg rounded-br-none items-end flex flex-col text-right gap-3">
								<Text className="text-[#ffffff] font-normal text-base">
									The dishes have been washed and I only need
									to take out the trash
								</Text>
								<Text className="text-[#ffffff] text-sm">
									13:09 PM
								</Text>
							</View>
							<View className="w-min h-auto p-2 bg-[#E7F2F8] rounded-lg items-end text-right rounded-br-none flex flex-col gap-3">
								<Text className="text-[#0D99C9] font-normal text-base">
									New activity started
								</Text>
								<Text className="text-[#0D99C9] text-sm">
									13:09 PM
								</Text>
							</View>
						</View>
					</View>
				</ScrollView>

				{/* bottom */}
				<View className="sticky bottom-0 left-0 flex w-full h-auto pb-2">
					<View className="w-[100%] h-auto flex flex-row gap-4 items-center px-3">
						<TextInput
							className="bg-[#F5F5F5] flex-1 border-[#F5F5F5] border rounded-md h-12 px-4 text-black placeholder:text-[#CCCCCC]"
							placeholder="Write your message"
							style={{
								textAlignVertical: "center",
							}}
						/>

						<View className="bg-[#EEF6FB] rounded-full w-12 h-12 p-2 flex items-center justify-center">
							<SendHorizonalIcon size={18} color="#0D99C9" />
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
