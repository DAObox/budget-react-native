import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Stack } from 'tamagui';
import { tokens, spenders, reoccurrences } from '../utils/constants';
import { AssetSection } from '../components/AssetSection';
import { BalanceCard } from '../components/BalanceCard';
import { BudgetSection } from '../components/BudgetSection';

const Home = () => {
  const budgetCreateSheetRef = useRef(null);
  const budgetItemSheetRef = useRef(null);

  const [openToken, setOpenToken] = useState(false);
  const [tokenValue, setTokenValue] = useState(null);
  const [tokenItems, setTokenItems] = useState(tokens);

  const [spenderOpen, setSpenderOpen] = useState(false);
  const [spenderValue, setSpenderValue] = useState(null);
  const [spenderItems, setSpenderItems] = useState(spenders);

  const [reoccurrenceOpen, setReoccurrenceOpen] = useState(false);
  const [reoccurrenceValue, setReoccurrenceValue] = useState(null);
  const [reoccurrenceItems, setReoccurrenceItems] = useState(reoccurrences);

  return (
    <ScrollView style={{ backgroundColor: '#F8F8F8' }}>
      <Stack style={styles.container}>
        <ListItem style={styles.balanceCardContainer}>
          <BalanceCard />
        </ListItem>
        <ListItem style={styles.budgetSectionContainer}>
          <BudgetSection
            budgetCreateSheetRef={budgetCreateSheetRef}
            budgetItemSheetRef={budgetItemSheetRef}
            openToken={openToken}
            setOpenToken={setOpenToken}
            tokenValue={tokenValue}
            setTokenItems={setTokenItems}
            tokenItems={tokenItems}
            setTokenValue={setTokenValue}
            spenderOpen={spenderOpen}
            setSpenderOpen={setSpenderOpen}
            spenderValue={spenderValue}
            setSpenderValue={setSpenderValue}
            setSpenderItems={setSpenderItems}
            spenderItems={spenderItems}
            reoccurrenceOpen={reoccurrenceOpen}
            setReoccurrenceOpen={setReoccurrenceOpen}
            reoccurrenceValue={reoccurrenceValue}
            setReoccurrenceValue={setReoccurrenceValue}
            setReoccurrenceItems={setReoccurrenceItems}
            reoccurrenceItems={reoccurrenceItems}
          />
        </ListItem>
        <ListItem style={styles.assetSectionContainer}>
          <AssetSection />
        </ListItem>
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  balanceCardContainer: {
    width: '100%',
    height: '100%',
    maxHeight: 200,
    paddingHorizontal: 0,
  },
  budgetSectionContainer: {
    width: '100%',
    paddingHorizontal: 0,
  },
  assetSectionContainer: {
    width: '100%',
    paddingHorizontal: 0,
  },
});

export default Home;
