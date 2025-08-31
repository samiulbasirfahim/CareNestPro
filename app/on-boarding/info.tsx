import DropDown from "@/components/ui/dropdown";
import { Header } from "@/components/ui/header";
import { Typography } from "@/components/ui/typography";
import { ScrollView, TouchableOpacity } from "react-native";

export default function Page() {

    return (
        <>
            <Header
                title="Child care details"
                subtitle="Welcome! Kindly select options to help us understand your preferences"
            />
            <ScrollView className="p-6" contentContainerClassName="gap-6">
                <DropDown list={["Nanny", "babysitter"]} title="Childcare Type" />
                <DropDown list={["1 Child", "2 Children", "3 Children", "4+ Children"]} title="Numbers of child(ren) that needs care" />
                <DropDown list={["Option 1", "Option 2", "Option 3"]} title="Gender of child 1" />

                {/* <Link href={"/on-boarding/details"} asChild> */}
                <TouchableOpacity className="bg-primary items-center py-3 rounded-lg w-full" onPress={() => setShowModal(true)}>
                    <Typography
                        variant="subtitle"
                        className="text-center text-lg text-white font-semibold"
                    >
                        Next
                    </Typography>
                </TouchableOpacity>
                {/* </Link> */}
            </ScrollView>
        </>
    );
}
