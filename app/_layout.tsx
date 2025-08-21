import { useEffect, useState } from "react";
import "./global.css";
import { router, Stack } from "expo-router";

export default function RootLayout() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // if (isReady) router.replace("/forgot-password/otp");
        if (isReady) router.replace("/splash");
    }, [isReady]);

    useEffect(() => {
        (async () => {
            setIsReady(true);
        })();
    }, []);

    return (
        <Stack>
            <Stack.Screen name="(public)" options={{ headerShown: false }} />
        </Stack>
    );
}
