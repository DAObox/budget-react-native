import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { YGroup, ListItem, YStack, XStack, Stack } from "tamagui";
import truncateEthereumAddress from "../utils/functions";
import { Ionicons } from "@expo/vector-icons";

export function UserItemEditable({ user }) {
    return (
        <YGroup.Item>
            <TouchableOpacity style={styles.touchableOpacity}>
                <ListItem style={styles.listItem}>
                    <Stack style={styles.textContainer}>
                        <Text style={styles.nameText}>{user.name}</Text>
                        <Text style={styles.addressText}>
                            {truncateEthereumAddress(user.address)}
                        </Text>
                    </Stack>
                    <Stack style={styles.iconContainer}>
                        <Text style={styles.amountText}>${user.amount}</Text>
                        <Image
                            source={require('../assets/pen.png')}
                            resizeMode="cover"
                            width={25}
                            height={25}
                        />
                    </Stack>
                </ListItem>
            </TouchableOpacity>
        </YGroup.Item>
    );
}

const styles = StyleSheet.create({
    touchableOpacity: {
        flex: 1,
        width: "100%",
        marginBottom: 10,
    },
    listItem: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 0,
        paddingTop: 0,
        paddingBottom: 3,
        backgroundColor: "white",
        borderRadius: 8,
    },
    textContainer: {
        flexDirection: "column",
        spacing: 0.5,
    },
    nameText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#939393",
    },
    addressText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#3164FA",
        marginTop: 6,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    amountText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#363E4B",
        marginRight: 3,
    },
});
