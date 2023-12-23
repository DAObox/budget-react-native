import React from "react";
import { View, Image, Text } from "react-native";
import truncateEthereumAddress from "../utils/functions";
import { Ionicons } from "@expo/vector-icons";

export function HistoryCard({ type }) {
    return (
        <View className="flex flex-col space-y-1.5 py-3.5">
            <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center space-x-2">
                    <View
                        className={`h-12 w-12 flex flex-col items-center justify-center ${type == "sent" ? "bg-[#FCF5D8] " : "bg-[#F2FECF]"
                            } rounded-full transform ${type == "sent" ? "rotate-45" : "rotate-[225deg]"
                            }`}
                    >
                        <Ionicons
                            name="arrow-up"
                            size={30}
                            color={type == "sent" ? "#723711" : "#3A620F"}
                        />
                    </View>
                    <Text className="text-xl font-semibold text-[#565F6D]">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Text>
                </View>
                <View className="flex flex-row items-center">
                    <Image
                        source={require("../assets/dai.png")}
                        resizeMode="cover"
                        className="w-8 h-8 rounded-full mr-1.5"
                    />
                    <Text className="text-xl font-semibold text-[#404040]">
                        125.01 DAI
                    </Text>
                </View>
            </View>
            <View className="flex flex-row items-center justify-between">
                <View>
                    <Text className="font-medium text-[#989da8] text-lg">03/10/23</Text>
                </View>
                <View className="flex flex-row items-center">
                    <Text className="font-medium text-[#989da8] text-lg">Txn Hash: </Text>
                    <Text className="font-medium text-[#3164fa] text-lg">
                        {truncateEthereumAddress(
                            "0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29"
                        )}
                    </Text>
                </View>
            </View>
        </View>
    );
}