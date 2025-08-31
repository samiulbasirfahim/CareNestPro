import {
    Image,
    ImageSourcePropType,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";
import { Typography } from "../ui/typography";

type Props = {
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
    selected?: boolean;
} & TouchableOpacityProps;

export function OptionCard({
    image,
    title,
    subtitle,
    selected,
    ...props
}: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={`flex-1 border-2 rounded-lg gap-4 items-center p-4 ${selected ? "bg-primary/5 border-primary" : "bg-[#FAFAFA] border-border/20"}`}
            {...props}
        >
            <View className="items-center">
                <View
                    className="overflow-hidden rounded-full items-center justify-center bg-white"
                    style={{
                        height: 74,
                        width: 74,
                    }}
                >
                    <Image source={image} resizeMode="cover" />
                </View>
                <Typography variant="sm-title" className="text-center">
                    {title}
                </Typography>
                <Typography variant="sm-subtitle" className="text-center">
                    {subtitle}
                </Typography>
            </View>

        </TouchableOpacity>
    );
}
