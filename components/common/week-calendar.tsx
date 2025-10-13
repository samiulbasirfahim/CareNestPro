import { addDays, format, startOfWeek } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react-native"; // optional icons
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function WeekCalendar() {
	const [currentWeekStart, setCurrentWeekStart] = useState(
		startOfWeek(new Date(), { weekStartsOn: 0 })
	);
	const [selectedDate, setSelectedDate] = useState(new Date());

	const weekDays = Array.from({ length: 7 }).map((_, i) =>
		addDays(currentWeekStart, i)
	);

	const handlePrevWeek = () =>
		setCurrentWeekStart(addDays(currentWeekStart, -7));
	const handleNextWeek = () =>
		setCurrentWeekStart(addDays(currentWeekStart, 7));

	return (
		<View className="items-center w-full">
			{/* Header with Month/Year and arrows */}
			<View className="flex-row justify-start items-center w-full gap-3 mb-3">
				<Pressable onPress={handlePrevWeek}>
					<ChevronLeft size={20} color="#666666" />
				</Pressable>
				<Text className="text-base font-medium text-[#666666]">
					{format(selectedDate, "MMMM d, yyyy")}
				</Text>
				<Pressable onPress={handleNextWeek}>
					<ChevronRight size={20} color="#666666" />
				</Pressable>
			</View>

			{/* Horizontal week days */}
			<FlatList
				className="w-full"
				horizontal
				data={weekDays}
				keyExtractor={(item) => item.toDateString()}
				renderItem={({ item }) => {
					const isSelected =
						format(item, "yyyy-MM-dd") ===
						format(selectedDate, "yyyy-MM-dd");
					return (
						<Pressable
							onPress={() => setSelectedDate(item)}
							className={`px-3 py-2 mx-[5px] rounded-lg border ${
								isSelected
									? "bg-primary border-primary"
									: "bg-white border-gray-300"
							}`}
						>
							<Text
								className={`text-center text-sm ${
									isSelected
										? "text-white font-semibold"
										: "text-gray-700"
								}`}
							>
								{format(item, "EEE")}
							</Text>
							<Text
								className={`text-center text-base ${
									isSelected
										? "text-white font-semibold"
										: "text-gray-900"
								}`}
							>
								{format(item, "d")}
							</Text>
						</Pressable>
					);
				}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}
