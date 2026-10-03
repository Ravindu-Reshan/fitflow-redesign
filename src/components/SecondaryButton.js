import React from 'react';
import { Pressable, Text } from 'react-native';
import colors from '../theme/colors';
export default function SecondaryButton({ title, onPress, style }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}
      style={({ pressed }) => [{ borderColor: colors.primary, borderWidth: 2, padding: 12, borderRadius: 12, alignItems: 'center', opacity: pressed ? 0.6 : 1 }, style]}>
      <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 15 }}>{title}</Text>
    </Pressable>
  );
}
