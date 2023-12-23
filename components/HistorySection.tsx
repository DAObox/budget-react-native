import { View, Text } from "react-native";
import { YGroup, Separator } from "tamagui";
import { HistoryCard } from "./HistoryCard";
import { history } from "../utils/constants";

export function HistorySection() {
    return (
        <View className="flex-1 p-0">
            <Text className="text-xl font-semibold text-[#363e4b]">History</Text>
            <YGroup separator={<Separator />}>
                {history.map((history) => (
                    <HistoryCard type={history.type} key={history.id} />
                ))}
            </YGroup>
        </View>
    );
}