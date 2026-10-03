import React from 'react';
import { Pressable, Text } from 'react-native';
import colors from '../theme/colors';
export default function PrimaryButton({ title, onPress, style }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}
      style={({ pressed }) => [{ backgroundColor: colors.primary, padding: 14, borderRadius: 12, alignItems: 'center', opacity: pressed ? 0.7 : 1 }, style]}>
      <Text style={{ color: colors.white, fontWeight: '700', fontSize: 15 }}>{title}</Text>
    </Pressable>
  );
}
