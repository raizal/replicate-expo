import { styled } from 'nativewind';
import { Text as RNText, View as RNView } from 'react-native';
import Reanimated from 'react-native-reanimated';

export const Flex = styled(RNView, 'flex');
export const Text = styled(RNText, '');
export const Body = styled(Text, 'font-normal font-regular text-sm text-neutral-700');
export const Heading = styled(Text, 'font-semibold text-lg text-neutral-900');
export const Price = styled(Reanimated.Text, 'font-[600] text-lg text-neutral-900');
export const PriceChangeText = styled(Text, 'font-semibold text-sm text-neutral-700 transition');
