import { ListItem, ScrollView, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Dimensions } from "react-native";
import { HistorySection } from "../components/HistorySection";
import { QueueSection } from "../components/QueueSection";

export default function Transactions() {
  const width = Dimensions.get("window").width;
  return (
    <View className="flex-1">
      <ScrollView className="bg-[#F8F8F8]" key="transactions-scroll">
        <YStack className="flex-col flex-1 w-full px-5 space-y-5">
          <ListItem className="flex-1 px-0 pt-2.5 pb-0">
            <QueueSection />
          </ListItem>
          <ListItem className="flex-1 px-0 pt-5">
            <HistorySection />
          </ListItem>
        </YStack>
      </ScrollView>
      <View className="absolute bottom-0 right-0 z-20 p-5">
        <TouchableOpacity
          className="p-5 bg-[#3164FA] flex flex-col items-center justify-center rounded-full transform -rotate-45"
          activeOpacity={0.925}
        >
          <Ionicons
            name="send-outline"
            size={width > 375 ? 35 : 25}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
