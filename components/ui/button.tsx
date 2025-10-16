import { Pressable, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { Typography } from "./typography";

type Props = {
	title: string;
	textClassName?: string;
	className?: string;
	variant?: "primary" | "primary-outline";
	renderIcon?: React.ReactNode;
} & TouchableOpacityProps;

export function Button({
	title,
	textClassName,
	className,
	variant = "primary",
	renderIcon,
	...props
}: Props) {
	return (
		<Pressable
			style={({ pressed }) => ({
				opacity: pressed ? 0.7 : 1,
				transform: [{ scale: pressed ? 0.98 : 1 }],
			})}
			className={twMerge(
				"py-3 rounded-lg w-full border border-primary flex items-center flex-row justify-center gap-2",
				variant === "primary" ? "bg-primary" : "bg-white",
				className
			)}
			{...props}
		>
			<Typography
				variant="subtitle"
				className={twMerge(
					"text-center text-lg font-semibold items-center",
					variant === "primary" ? "text-white" : "text-primary",
					textClassName
				)}
			>
				{title}
			</Typography>
			{renderIcon}
		</Pressable>
	);
}
