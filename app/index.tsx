import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/splash"}>Splash Screen</Link>
      <Text className="text-xl">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
