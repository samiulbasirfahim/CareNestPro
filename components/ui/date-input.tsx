import { cn } from "@/lib";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CalendarDays } from "lucide-react-native";
import { useState } from "react";
import { Platform, Pressable, Text, TextInput, View } from "react-native";

interface DateInputProps {
	label?: string;
	placeholder?: string;
	value?: Date | null;
	onChange?: (date: Date | null) => void;
	className?: string;
	iconColor?: string;
}

const DateInput: React.FC<DateInputProps> = ({
	label,
	placeholder,
	value,
	onChange,
	className,
	iconColor,
}) => {
	const [date, setDate] = useState<Date>(value || new Date());
	const [showPicker, setShowPicker] = useState(false);
	const [inputValue, setInputValue] = useState(
		value ? value.toISOString().split("T")[0] : ""
	);

	const onDateChange = (event: any, selectedDate?: Date) => {
		const currentDate = selectedDate || date;
		setShowPicker(Platform.OS === "ios"); // On iOS, keep modal open; on Android, close it
		setDate(currentDate);
		setInputValue(currentDate.toISOString().split("T")[0]); // Format as YYYY-MM-DD
		onChange?.(currentDate);
	};

	const formatDateForDisplay = (date: Date): string => {
		// Customize format here, e.g., using date-fns: import { format } from 'date-fns'; return format(date, 'MM/dd/yyyy');
		return date.toISOString().split("T")[0];
	};

	return (
		<View className="flex flex-col gap-3">
			{label && (
				<Text className="text-[#4D4D4D] font-medium">{label}</Text>
			)}
			<Pressable
				style={({ pressed }) => ({
					opacity: pressed ? 0.7 : 1,
					transform: [{ scale: pressed ? 0.98 : 1 }],
				})}
				className="border border-[#E6E6E6] rounded-md p-1 px-3 bg-transparent flex flex-row items-center"
				onPress={() => setShowPicker(true)}
			>
				<View className="w-full flex flex-row items-center justify-between">
					<TextInput
						placeholder={placeholder}
						placeholderTextColor="#888"
						value={inputValue}
						editable={false}
						pointerEvents="none"
						showSoftInputOnFocus={false}
						className={cn(
							"flex-1 text-base text-[#999999] font-normal",
							className
						)}
					/>
					<CalendarDays size={20} color={iconColor || "#888"} />
				</View>
			</Pressable>

			{/* Date Picker Modal */}
			{showPicker && (
				<DateTimePicker
					value={date}
					mode="date"
					display={Platform.OS === "ios" ? "spinner" : "default"} // Matches native UI
					onChange={onDateChange}
					maximumDate={new Date()} // Optional: Limit to today or future
				/>
			)}
		</View>
	);
};

export default DateInput;
