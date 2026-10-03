import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';

export default function Screen({ children }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }} edges={['top']}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }}>{children}</ScrollView>
    </SafeAreaView>
  );
}
