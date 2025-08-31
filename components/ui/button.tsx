import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { Typography } from "./typography";

type Props = {
    title: string;
    textClassName: string;
} & TouchableOpacityProps;

export function Button({ title, textClassName, className, ...props }: Props) {
    return (
        <TouchableOpacity
            className={twMerge("bg-primary items-center py-3 rounded-lg w-full", className)}
            {...props}
        >
            <Typography
                variant="subtitle"
                className={twMerge("text-center text-lg text-white font-semibold", textClassName)}
            >
                {title}
            </Typography>
        </TouchableOpacity>
    );
}
