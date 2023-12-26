import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { YGroup, ListItem, Stack } from 'tamagui';
import truncateEthereumAddress from '../utils/functions';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import BudgetItemSheet from './BudgetItemSheet';

export function BudgetItem({ budget, budgetItemSheetRef }) {
    return (
        <YGroup.Item>
            <TouchableOpacity onPress={() => budgetItemSheetRef.current?.show()}>
                <ListItem style={styles.listItem}>
                    <Stack style={styles.textContainer}>
                        <Text style={styles.title}>{budget.name}</Text>
                        <Text style={styles.address}>{truncateEthereumAddress(budget.address)}</Text>
                    </Stack>
                    <Stack style={styles.amountContainer}>
                        <Text style={styles.amount}>${budget.amount}</Text>
                        <Ionicons name="chevron-forward" size={24} color="#E1E2E4" />
                    </Stack>
                </ListItem>
            </TouchableOpacity>
            <BudgetItemSheet budgetItemSheetRef={budgetItemSheetRef} />
        </YGroup.Item>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 8,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 2.5,
        paddingBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#565f6d',
    },
    address: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#3164FA',
        marginTop: 5,
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111111',
    },
});
