import { useId } from "react";
import { Text, TextInput, View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
	label: string;
	labelStyle?: string;
	inputStyle?: string;
} & React.ComponentProps<typeof TextInput>;

export function Textarea({ label, labelStyle, inputStyle, ...props }: Props) {
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
				accessibilityLabelledBy={id}
				multiline={true}
				numberOfLines={5}
				textAlignVertical="top"
				{...props}
				className={twMerge(
					"border-border border w-full rounded-md px-4 py-3 text-foreground placeholder:text-border",
					inputStyle
				)}
				style={{
					minHeight: 120,
					textAlignVertical: "top",
				}}
			/>
		</View>
	);
}
