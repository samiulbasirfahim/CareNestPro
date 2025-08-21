import { OtpInput } from "react-native-otp-entry";
import OTPImage from "@/assets/images/otp-image.png";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import OtpIcon from "@/assets/svgs/otp";

export default function Page() {
    return (
        <View className="flex-1 bg-white p-6 gap-6 items-center">
            {
                // <Image width={0} className="h-auto w-2/3" source={OTPImage} />
            }
            <OtpIcon />
            <Text className="text-4xl text-title">OTP Verification</Text>
            <Text className="text-xl text-foreground text-center">
                Enter the OTP sent to{" "}
                <Text className="font-semibold text-title">
                    samiulbasirfahim.rxen@gmail.com
                </Text>{" "}
                to your email or phone number to reset your password
            </Text>
            <OtpInput
                numberOfDigits={4}
                theme={{
                    containerStyle: {
                        justifyContent: "center",
                        gap: 10,
                    },
                    pinCodeContainerStyle: {
                        borderRadius: 4,
                        borderColor: "#CCCCCC",
                    },
                    pinCodeTextStyle: {
                        color: "#515151",
                    },
                    focusedPinCodeContainerStyle: {
                        borderColor: "#0D99C9",
                    },
                    focusStickStyle: {
                        backgroundColor: "#0D99C9",
                    },
                }}
            />
            <TouchableOpacity>
                <Text className="text-xl text-foreground text-center">
                    Don&apos;t receive the OTP?{" "}
                    <Text className="font-semibold text-primary">Resend OTP</Text>{" "}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="bg-primary items-center py-3 rounded-lg w-full mt-8"
                onPress={() => router.push("/forgot-password/reset-password")}
            >
                <Text className="text-center text-lg text-white font-semibold">
                    Submit Request
                </Text>
            </TouchableOpacity>
        </View>
    );
}
