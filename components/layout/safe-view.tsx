import { ReactNode } from "react";
import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";

export default function SafeView({
    children,
    ...props
}: { children: ReactNode } & SafeAreaViewProps) {
    return <SafeAreaView  className="flex-1">{children}</SafeAreaView>;
}
