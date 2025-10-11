import { Pressable, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { Typography } from "./typography";

type Props = {
	title: string;
	textClassName: string;
} & TouchableOpacityProps;

export function Button({ title, textClassName, className, ...props }: Props) {
	return (
		<Pressable
			style={({ pressed }) => ({
				opacity: pressed ? 0.7 : 1,
				transform: [{ scale: pressed ? 0.98 : 1 }],
			})}
			className={twMerge(
				"bg-primary items-center py-3 rounded-lg w-full",
				className
			)}
			{...props}
		>
			<Typography
				variant="subtitle"
				className={twMerge(
					"text-center text-lg text-white font-semibold",
					textClassName
				)}
			>
				{title}
			</Typography>
		</Pressable>
	);
}
