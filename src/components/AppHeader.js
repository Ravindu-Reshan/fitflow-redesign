import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

export default function AppHeader({ navigation }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
      <Text style={{ fontSize: 26, fontWeight: '800', color: colors.primary }}>FitFlow</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable accessibilityLabel="Notifications" style={{ padding: 8 }}>
          <Ionicons name="notifications-outline" size={24} color={colors.text} />
        </Pressable>
        <Pressable accessibilityLabel="Profile" style={{ padding: 8 }} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={28} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
}
