import SafeView from "@/components/layout/safe-view";
import { Input, InputPassword } from "@/components/ui/input";
import { Link } from "expo-router";
import { Text, TouchableHighlight, View } from "react-native";

export default function Page() {
	return (
		<>
			<SafeView>
				<View className="p-6 gap-8">
					<View className="gap-4">
						<Text className="text-4xl text-title">Register</Text>
						<Text className="text-xl text-foreground">
							Kindly enter your information below
						</Text>
					</View>
					<Input
						label="Email Address"
						placeholder="Input email address"
					/>

					<InputPassword
						label="Password"
						placeholder="Input Password"
					/>
					<InputPassword
						label="Confirm Password"
						placeholder="Input Password"
					/>

					<View className="mt-16 items-center gap-2">
						<TouchableHighlight
							underlayColor={"transparent"}
							className="bg-primary items-center py-3 rounded-lg w-full border-2 border-primary"
						>
							<Text className="text-center text-lg text-white font-semibold">
								Sign Up
							</Text>
						</TouchableHighlight>

						<Text className="text-foreground text-lg flex flex-row gap-4">
							Already have an account?{" "}
							<Link
								href={"/login"}
								replace
								className="text-primary"
							>
								Login
							</Link>
						</Text>
					</View>
				</View>
			</SafeView>
		</>
	);
}
