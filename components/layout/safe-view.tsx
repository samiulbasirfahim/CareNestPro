import { ReactNode } from "react";
import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

export default function SafeView({
    children,
    ...props
}: { children: ReactNode } & SafeAreaViewProps) {
    return (
        <SafeAreaView
            className={twMerge(props.className, "flex-1 bg-white")}
            {...props}
        >
            {children}
        </SafeAreaView>
    );
}
