import { EnableLocationModal } from "@/components/common/enable-location-modal";
import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Page() {

    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <>
            <Header
                title="Child care details"
                subtitle="Welcome! Kindly select options to help us understand your preferences"
            />
            <ScrollView className="p-6" contentContainerClassName="gap-6">
                <View className="flex-row">
                    <View className="flex-shrink-0">
                        <BouncyCheckbox
                            innerIconStyle={{
                                borderWidth: 2,
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                borderColor: "#CCCCCC"
                            }}
                            iconStyle={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                borderColor: "#CCCCCC"
                            }}
                            fillColor="#0D99C9"
                        />
                    </View>
                    <Typography>Use my current Location instead</Typography>
                </View>

                <DropDown list={["Option 1", "Option 2", "Option 3"]} title="Preferred Language" />
                <DropDown list={["Option 1", "Option 2", "Option 3"]} title="Country" />
                <DropDown list={["Option 1", "Option 2", "Option 3"]} title="State" />
                <DropDown list={["Option 1", "Option 2", "Option 3"]} title="City" />
                <DropDown list={["Option 1", "Option 2", "Option 3"]} title="Zip Code" />

                {/* <Link href={"/on-boarding/details"} asChild> */}
                <TouchableOpacity className="bg-primary items-center py-3 rounded-lg w-full" onPress={() => setShowModal(true)}>
                    <Typography
                        variant="subtitle"
                        className="text-center text-lg text-white font-semibold"
                    >
                        Next
                    </Typography>
                </TouchableOpacity>
                {/* </Link> */}
            </ScrollView>
            <EnableLocationModal showModal={showModal} onClose={() => {
                setShowModal(false)
                router.push("/on-boarding/info")
            }} />
        </>
    );
}
