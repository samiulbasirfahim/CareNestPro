import { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

const variants = {
	title: "text-4xl text-title",
	subtitle: "text-xl text-foreground",
	"sm-title": "text-xl text-title",
	"sm-subtitle": "text-base leading-tight text-foreground",
	body: "text-foreground",
};

type Props = TextProps & {
	variant?: keyof typeof variants;
	children: ReactNode;
};

export const Typography = ({
	children,
	variant = "body",
	className,
	...props
}: Props) => {
	return (
		<Text
			{...props}
			className={twMerge(variants[variant], className, "leading-normal")}
		>
			{children}
		</Text>
	);
};
