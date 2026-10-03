import React from 'react';
import { Text } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';
export default function SectionHeader({ title }) {
  return <Text style={[typography.h2, { color: colors.text, marginVertical: 8 }]}>{title}</Text>;
}
