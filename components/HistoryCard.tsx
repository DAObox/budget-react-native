import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import truncateEthereumAddress from '../utils/functions';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'tamagui';

export function HistoryCard({ type }) {
    return (
        <Stack style={styles.container}>
            <Stack style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                <Stack style={styles.row}>
                    <Stack
                        style={[
                            styles.iconContainer,
                            {
                                backgroundColor: type === 'sent' ? '#FCF5D8' : '#F2FECF',
                                transform: type === 'sent' ? [{ rotate: '45deg' }] : [{ rotate: '-225deg' }],
                            },
                        ]}
                    >
                        <Ionicons
                            name="arrow-up"
                            size={30}
                            color={type === 'sent' ? '#723711' : '#3A620F'}
                        />
                    </Stack>
                    <Text style={styles.title}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Text>
                </Stack>
                <Stack style={styles.row}>
                    <Image
                        source={require('../assets/dai.png')}
                        resizeMode="cover"
                        style={styles.iconImage}
                    />
                    <Text style={styles.amount}>125.01 DAI</Text>
                </Stack>
            </Stack>
            <Stack style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', alignItems: "center", marginTop: 10 }}>
                <Text style={styles.date}>03/10/23</Text>
                <Stack style={styles.transactionHashContainer}>
                    <Text style={styles.label}>Txn Hash: </Text>
                    <Text style={styles.transactionHash}>
                        {truncateEthereumAddress('0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29')}
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconContainer: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#565F6D',
        marginLeft: 10,
    },
    iconImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 5,
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#404040',
    },
    date: {
        fontSize: 16,
        fontWeight: '600',
        color: '#989da8',
    },
    transactionHashContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#989da8',
    },
    transactionHash: {
        fontSize: 16,
        fontWeight: '600',
        color: '#3164fa',
    },
});