import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useId, useState } from "react";
import {
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
} from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
	label: string;
	labelStyle?: string;
	inputStyle?: string;
} & TextInputProps;

export function Input({ label, labelStyle, inputStyle, ...props }: Props) {
	const id = useId();
	return (
		<View className="items-start gap-2 w-full">
			<Text
				className={twMerge("text-title text-lg", labelStyle)}
				nativeID={id}
			>
				{label}
			</Text>
			<TextInput
				accessibilityLabelledBy={id}
				{...props}
				className={twMerge(
					"border-border border w-full rounded-md h-12 px-4 text-foreground placeholder:text-border",
					inputStyle
				)}
				style={{
					textAlignVertical: "center",
				}}
			/>
		</View>
	);
}

export function InputPassword({ label, ...props }: Props) {
	const id = useId();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<View className="items-start gap-2">
			<Text className="text-title text-lg" nativeID={id}>
				{label}
			</Text>
			<View className="relative w-full flex-row items-center justify-end">
				<TextInput
					accessibilityLabelledBy={id}
					{...props}
					secureTextEntry={!showPassword}
					className="border-border border w-full rounded-md h-12 px-4 text-foreground placeholder:text-border"
					style={{
						textAlignVertical: "center",
					}}
				/>
				<TouchableOpacity
					onPress={() => setShowPassword((prev) => !prev)}
					className="absolute right-4"
				>
					<MaterialCommunityIcons
						name={showPassword ? "eye-outline" : "eye-off-outline"}
						size={24}
						color={"#9b9b9b"}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
