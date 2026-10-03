import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import colors from '../theme/colors';

export default function WorkoutCard({ workout, label, onStart, onWhy }) {
  return (
    <Card style={{ backgroundColor: colors.dark }}>
      <Text style={{ color: colors.primaryLight, fontWeight: '700' }}>{label}</Text>
      <Text style={{ color: colors.white, fontSize: 22, fontWeight: '800', marginVertical: 4 }}>{workout.title}</Text>
      <Text style={{ color: colors.border }}>⏱ {workout.duration} min · {workout.difficulty} · 🔥 ~{workout.calories} kcal</Text>
      <Text style={{ color: colors.border, marginBottom: 12 }}>Muscles: {workout.muscles}</Text>
      <View style={{ flexDirection: 'row' }}>
        <SecondaryButton title="Why this plan?" onPress={onWhy} style={{ flex: 1, marginRight: 8, backgroundColor: colors.white }} />
        <PrimaryButton title="Start Workout" onPress={onStart} style={{ flex: 1 }} />
      </View>
    </Card>
  );
}
