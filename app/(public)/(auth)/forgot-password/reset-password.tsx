import { InputPassword } from "@/components/ui/input";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Page() {
    return (
        <View className="flex-1 bg-white p-6 gap-6">
            <Text className="text-4xl text-title">Reset Password</Text>
            <InputPassword placeholder="Input Password" label="Password" />
            <InputPassword
                placeholder="Input Confirm Password"
                label="Confirm Password"
            />

            <TouchableOpacity
                className="bg-primary items-center py-3 rounded-lg w-full mt-8"
                onPress={() => router.push("/forgot-password/success")}
            >
                <Text className="text-center text-lg text-white font-semibold">
                    Submit Request
                </Text>
            </TouchableOpacity>
        </View>
    );
}
