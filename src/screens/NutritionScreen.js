import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import ProgressBar from '../components/ProgressBar';
import NutritionCard from '../components/NutritionCard';
import SectionHeader from '../components/SectionHeader';
import { goals, meals as initial, scanResult, sampleMeals } from '../data/mockNutrition';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function NutritionScreen() {
  const [meals, setMeals] = useState(initial);
  const [scan, setScan] = useState(null);
  const [n, setN] = useState(0);
  const sum = (k) => meals.reduce((s, m) => s + m[k], 0);
  const add = (m) => setMeals([...meals, { ...m, id: String(Date.now()) }]);
  const logMeal = () => { add(sampleMeals[n % sampleMeals.length]); setN(n + 1); };
  return (
    <Screen>
      <Text style={[typography.h1, { color: colors.text, marginBottom: 12 }]}>Nutrition</Text>
      <Card>
        <Text style={{ fontWeight: '700' }}>Today's calories: {sum('calories')} / {goals.calories} kcal</Text>
        <ProgressBar value={sum('calories') / goals.calories} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text>Protein {sum('protein')}g</Text><Text>Carbs {sum('carbs')}g</Text><Text>Fat {sum('fat')}g</Text>
        </View>
      </Card>
      <PrimaryButton title="+ Log Meal" onPress={logMeal} style={{ paddingVertical: 18, marginBottom: 10 }} />
      <SecondaryButton title="📷 Scan Food" onPress={() => setScan(scanResult)} style={{ marginBottom: 12 }} />
      {scan && (
        <Card style={{ backgroundColor: colors.primaryLight }}>
          <Text style={{ fontWeight: '700' }}>Food recognized: {scan.name}</Text>
          <Text>Estimated calories: {scan.calories} kcal</Text>
          <Text style={{ color: colors.muted, marginVertical: 4 }}>(Simulated recognition)</Text>
          <View style={{ flexDirection: 'row' }}>
            <PrimaryButton title="Add to Diary" onPress={() => { add(scan); setScan(null); }} style={{ flex: 1, marginRight: 8 }} />
            <SecondaryButton title="Edit" onPress={() => setScan({ ...scan, calories: scan.calories - 50, name: scan.name + ' (smaller portion)' })} style={{ flex: 1 }} />
          </View>
        </Card>
      )}
      <SectionHeader title="Meals" />
      {meals.map((m) => <NutritionCard key={m.id} meal={m} />)}
      <Text style={{ color: colors.muted, fontSize: 12, marginTop: 8 }}>Nutrition estimates are for general tracking only and are not medical advice.</Text>
    </Screen>
  );
}
