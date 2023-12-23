import { View, Image, Text } from "react-native";
import truncateEthereumAddress from "../utils/functions";

export function QueueCard() {
    return (
        <View className="pt-4">
            <View className="flex flex-col flex-1 bg-white rounded-x-lg rounded-t-lg border-[0.2px] border-[#989DA8]/40 px-3.5 pt-3 pb-5 space-y-3.5">
                <View className="flex flex-row justify-between">
                    <View className="flex flex-row items-center">
                        <Image
                            source={require("../assets/dai.png")}
                            resizeMode="cover"
                            className="w-8 h-8 rounded-full mr-1.5"
                        />
                        <Text className="text-3xl font-semibold text-[#111111]">
                            2300 DAI
                        </Text>
                    </View>
                    <View>
                        <Text className="font-medium text-[#989da8] text-xl">03/10/23</Text>
                    </View>
                </View>
                <View className="flex flex-row items-center justify-between">
                    <Text className="font-semibold text-[#565F6D] text-lg">
                        Bounty Payout
                    </Text>
                    <View className="flex flex-row items-center">
                        <Text className="font-medium text-[#989da8] text-lg">
                            Txn Hash:{" "}
                        </Text>
                        <Text className="font-medium text-[#3164fa] text-lg">
                            {truncateEthereumAddress(
                                "0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29"
                            )}
                        </Text>
                    </View>
                </View>
            </View>
            <View className="bg-[#D9FCFA] flex flex-row rounded-b-lg justify-center w-full items-center p-2.5">
                <Text className="text-base text-[#1F2E65] text-center font-semibold">
                    Awaiting Confirmation
                </Text>
            </View>
        </View>
    );
}