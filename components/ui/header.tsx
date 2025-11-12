import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { HeaderBackButton } from "./header-back-button";
import { Typography } from "./typography";

type Props = {
	title: string;
	subtitle: string;
	showBackButton?: boolean;
} & ViewProps;

export function Header({
	title,
	subtitle,
	showBackButton = true,
	...props
}: Props) {
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ marginTop: top }} className="p-4 gap-4 bg-white">
			<View className="flex-row items-center gap-2">
				{showBackButton && <HeaderBackButton />}
				<Typography variant="title" className="flex-1">
					{title}
				</Typography>
			</View>
			<Typography variant="subtitle" className="text-start">
				{subtitle}
			</Typography>
		</View>
	);
}
