import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Body } from '@components/Base';
import MarketIcon from '@components/icons/MarketIcon';

interface FilterButtonProps {
  active?: boolean;
  text: string;
  onPress?: () => void;
}

const FilterButton = ({ text, active, onPress }: FilterButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      // tw={clsx(active && 'bg-blue-300', 'bg-white flex active:bg-blue-300')}
      style={({ pressed }) => [
        styles.button,
        (active || pressed) && styles.buttonActive,
        pressed && { opacity: 0.9 },
      ]}>
      <MarketIcon />
      <Body style={[styles.text, active && styles.textActive]}>{text}</Body>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    marginRight: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonActive: {
    backgroundColor: 'rgb(229,231,235)',
    borderColor: 'rgb(10,80,226)',
  },
  text: {
    height: 26,
    textAlignVertical: 'center',
    marginLeft: 8,
  },
  textActive: {
    color: 'rgb(10,80,226)',
  },
});

export default FilterButton;
