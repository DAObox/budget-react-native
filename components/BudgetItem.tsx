import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { YGroup, ListItem, YStack, XStack } from 'tamagui';
import truncateEthereumAddress from '../utils/functions';
import { BudgetItemSheet } from './BudgetItemSheet';
import { Ionicons } from '@expo/vector-icons';

export function BudgetItem({ budget, budgetItemSheetRef }) {
    return (
        <YGroup.Item style={styles.container}>
            <TouchableOpacity onPress={() => budgetItemSheetRef.current?.show()}>
                <ListItem style={styles.listItem}>
                    <YStack style={styles.textContainer}>
                        <Text style={styles.title}>{budget.name}</Text>
                        <Text style={styles.address}>{truncateEthereumAddress(budget.address)}</Text>
                    </YStack>
                    <XStack style={styles.amountContainer}>
                        <Text style={styles.amount}>${budget.amount}</Text>
                        <Ionicons name="chevron-forward" size={24} color="#E1E2E4" />
                    </XStack>
                </ListItem>
            </TouchableOpacity>
            <BudgetItemSheet budgetItemSheetRef={budgetItemSheetRef} />
        </YGroup.Item>
    );
}

const styles = {
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
        fontWeight: 600,
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
};
