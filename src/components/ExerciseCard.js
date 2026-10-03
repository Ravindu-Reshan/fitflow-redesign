import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
import colors from '../theme/colors';

export default function ExerciseCard({ ex, done, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Card style={{ flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: done ? colors.primaryLight : colors.card }}>
        <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: done ? colors.white : colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
          <Ionicons
            name={done ? 'checkmark-circle' : 'barbell-outline'}
            size={24}
            color={done ? colors.success : colors.primary}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', color: colors.text }}>{ex.name}</Text>
          <Text style={{ color: colors.muted, fontSize: 13 }}>{ex.amount} · {ex.difficulty}</Text>
          <Text style={{ color: colors.muted, fontSize: 13 }}>Targets: {ex.muscles}</Text>
        </View>
      </Card>
    </Pressable>
  );
}
