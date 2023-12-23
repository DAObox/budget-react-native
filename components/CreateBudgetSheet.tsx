import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { BottomSheet } from "react-native-sheet";
import { YStack, Label, Input } from "tamagui";

export function CreateBudgetSheet({
    budgetCreateSheetRef,
    openToken,
    setOpenToken,
    tokenValue,
    setTokenValue,
    tokenItems,
    setTokenItems,
    spenderOpen,
    setSpenderOpen,
    spenderValue,
    setSpenderValue,
    spenderItems,
    setSpenderItems,
    reoccurrenceOpen,
    setReoccurrenceOpen,
    reoccurrenceValue,
    setReoccurrenceValue,
    reoccurrenceItems,
    setReoccurrenceItems,
}) {
    return (
        <BottomSheet
            height={750}
            ref={budgetCreateSheetRef}
            sheetStyle={{
                backgroundColor: "#ffffff",
                borderTopRightRadius: 35,
                borderTopLeftRadius: 35,
                width: "100%",
                height: "fit-content",
            }}
        >
            <ScrollView key="budget-sheet-scroll">
                <YStack className="flex-1">
                    <View className="flex flex-col items-center flex-1 p-6 space-y-6">
                        <Text className="text-3xl font-semibold text-[#1b1b1b]">
                            Create Budget
                        </Text>
                        <View className="flex flex-col w-full space-y-5">
                            <View className="space-y-2">
                                <Label
                                    className="text-xl font-bold text-[#1b1b1b]"
                                    htmlFor="name"
                                >
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Budget name"
                                    color="#1b1b1b"
                                    backgroundColor="#ffffff"
                                    height={52}
                                    placeholderTextColor="#7E8492"
                                />
                            </View>
                            <View className="flex-1 space-y-2" style={{ zIndex: 2500 }}>
                                <Label
                                    className="text-xl font-bold text-[#1b1b1b]"
                                    htmlFor="token"
                                >
                                    Token
                                </Label>
                                <DropDownPicker
                                    open={openToken}
                                    items={tokenItems}
                                    setOpen={setOpenToken}
                                    setValue={setTokenValue}
                                    setItems={setTokenItems}
                                    value={tokenValue}
                                    theme="LIGHT"
                                    multiple={false}
                                    onSelectItem={setTokenValue}
                                    placeholder={tokenValue?.label}
                                    className="border-[1.5px] border-[#EDEDED] h-[52px]"
                                    placeholderStyle={{
                                        color: "#7E8492",
                                    }}
                                    dropDownContainerStyle={{
                                        borderColor: "#EDEDED",
                                        borderWidth: 1.5,
                                        backgroundColor: "#ffffff",
                                    }}
                                    dropDownDirection="BOTTOM"
                                />
                            </View>
                            <View className="space-y-2">
                                <Label
                                    className="text-xl font-bold text-[#1b1b1b]"
                                    htmlFor="amount"
                                >
                                    Amount
                                </Label>
                                <Input
                                    id="amount"
                                    placeholder="Amount of token"
                                    color="#1b1b1b"
                                    backgroundColor="#ffffff"
                                    height={52}
                                    keyboardType="numeric"
                                    placeholderTextColor="#7E8492"
                                />
                            </View>
                            <View className="flex-1 space-y-2" style={{ zIndex: 2000 }}>
                                <Label
                                    className="text-xl font-bold text-[#1b1b1b]"
                                    htmlFor="spender"
                                >
                                    Spender
                                </Label>
                                <DropDownPicker
                                    open={spenderOpen}
                                    items={spenderItems}
                                    setOpen={setSpenderOpen}
                                    setValue={setSpenderValue}
                                    setItems={setSpenderItems}
                                    value={spenderValue}
                                    theme="LIGHT"
                                    multiple={false}
                                    onSelectItem={setSpenderValue}
                                    placeholder={spenderValue?.label}
                                    className="border-[1.5px] border-[#EDEDED] h-[52px]"
                                    placeholderStyle={{
                                        color: "#7E8492",
                                    }}
                                    dropDownContainerStyle={{
                                        borderColor: "#EDEDED",
                                        borderWidth: 1.5,
                                        backgroundColor: "#ffffff",
                                    }}
                                    searchPlaceholder="Select a spender"
                                    dropDownDirection="BOTTOM"
                                />
                            </View>
                            <View className="flex-1 space-y-2" style={{ zIndex: 1500 }}>
                                <Label
                                    className="text-xl font-bold text-[#1b1b1b]"
                                    htmlFor="reoccurence"
                                >
                                    Reoccurence
                                </Label>
                                <DropDownPicker
                                    open={reoccurrenceOpen}
                                    items={reoccurrenceItems}
                                    setOpen={setReoccurrenceOpen}
                                    setValue={setReoccurrenceValue}
                                    setItems={setReoccurrenceItems}
                                    value={reoccurrenceValue}
                                    theme="LIGHT"
                                    multiple={false}
                                    onSelectItem={setReoccurrenceValue}
                                    placeholder={reoccurrenceValue?.label}
                                    className="border-[1.5px] border-[#EDEDED] h-[52px]"
                                    placeholderStyle={{
                                        color: "#7E8492",
                                    }}
                                    dropDownContainerStyle={{
                                        borderColor: "#EDEDED",
                                        borderWidth: 1.5,
                                        backgroundColor: "#ffffff",
                                    }}
                                    dropDownDirection="BOTTOM"
                                />
                            </View>
                            <TouchableOpacity className="w-full h-[52px] bg-[#3164FA] flex flex-col items-center justify-center rounded-xl">
                                <Text className="text-xl font-semibold text-white">Create</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </YStack>
            </ScrollView>
        </BottomSheet>
    );
}