import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { YGroup, Separator } from 'tamagui';
import { budgets } from '../utils/constants';
import { BudgetItem } from './BudgetItem';
import { CreateBudgetSheet } from './CreateBudgetSheet';
import { Ionicons } from '@expo/vector-icons';

export function BudgetSection({
    budgetCreateSheetRef,
    budgetItemSheetRef,
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Budgets</Text>
                <View>
                    <TouchableOpacity
                        style={styles.createButton}
                        onPress={() => budgetCreateSheetRef.current?.show()}
                    >
                        <Text style={styles.createButtonText}>Create</Text>
                        <Ionicons name="add" size={30} color="#6A7EB7" />
                    </TouchableOpacity>
                </View>
            </View>
            <YGroup style={styles.yGroup} alignSelf="center" size="$5" separator={<Separator />}>
                {budgets.map((budget) => (
                    <BudgetItem budget={budget} budgetItemSheetRef={budgetItemSheetRef} key={budget.key} />
                ))}
            </YGroup>
            <CreateBudgetSheet
                budgetCreateSheetRef={budgetCreateSheetRef}
                openToken={openToken}
                setOpenToken={setOpenToken}
                tokenValue={tokenValue}
                setTokenValue={setTokenValue}
                tokenItems={tokenItems}
                setTokenItems={setTokenItems}
                spenderOpen={spenderOpen}
                setSpenderOpen={setSpenderOpen}
                spenderValue={spenderValue}
                setSpenderValue={setSpenderValue}
                spenderItems={spenderItems}
                setSpenderItems={setSpenderItems}
                reoccurrenceOpen={reoccurrenceOpen}
                setReoccurrenceOpen={setReoccurrenceOpen}
                reoccurrenceValue={reoccurrenceValue}
                setReoccurrenceValue={setReoccurrenceValue}
                reoccurrenceItems={reoccurrenceItems}
                setReoccurrenceItems={setReoccurrenceItems}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingLeft: 8,
        paddingRight: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#363e4b',
    },
    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
    },
    createButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6A7EB7',
    },
    yGroup: {
        width: '100%',
        borderColor: '#E1E2E4',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#fff"
    },
});
