import React from 'react';
import { View } from 'react-native';
import colors from '../theme/colors';
export default function ProgressBar({ value }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <View style={{ height: 10, backgroundColor: colors.border, borderRadius: 5, overflow: 'hidden' }}>
      <View style={{ width: `${pct}%`, height: 10, backgroundColor: colors.primary }} />
    </View>
  );
}
