import LOCATION from "@/assets/svgs/location.svg";
import {
	ImageBackground,
	Pressable,
	useWindowDimensions,
	View,
} from "react-native";
import { Portal } from "react-native-portalize";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

export function EnableLocationModal({
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
					<Pressable
						className="w-full bg-white gap-2"
						style={{
							// height: height * 0.6,
							transform: `translateY(${((height * 2) / 3) * 0.2}px)`,
						}}
					>
						<ImageBackground
							source={require("@/assets/images/on-boarding/map.png")}
							width={0}
							className="w-full h-60"
							resizeMode="cover"
						>
							<View className="inset-0 absolute bg-black/30 z-99 flex-1 items-center justify-center">
								<View className="p-4 rounded-full bg-primary/20">
									<View className="p-4 rounded-full bg-primary/20">
										<View className="p-2 rounded-full bg-[#EFF7FB]/40">
											<LOCATION />
										</View>
									</View>
								</View>
							</View>
						</ImageBackground>

						<View className="px-4 items-center gap-2 pb-4">
							<Typography variant="sm-title" className="text-2xl">
								Enable your Location
							</Typography>
							<Typography
								className="text-center"
								variant="sm-subtitle"
							>
								This app requires your location are turned on
								your devices and on this app. You must enable
								them on your phone settings
							</Typography>
							<Button
								title="Allow only while using this App"
								textClassName="text-lg"
								onPress={onClose}
							/>
							<Button
								variant="primary-outline"
								title="Don't allow this App"
								textClassName="text-primary text-lg"
								onPress={onClose}
							/>
						</View>
					</Pressable>
				</Pressable>
			)}
		</Portal>
	);
}
