import React from 'react';
import { View } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
export default function Card({ children, style }) {
  return <View style={[{ backgroundColor: colors.card, borderRadius: spacing.radius, padding: spacing.md, marginBottom: spacing.md, borderWidth: 1, borderColor: colors.border }, style]}>{children}</View>;
}
