import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { YGroup, ListItem, YStack, XStack } from "tamagui";
import truncateEthereumAddress from "../utils/functions";
import { Ionicons } from "@expo/vector-icons";

export function UserItemEditable({ user }) {
    return (
        <YGroup.Item className="flex-1 w-full bg-white">
            <TouchableOpacity className="flex-1 w-full">
                <ListItem className="flex justify-between flex-1 px-0 pt-0 pb-3 bg-white rounded-md">
                    <YStack className="space-y-0.5">
                        <Text className="text-xl font-semibold text-[#565f6d]">
                            {user.name}
                        </Text>
                        <Text className="text-sm font-semibold text-[#3164FA] pt-1.5">
                            {truncateEthereumAddress(user.address)}
                        </Text>
                    </YStack>
                    <XStack className="flex items-center space-x-1.5">
                        <Text className="text-xl font-semibold text-[#111111]">
                            ${user.amount}
                        </Text>
                        <Ionicons name="pencil-sharp" size={25} color="#C1C1C1" />
                    </XStack>
                </ListItem>
            </TouchableOpacity>
        </YGroup.Item>
    );
}