import React from 'react';
import { View, Image, Text } from 'react-native';
import truncateEthereumAddress from '../utils/functions';
import { Stack } from 'tamagui';

export function QueueCard() {
    return (
        <Stack style={{
            marginTop: 15,
            shadowColor: '#000',
            shadowRadius: 0.15,
        }}>
            <Stack
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingHorizontal: 13.75,
                    paddingTop: 10.5,
                    paddingBottom: 17.5,
                    borderBottomColor: "#D9FCFA",
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Stack style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                    <Stack style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/dai.png')}
                            resizeMode="cover"
                            style={{ width: 32, height: 32, borderRadius: 4.5, marginRight: 2.5 }}
                        />
                        <Text style={{ fontSize: 24, fontWeight: '600', color: '#111111', marginLeft: 3.5 }}>2300 DAI</Text>
                    </Stack>
                    <Stack>
                        <Text style={{ fontWeight: '500', color: '#989da8', fontSize: 20 }}>03/10/23</Text>
                    </Stack>
                </Stack>
                <Stack style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ fontWeight: '600', color: '#565F6D', fontSize: 18 }}>Bounty Payout</Text>
                    <Stack style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '500', color: '#989da8', fontSize: 18 }}>Txn Hash: </Text>
                        <Text style={{ fontWeight: '500', color: '#3164fa', fontSize: 18 }}>
                            {truncateEthereumAddress('0xA3Db2Cb625bAe87D12AD769C47791a04BA1e5b29')}
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                style={{
                    backgroundColor: '#D9FCFA',
                    flexDirection: 'row',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    padding: 10,
                }}
            >
                <Text style={{ fontSize: 16, color: '#1F2E65', textAlign: 'center', fontWeight: 'bold' }}>
                    Awaiting Confirmation
                </Text>
            </Stack>
        </Stack>
    );
}
