import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { BottomSheet } from "react-native-sheet";
import { Separator } from "tamagui";
import { userItems } from "../utils/constants";
import truncateEthereumAddress from "../utils/functions";
import { UserItemEditable } from "./UserItemEditable";
import { AssetItem } from "./AssetItem";

export function BudgetItemSheet({ budgetItemSheetRef }) {
    return (
        <BottomSheet
            height={700}
            ref={budgetItemSheetRef}
            sheetStyle={{
                backgroundColor: "#ffffff",
                borderTopRightRadius: 35,
                borderTopLeftRadius: 35,
                width: "100%",
                height: "fit-content",
            }}
        >
            <ScrollView key="budget-item-scroll">
                <View className="flex flex-col items-center flex-1 px-5 py-3 space-y-5">
                    <View className="flex flex-col flex-1 space-y-2.5 pt-6 items-center">
                        <Text className="text-3xl font-semibold text-[#1b1b1b]">
                            $3508.00
                        </Text>
                        <Text className="text-xl font-medium text-[#3164FA]">
                            {truncateEthereumAddress(
                                "0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29"
                            )}
                        </Text>
                    </View>
                    <View>
                        <Text className="text-2xl font-semibold text-[#a0afc8]">
                            Airdrop Distribution
                        </Text>
                    </View>
                    <View className="flex flex-col flex-1 w-full space-y-1.5">
                        <View className="flex flex-row items-center justify-between flex-1 w-full">
                            <View>
                                <Text className="text-lg font-semibold text-[#A0AFC8]">
                                    Reoccurence
                                </Text>
                            </View>
                            <View>
                                <Text className="text-lg font-semibold text-[#A0AFC8]">
                                    Monthly
                                </Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center justify-between flex-1 w-full">
                            <View>
                                <Text className="text-lg font-semibold text-[#A0AFC8]">
                                    Spender
                                </Text>
                            </View>
                            <View>
                                <Text className="text-lg font-semibold text-[#A0AFC8]">
                                    Nation3 Dao
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex-1 w-full">
                        <Separator className="w-full -mb-10" />
                    </View>
                    <View className="flex-1 w-full">
                        <AssetItem
                            asset={{
                                key: 1,
                                name: "DAI",
                                amount: 8023.2323,
                                price: 1,
                                icon: require("./../assets/dai.png"),
                            }}
                        />
                    </View>
                    <View className="flex-1 w-full">
                        <Separator className="w-full -mt-0.5" />
                    </View>
                    <View className="flex-1 w-full">
                        {userItems.map((user) => (
                            <UserItemEditable user={user} key={user.id} />
                        ))}
                    </View>
                    <View className="flex-1 w-full">
                        <TouchableOpacity className="w-full h-[52px] bg-[#3164FA] flex flex-col items-center justify-center rounded-xl -mt-1.5">
                            <Text className="text-xl font-semibold text-white">Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </BottomSheet>
    );
}