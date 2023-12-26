import React from "react";
import { Dimensions } from "react-native";
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { BottomSheet } from "react-native-sheet";
import { Label, Input } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

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
            sheetStyle={styles.sheet}
        >
            <ScrollView key="budget-sheet-scroll">
                <View style={styles.container}>
                    <Text style={styles.title}>Create Budget</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <Label style={styles.label} htmlFor="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                placeholder="Budget name"
                                style={styles.input}
                                placeholderTextColor="#7E8492"
                            />
                        </View>
                        <View style={[styles.inputContainer, { zIndex: 2500 }]}>
                            <Label style={styles.label} htmlFor="token">
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
                                style={styles.pickerContainer}
                                placeholderStyle={{ color: "#7E8492" }}
                                dropDownContainerStyle={styles.pickerDropDownContainer}
                                dropDownDirection="BOTTOM"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Label style={styles.label} htmlFor="amount">
                                Amount
                            </Label>
                            <Input
                                id="amount"
                                placeholder="Amount of token"
                                style={styles.input}
                                keyboardType="numeric"
                                placeholderTextColor="#7E8492"
                            />
                        </View>
                        <View style={[styles.inputContainer, { zIndex: 2000 }]}>
                            <Label style={styles.label} htmlFor="spender">
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
                                style={styles.pickerContainer}
                                placeholderStyle={{ color: "#7E8492" }}
                                dropDownContainerStyle={styles.pickerDropDownContainer}
                                searchPlaceholder="Select a spender"
                                dropDownDirection="BOTTOM"
                            />
                        </View>
                        <View style={[styles.inputContainer, { zIndex: 1500 }]}>
                            <Label style={styles.label} htmlFor="reoccurrence">
                                Reoccurrence
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
                                style={styles.pickerContainer}
                                placeholderStyle={{ color: "#7E8492" }}
                                dropDownContainerStyle={styles.pickerDropDownContainer}
                                dropDownDirection="BOTTOM"
                            />
                        </View>
                        <TouchableOpacity style={styles.createButton}>
                            <Text style={styles.createButtonText}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </BottomSheet>
    );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    sheet: {
        backgroundColor: "#ffffff",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        width: "100%",
        height: screenHeight * 0.775
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        spacing: 6,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1b1b1b",
        marginBottom: 12,
    },
    formContainer: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },
    inputContainer: {
        flexDirection: "column",
        marginBottom: 12,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1b1b1b",
    },
    input: {
        height: 52,
        backgroundColor: "#ffffff",
        color: "#1b1b1b",
        borderWidth: 1.5,
        borderColor: "#EDEDED",
        borderRadius: 8,
        padding: 10,
    },
    pickerContainer: {
        height: 52,
        borderWidth: 1.5,
        borderColor: "#EDEDED",
        borderRadius: 8,
        backgroundColor: "#ffffff",
    },
    pickerDropDownContainer: {
        borderColor: "#EDEDED",
        borderWidth: 1.5,
        backgroundColor: "#ffffff",
    },
    createButton: {
        width: "100%",
        height: 52,
        backgroundColor: "#3164FA",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 10,
    },
    createButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
});
