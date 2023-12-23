import React from "react";
import { View, Text } from "react-native";
import { YGroup, Separator } from "tamagui";
import { assets } from "../utils/constants";
import { AssetItem } from "./AssetItem";

export function AssetSection() {
    return (
        <View style={{ width: "100%", paddingHorizontal: 8 }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#363e4b',
            }}>Assets</Text>
            <YGroup
                alignSelf="center"
                style={{ width: "100%", marginTop: 8 }}
                size="$5"
                separator={<Separator />}
            >
                {assets.map((asset) => (
                    <AssetItem key={asset.key} asset={asset} />
                ))}
            </YGroup>
        </View>
    );
}
