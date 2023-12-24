import React from 'react';
import { View, Text } from 'react-native';
import { QueueCard } from './QueueCard';

export function QueueSection() {
    return (
        <View style={{ flex: 1, padding: 0, marginTop: 15, paddingTop: 2.5, paddingBottom: 0 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#363e4b' }}>Queue</Text>
            <QueueCard />
        </View>
    );
}
