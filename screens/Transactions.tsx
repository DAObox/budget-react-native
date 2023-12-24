import React from 'react';
import { ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { QueueSection } from '../components/QueueSection';
import { HistorySection } from '../components/HistorySection';

export default function Transactions() {
  const width = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: '#F8F8F8' }} key="transactions-scroll">
        <View style={{ flex: 1, width: '100%', paddingHorizontal: 20, paddingVertical: 5 }}>
          <QueueSection />
          <HistorySection />
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 20, padding: 20 }}>
        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: '#3164FA',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9999,
            transform: [{ rotate: '-45deg' }],
          }}
          activeOpacity={0.925}
        >
          <Ionicons name="send-outline" size={width > 375 ? 35 : 25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
