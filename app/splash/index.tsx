import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <>
      <View>
        <Link href={"/splash/2"}>Next</Link>
      </View>
    </>
  );
}
