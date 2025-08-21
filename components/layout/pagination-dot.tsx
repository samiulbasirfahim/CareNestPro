import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

export default function PaginationDots({
    totalPage,
    currentIndex,
}: {
    totalPage: number;
    currentIndex: number;
}) {
    const widths = useRef(
        Array.from({ length: totalPage }, () => new Animated.Value(12)), // w-3 = 12px
    ).current;

    useEffect(() => {
        widths.forEach((width, i) => {
            Animated.timing(width, {
                toValue: i === currentIndex ? 40 : 12, // active w-10 = 40px, inactive w-3 = 12px
                duration: 300,
                useNativeDriver: false,
            }).start();
        });
    }, [currentIndex]);

    return (
        <View className="gap-2 flex-row">
            {widths.map((width, i) => (
                <Animated.View
                    key={i}
                    className={`${currentIndex !== i ? "h-3 bg-accent rounded-full" : "h-3 bg-primary rounded-lg"}`}
                    style={{ width: width }}
                />
            ))}
        </View>
    );
}
