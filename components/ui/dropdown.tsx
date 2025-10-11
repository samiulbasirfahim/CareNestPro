import { Check } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Typography } from "./typography";

type Props = {
	list: string[];
	title?: string;
	subtitle?: string;
	placeholder?: string;
	isMulti?: boolean;
};

type Data = {
	label: string;
	value: number;
};

const MultiSelectComponent = ({
	list,
	title,
	subtitle,
	placeholder,
	isMulti: isMulti = false,
}: Props) => {
	const [data, setData] = useState<Data[]>([]);
	const [selected, setSelected] = useState<number[]>([]);
	const [isFocus, setIsFocus] = useState(false);

	useEffect(() => {
		setData(list.map((l, i) => ({ label: l, value: i })));
	}, [list]);

	const renderItem = (item: Data) => {
		const isSelected = selected.includes(item.value);

		if (isMulti) {
			return (
				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.7 : 1,
						transform: [{ scale: pressed ? 0.98 : 1 }],
					})}
					onPress={() => {
						// Toggle selection
						if (isSelected) {
							setSelected(
								selected.filter((val) => val !== item.value)
							);
						} else {
							setSelected([...selected, item.value]);
						}
					}}
					className="px-4 py-3"
				>
					<View className="flex-row items-center justify-start gap-3">
						{isSelected ? (
							<View className="w-5 h-5 rounded-sm bg-primary flex items-center justify-center">
								<Check size={14} color="#fff" />
							</View>
						) : (
							<View className="w-5 h-5 rounded-sm bg-white border-[#CCCCCC] border flex items-center justify-center"></View>
						)}
						<Text className="text-base text-foreground">
							{item.label}
						</Text>
					</View>
				</Pressable>
			);
		} else {
			return (
				<View className="flex-row items-center rounded-lg justify-between px-4 py-3">
					<Text className="text-base text-foreground">
						{item.label}
					</Text>
				</View>
			);
		}
	};

	// Generate text for selected items
	const getSelectedText = () => {
		if (selected.length === 0) return "Select items";
		const selectedLabels = selected
			.map((val) => data.find((item) => item.value === val)?.label)
			.filter(Boolean)
			.join(", ");
		return selectedLabels.length > 20
			? `${selectedLabels.slice(0, 20)}...`
			: selectedLabels;
	};

	if (isMulti) {
		return (
			<View className="w-full gap-2">
				<Typography className="text-title font-semibold">
					{title}
					{subtitle && (
						<Typography className="font-normal text-[#808080]">
							{" "}
							{subtitle}
						</Typography>
					)}
					<Typography className="font-normal text-[#808080]">
						{" "}
						({selected.length} Selected)
					</Typography>
				</Typography>
				<Dropdown
					style={{
						borderWidth: 1,
						borderRadius: 8,
						paddingVertical: 14,
						paddingHorizontal: 10,
						borderColor: "#CCCCCC",
					}}
					placeholderStyle={{
						fontSize: 14,
						color: "#999999",
					}}
					selectedTextStyle={{ fontSize: 14, color: "#666666" }}
					data={data}
					labelField="label"
					valueField="value"
					placeholder={getSelectedText()} // Use placeholder to show selected items
					value={null} // Keep null to avoid single-select behavior
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onChange={() => {}} // Disable default onChange
					searchPlaceholder="Search..."
					renderItem={renderItem}
					showsVerticalScrollIndicator={true}
					selectedTextProps={{
						numberOfLines: 1,
					}}
				/>
			</View>
		);
	} else {
		return (
			<View className="w-full gap-2">
				<Typography className="text-title font-semibold">
					{title}
					{subtitle && (
						<Typography className="font-normal text-[#808080]">
							{" "}
							{subtitle}
						</Typography>
					)}
				</Typography>
				<Dropdown
					style={{
						borderWidth: 1,
						borderRadius: 8,
						paddingVertical: 14,
						paddingHorizontal: 10,
						borderColor: "#CCCCCC",
					}}
					placeholderStyle={{ fontSize: 16, color: "#888" }}
					selectedTextStyle={{ fontSize: 14, color: "#111" }}
					data={data}
					labelField="label"
					valueField="value"
					placeholder={placeholder || "Select item"}
					value={selected}
					searchPlaceholder="Search..."
					onChange={(item) => setSelected(item.value)}
					renderItem={renderItem}
				/>
			</View>
		);
	}
};

export default MultiSelectComponent;
