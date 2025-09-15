import DateTimePicker from "@react-native-community/datetimepicker";
import { Clock3 } from "lucide-react-native";
import { useState } from "react";
import {
	Platform,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from "react-native";

interface DateInputProps {
	label?: string;
	placeholder?: string;
	value?: Date | null;
	onChange?: (date: Date | null) => void;
}

const TimeInput: React.FC<DateInputProps> = ({
	label = "Start Time",
	placeholder = "Select time",
	value,
	onChange,
}) => {
	const [time, setTime] = useState<Date>(value || new Date());
	const [showPicker, setShowPicker] = useState(false);
	const [inputValue, setInputValue] = useState(
		value ? value.toISOString().split("T")[0] : ""
	);

	const onDateChange = (event: any, selectedDate?: Date) => {
		const currentDate = selectedDate || time;
		setShowPicker(Platform.OS === "ios"); // On iOS, keep modal open; on Android, close it
		setTime(currentDate);
		setInputValue(currentDate.toISOString().split("T")[0]); // Format as YYYY-MM-DD
		onChange?.(currentDate);
	};

	const formatDateForDisplay = (date: Date): string => {
		// Customize format here, e.g., using date-fns: import { format } from 'date-fns'; return format(date, 'MM/dd/yyyy');
		return date.toISOString().split("T")[0];
	};

	return (
		<View className="flex flex-col gap-3">
			<Text className="text-[#4D4D4D] font-medium">{label}</Text>
			<TouchableHighlight
				className="border border-[#E6E6E6] rounded-md p-1 px-3 bg-white flex flex-row items-center"
				onPress={() => setShowPicker(true)}
				activeOpacity={0.7}
				underlayColor={"transparent"}
			>
				<View className="w-full flex flex-row items-center justify-between">
					<TextInput
						placeholder={placeholder}
						placeholderTextColor="#888"
						value={inputValue}
						editable={false}
						pointerEvents="none"
						showSoftInputOnFocus={false}
						className="flex-1 text-base text-[#999999] font-normal"
					/>
					<Clock3 size={20} color="#888" />
				</View>
			</TouchableHighlight>

			{/* Date Picker Modal */}
			{showPicker && (
				<DateTimePicker
					value={time}
					mode="time"
					display={Platform.OS === "ios" ? "spinner" : "default"} // Matches native UI
					onChange={onDateChange}
					maximumDate={new Date()} // Optional: Limit to today or future
				/>
			)}
		</View>
	);
};

export default TimeInput;
