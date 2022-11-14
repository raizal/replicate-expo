import { styled } from 'nativewind';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import CurrencyList from '@modules/home/components/CurrencyList';
import FilterButton from '@modules/home/components/FilterButton';
import { useHome } from '@modules/home/screens/useHome';

const Container = styled(SafeAreaView);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  scrollview: {
    backgroundColor: 'white',
    paddingBottom: 12,
  },
});

const Home = () => {
  const {
    currencyPrices = [],
    isLoadingPriceChanges,
    refetch,
    dateRange,
    switchDateRange,
  } = useHome();

  return (
    <Container tw={`flex-1 mt-[${StatusBar.currentHeight}]`}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scrollview}>
        <FilterButton
          active={dateRange === 'daily'}
          text="daily"
          onPress={() => switchDateRange('daily')}
        />
        <FilterButton
          active={dateRange === 'weekly'}
          text="weekly"
          onPress={() => switchDateRange('weekly')}
        />
        <FilterButton
          active={dateRange === 'monthly'}
          text="monthly"
          onPress={() => switchDateRange('monthly')}
        />
        <FilterButton
          active={dateRange === 'yearly'}
          text="yearly"
          onPress={() => switchDateRange('yearly')}
        />
      </ScrollView>
      <CurrencyList
        onRefresh={() => refetch()}
        items={currencyPrices}
        dateRange={dateRange}
        refreshing={currencyPrices.length > 0 && isLoadingPriceChanges}
      />
    </Container>
  );
};

export default Home;
