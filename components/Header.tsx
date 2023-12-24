import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Header() {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexChild1}>
                <Image
                    style={styles.profileImage}
                    source={require('./../assets/nation.png')}
                />
                <Text style={styles.text}>Nation3 DAO</Text>
            </View>
            <View style={styles.flexChild2}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="chevron-down" size={35} color="#3164FA" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 56,
        paddingBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    flexChild1: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111111',
    },
    flexChild2: {},
    button: {
        width: 48,
        height: 48,
        backgroundColor: '#EEF3FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
    },
});
