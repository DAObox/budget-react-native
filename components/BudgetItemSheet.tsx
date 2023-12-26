import React from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { Separator } from 'tamagui';
import truncateEthereumAddress from '../utils/functions';
import { UserItemEditable } from './UserItemEditable';
import { AssetItem } from './AssetItem';
import { BottomSheet } from 'react-native-sheet';
import { userItems } from '../utils/constants';

const BudgetItemSheet = ({ budgetItemSheetRef }) => {
    return (
        <BottomSheet
            height={700}
            ref={budgetItemSheetRef}
            sheetStyle={styles.bottomSheet}
        >
            <ScrollView key="budget-item-scroll">
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.amount}>$3508.00</Text>
                        <Text style={styles.address}>
                            {truncateEthereumAddress('0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29')}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.distributionTitle}>Airdrop Distribution</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailLabel}>Reoccurrence</Text>
                            <Text style={styles.detailValue}>Monthly</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailLabel}>Spender</Text>
                            <Text style={styles.detailValue}>Nation3 Dao</Text>
                        </View>
                    </View>
                    <View style={styles.separatorContainer}>
                        <Separator style={styles.separator} />
                    </View>
                    <View style={styles.assetContainer}>
                        <AssetItem
                            asset={{
                                key: 1,
                                name: 'DAI',
                                amount: 8023.2323,
                                price: 1,
                                icon: require('./../assets/dai.png'),
                            }}
                        />
                    </View>
                    <View style={styles.separatorContainer1}>
                        <Separator style={styles.separatorVertical} />
                    </View>
                    <View style={styles.userItemsContainer}>
                        {userItems.map((user) => (
                            <UserItemEditable user={user} key={user.id} />
                        ))}
                    </View>
                    <View style={styles.payButtonContainer}>
                        <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payButtonText}>Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </BottomSheet>
    );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    bottomSheet: {
        backgroundColor: '#ffffff',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        width: '100%',
        height: screenHeight * 0.7
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 3,
        justifyContent: 'space-between',
    },
    header: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 24,
    },
    amount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1b1b1b',
    },
    address: {
        fontSize: 18,
        fontWeight: '500',
        color: '#3164FA',
        marginTop: 8,
    },
    distributionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a0afc8',
        marginTop: 16,
    },
    detailsContainer: {
        flex: 1,
        width: '100%',
        marginTop: 24,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#C4CBD6',
        marginBottom: 8,
    },
    detailValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A0AFC8',
    },
    separatorContainer: {
        flex: 1,
        width: '100%',
        marginTop: 16,
    },
    separatorContainer1: {
        flex: 1,
        width: '100%',
        marginTop: 4,
    },
    separator: {
        width: '100%',
    },
    separatorVertical: {
        width: '100%',
    },
    assetContainer: {
        flex: 1,
        width: '100%',
        marginTop: 4,
    },
    userItemsContainer: {
        flex: 1,
        width: '100%',
        marginTop: 16,
    },
    payButtonContainer: {
        flex: 1,
        width: '100%',
        marginTop: 10,
    },
    payButton: {
        width: '100%',
        height: 52,
        backgroundColor: '#3164FA',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    payButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default BudgetItemSheet;
