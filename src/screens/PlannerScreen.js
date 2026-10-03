import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import ExerciseCard from '../components/ExerciseCard';
import SectionHeader from '../components/SectionHeader';
import WhyModal from '../components/WhyModal';
import { useApp } from '../state/AppState';
import { generatePlan } from '../data/mockWorkouts';
import colors from '../theme/colors';
import typography from '../theme/typography';

const options = {
  goal: ['Weight management', 'Strength', 'Flexibility', 'General fitness'],
  level: ['Beginner', 'Intermediate', 'Advanced'],
  equipment: ['No equipment', 'Dumbbells', 'Resistance bands'],
  time: [10, 20, 30, 45],
  energy: ['Low', 'Medium', 'High'],
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

function Chips({ label, items, selected, onSelect, multi }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ fontWeight: '700', marginBottom: 6 }}>{label}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {items.map((it) => {
          const on = multi ? selected.includes(it) : selected === it;
          return (
            <Pressable key={String(it)} onPress={() => onSelect(it)}
              style={({ pressed }) => ({ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, marginRight: 8, marginBottom: 8, backgroundColor: on ? colors.primary : colors.card, borderWidth: 1, borderColor: on ? colors.primary : colors.border, opacity: pressed ? 0.7 : 1 })}>
              <Text style={{ color: on ? colors.white : colors.text }}>{typeof it === 'number' ? `${it} min` : it}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function PlannerScreen({ navigation }) {
  const { plan, setPlan } = useApp();
  const [sel, setSel] = useState({ goal: 'General fitness', level: 'Beginner', equipment: 'No equipment', time: 20, energy: 'Medium', days: ['Mon', 'Wed', 'Fri'] });
  const [generated, setGenerated] = useState(false);
  const [why, setWhy] = useState(false);
  const set = (k) => (v) => setSel({ ...sel, [k]: v });
  const toggleDay = (d) => setSel({ ...sel, days: sel.days.includes(d) ? sel.days.filter((x) => x !== d) : [...sel.days, d] });
  return (
    <Screen>
      <Text style={[typography.h1, { color: colors.text, marginBottom: 12 }]}>AI Workout Planner</Text>
      <Card>
        <Chips label="Fitness goal" items={options.goal} selected={sel.goal} onSelect={set('goal')} />
        <Chips label="Experience" items={options.level} selected={sel.level} onSelect={set('level')} />
        <Chips label="Equipment" items={options.equipment} selected={sel.equipment} onSelect={set('equipment')} />
        <Chips label="Available time" items={options.time} selected={sel.time} onSelect={set('time')} />
        <Chips label="Energy level" items={options.energy} selected={sel.energy} onSelect={set('energy')} />
        <Chips label="Preferred days" items={options.days} selected={sel.days} onSelect={toggleDay} multi />
        <PrimaryButton title="Generate My Plan" onPress={() => { setPlan(generatePlan(sel)); setGenerated(true); }} />
      </Card>
      {generated && (
        <>
          <SectionHeader title="Your Personalized Plan" />
          <Text style={{ color: colors.muted, marginBottom: 8 }}>{plan.title} · {plan.duration} min · ~{plan.calories} kcal</Text>
          {plan.exercises.map((e) => <ExerciseCard key={e.id} ex={e} />)}
          <View style={{ flexDirection: 'row' }}>
            <SecondaryButton title="Why this plan?" onPress={() => setWhy(true)} style={{ flex: 1, marginRight: 8 }} />
            <PrimaryButton title="Open Workout" onPress={() => navigation.navigate('WorkoutDetails')} style={{ flex: 1 }} />
          </View>
        </>
      )}
      <WhyModal visible={why} text={plan.why} onClose={() => setWhy(false)} />
    </Screen>
  );
}
