import { YStack } from "tamagui";
import { QueueCard } from "./QueueCard";
import { Text } from "react-native";

export function QueueSection() {
    return (
        <YStack className="flex-1 p-0 space-y-5">
            <Text className="text-xl font-semibold text-[#363e4b]">Queue</Text>
            <QueueCard />
        </YStack>
    );
}