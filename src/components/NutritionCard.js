import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import colors from '../theme/colors';

export default function NutritionCard({ meal }) {
  return (
    <Card style={{ padding: 12 }}>
      <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 12 }}>{meal.type.toUpperCase()}</Text>
      <Text style={{ fontWeight: '700', color: colors.text }}>{meal.name}</Text>
      <Text style={{ color: colors.muted, fontSize: 13 }}>{meal.calories} kcal · P {meal.protein}g · C {meal.carbs}g · F {meal.fat}g</Text>
    </Card>
  );
}
