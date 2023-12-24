import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { YGroup, Separator } from 'tamagui';
import { HistoryCard } from './HistoryCard';
import { history } from '../utils/constants';

export function HistorySection() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
            <YGroup separator={<Separator />}>
                {history.map((historyItem) => (
                    <HistoryCard type={historyItem.type} key={historyItem.id} />
                ))}
            </YGroup>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#363e4b',
    },
});
