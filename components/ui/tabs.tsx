import { cn } from "@/lib";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

const Tabs = ({ children }: { children: React.ReactNode }) => {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = React.Children.map(children, (child, index) => {
		if (React.isValidElement(child) && child.type === Tab) {
			return { ...child.props, index };
		}
		return null;
	}).filter(
		(item): item is { title: string; index: number } => item !== null
	) as { title: string; index: number }[];

	return (
		<View className={cn("w-full")}>
			<View className="flex-row border-b border-[#B0D9F2]">
				{tabs.map((tab) => (
					<Pressable
						key={tab.index}
						className={`flex-1 px-4 py-2 text-center ${
							activeTab === tab.index
								? "border-b-2 border-[#0D99C9]"
								: ""
						}`}
						onPress={() => setActiveTab(tab.index)}
					>
						<Text
							className={`text-center font-medium ${
								activeTab === tab.index
									? "text-[#0D99C9]"
									: "text-[#999999]"
							}`}
						>
							{tab.title}
						</Text>
					</Pressable>
				))}
			</View>
			<View className="py-4">
				{tabs.map((tab, index) =>
					activeTab === index ? children[index] : null
				)}
			</View>
		</View>
	);
};

const Tab = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => {
	return <>{children}</>;
};

export { Tab, Tabs };
