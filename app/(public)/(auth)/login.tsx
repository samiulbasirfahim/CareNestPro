import SafeView from "@/components/layout/safe-view";
import { Input, InputPassword } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Link } from "expo-router";
import { Text, TouchableHighlight, View } from "react-native";

export default function Page() {
	return (
		<>
			<SafeView>
				<View className="p-6 gap-8">
					<View className="gap-4">
						<Typography variant="title">Log In</Typography>
						<Typography variant="subtitle">
							Welcome back, Please enter your login details
						</Typography>
					</View>
					<Input
						label="Email Address"
						placeholder="Input email address"
					/>
					<View className="gap-2">
						<InputPassword
							label="Password"
							placeholder="Input Password"
						/>
						<Link
							href={"/forgot-password"}
							className="text-primary"
						>
							Forgot password?
						</Link>
					</View>

					<View className="mt-16 items-center gap-2">
						<TouchableHighlight
							underlayColor={"transparent"}
							className="bg-primary items-center py-3 rounded-lg w-full"
						>
							<Link
								href={"/on-boarding"}
								replace
								className="text-center text-lg text-white font-semibold"
							>
								Login
							</Link>
						</TouchableHighlight>

						<Text className="text-foreground text-lg">
							Don&apos;t have an account yet?{" "}
							<Link
								href={"/register"}
								replace
								className="text-primary"
							>
								Sign Up
							</Link>
						</Text>
					</View>
				</View>
			</SafeView>
		</>
	);
}
