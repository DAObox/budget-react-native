import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import truncateEthereumAddress from '../utils/functions';

export function BalanceCard() {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <Image
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    source={require('./../assets/chart-vector.png')}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.largeText}>56,000.73 USD</Text>
                        <Text style={styles.mediumText}>
                            {truncateEthereumAddress('0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29')}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Polygon</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8
    },
    backgroundContainer: {
        backgroundColor: '#3164fa',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
        flex: 1,
        width: '100%',
        position: 'relative',
    },
    backgroundImage: {
        flex: 1,
        bottom: 0,
        left: 0,
        position: 'absolute',
        zIndex: 20,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    largeText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    mediumText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },
    infoContainer: {
        backgroundColor: '#d2deff',
        flexDirection: 'row',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    infoText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3164fa',
        textAlign: 'center',
    },
});
