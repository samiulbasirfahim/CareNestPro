import { OptionCard } from "@/components/common/option-card";
import SafeView from "@/components/layout/safe-view";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { Link } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function Page() {
    const [selected, setSelected] = useState<string>("");
    return (
        <>
            <Header title="What category of Care are you Interested in" subtitle="Kindly select options to help us understand your preferences" />
            <SafeView className="p-6 gap-8">
                <View className="gap-4">
                    <View className="gap-4 flex-row">
                        <OptionCard
                            image={require("@/assets/images/on-boarding/category/image-1.png")}
                            title="Childcare"
                            subtitle="Find the Right child Care Provider"
                            selected
                        />
                        <OptionCard
                            image={require("@/assets/images/on-boarding/category/image-2.png")}
                            title="Elderly Care"
                            subtitle="Find Your Perfect Elderly Care provider"
                        />
                    </View>
                    <View className="gap-4 flex-row">
                        <OptionCard
                            image={require("@/assets/images/on-boarding/category/image-3.png")}
                            title="Tutoring"
                            subtitle="Find Expert Tutors for Every Subject Area"
                        />
                        <OptionCard
                            image={require("@/assets/images/on-boarding/category/image-4.png")}
                            title="HouseKeeping"
                            subtitle="Find Reliable House Keepers"
                        />
                    </View>
                </View>

                <Link href={"/on-boarding/details"} asChild>
                    <TouchableOpacity className="bg-primary items-center py-3 rounded-lg w-full">
                        <Typography
                            variant="subtitle"
                            className="text-center text-lg text-white font-semibold"
                        >
                            Next
                        </Typography>
                    </TouchableOpacity>
                </Link>
            </SafeView>
        </>
    );
}
