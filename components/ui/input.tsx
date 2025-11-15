import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useId, useState } from "react";
import {
	KeyboardTypeOptions,
	Pressable,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
	label: string;
	labelStyle?: string;
	inputStyle?: string;
	keyboardType?: KeyboardTypeOptions;
} & TextInputProps;

export function Input({
	label,
	labelStyle,
	inputStyle,
	keyboardType,
	...props
}: Props) {
	const id = useId();
	return (
		<View className="items-start gap-2 w-full">
			<Text
				className={twMerge("text-title font-semibold", labelStyle)}
				nativeID={id}
			>
				{label}
			</Text>
			<TextInput
				keyboardType={keyboardType || "default"}
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
				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() => setShowPassword((prev) => !prev)}
					className="absolute right-4"
				>
					<MaterialCommunityIcons
						name={showPassword ? "eye-outline" : "eye-off-outline"}
						size={24}
						color={"#9b9b9b"}
					/>
				</Pressable>
			</View>
		</View>
	);
}
