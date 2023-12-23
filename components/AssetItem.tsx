import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";

export function AssetItem({ asset }) {
    return (
        <View style={{ flex: 1, width: "100%", backgroundColor: "transparent" }}>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", paddingHorizontal: 0, backgroundColor: "transparent", width: "100%" }}>
                    <View style={{ flex: 1, width: "100%", flexDirection: "row", paddingVertical: 16 }}>
                        <Image
                            source={asset.icon}
                            resizeMode="cover"
                            style={{ width: 48, height: 48, borderRadius: 24, marginRight: 3 }}
                        />
                        <View style={{ flexDirection: "column", justifyContent: "space-between", marginLeft: 6 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#565f6d" }}>
                                {asset.name}
                            </Text>
                            <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 3 }}>
                                <Text style={{ fontSize: 14, fontWeight: "600", color: "#989DA8", marginRight: 6 }}>
                                    {asset.amount}
                                </Text>
                                <View style={{ width: 4, height: 4, backgroundColor: "#989DA8", marginRight: 6 }} />
                                <Text style={{ fontSize: 14, fontWeight: "600", color: "#989DA8" }}>
                                    ${asset.price}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginLeft: 6 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#111111" }}>
                            ${asset.amount * asset.price}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
