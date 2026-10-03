import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
import colors from '../theme/colors';

export default function StatCard({ icon, label, value, highlight }) {
  return (
    <Card style={[{ flex: 1, marginHorizontal: 4, alignItems: 'center', padding: 12 }, highlight && { borderColor: colors.accent, borderWidth: 1.5 }]}>
      <Ionicons name={icon} size={24} color={highlight ? colors.accent : colors.primary} />
      <Text style={{ fontSize: 18, fontWeight: '700', color: highlight ? colors.accent : colors.text, marginTop: 4 }}>{value}</Text>
      <Text style={{ fontSize: 12, color: colors.muted }}>{label}</Text>
    </Card>
  );
}
