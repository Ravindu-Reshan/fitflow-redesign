import React from 'react';
import { Text } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../theme/colors';
import typography from '../theme/typography';

const content = {
  privacy: ['FitFlow Prototype Privacy Policy', [
    'This prototype uses mock/local data only.',
    'It does not send personal information to a real backend.',
    'AI recommendations are simulated.',
    'Nutrition recognition is simulated.',
    'The social feed is local mock data.',
    'This prototype is for academic coursework (IT3060 HCI).']],
  release: ['FitFlow Redesign – Version 1.0.0', [
    'AI-inspired personalized workout plans',
    'Social community feed',
    'Nutrition tracking',
    'Progress dashboard',
    'Achievement and motivation features',
    'Improved navigation and user experience']],
  testing: ['Internal Frontend Testing (manual checklist)', [
    '☐ Navigation: all 5 tabs, Profile, Workout Details',
    '☐ Workout generation: Planner selections change the plan',
    '☐ Workout completion: Complete updates Progress/Profile',
    '☐ Social: like/unlike, join challenge',
    '☐ Nutrition: Log Meal, Scan Food, Add to Diary',
    '☐ Profile: personalization switch',
    '☐ Responsiveness: small and large phone sizes',
    '☐ Android emulator compatibility',
    'Note: no Firebase crash analytics or Play Console testing has been done.']],
};

export default function InfoScreen({ route }) {
  const [title, items] = content[route.params.kind];
  return (
    <Screen>
      <Text style={[typography.h1, { color: colors.text, marginBottom: 12 }]}>{title}</Text>
      <Card>{items.map((i) => <Text key={i} style={{ marginBottom: 8, color: colors.text }}>{route.params.kind === 'testing' ? i : `• ${i}`}</Text>)}</Card>
    </Screen>
  );
}
