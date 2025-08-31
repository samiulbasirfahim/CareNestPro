import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Typography } from "./typography";

type Props = {
  list: string[];
  title: string;
};

type Data = {
  label: string;
  value: number;
};

const MultiSelectComponent = ({ list, title }: Props) => {
  const [data, setData] = useState<Data[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setData(list.map((l, i) => ({ label: l, value: i })));
  }, [list]);

  const renderItem = (item: Data) => (
    <View className="flex-row items-center rounded-lg justify-between px-4 py-3">
      <Text className="text-base text-foreground">{item.label}</Text>
    </View>
  );

  return (
    <View className="w-full gap-2">
        <Typography className="text-title">{title}</Typography>
      <Dropdown
        style={{
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 14,
            paddingHorizontal: 10,
            borderColor: "#CCCCCC"

        }}
        placeholderStyle={{ fontSize: 16, color: "#888" }}
        selectedTextStyle={{ fontSize: 14, color: "#111" }}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={selected}
        searchPlaceholder="Search..."
        onChange={(item) => setSelected(item.value)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MultiSelectComponent;