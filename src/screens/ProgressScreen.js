import React from 'react';
import { Text, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import SectionHeader from '../components/SectionHeader';
import { useApp } from '../state/AppState';
import { week, weeklyGoal, history, achievements } from '../data/mockProgress';
import { user } from '../data/mockWorkouts';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function ProgressScreen() {
  const { done } = useApp();
  const minutes = week.reduce((s, w) => s + w.m, 0) + done.minutes;
  const workouts = weeklyGoal.done + done.workouts;
  const max = Math.max(...week.map((w) => w.m), 1);
  return (
    <Screen>
      <Text style={[typography.h1, { color: colors.text, marginBottom: 12 }]}>Your Progress</Text>
      <View style={{ flexDirection: 'row' }}>
        <StatCard icon="barbell" label="Workouts" value={workouts} />
        <StatCard icon="time" label="Minutes" value={minutes} />
        <StatCard icon="flame" label="kcal" value={1240 + done.calories} />
      </View>
      <Card>
        <Text style={{ fontWeight: '700' }}>Weekly goal: {workouts}/{weeklyGoal.target} workouts</Text>
        <ProgressBar value={workouts / weeklyGoal.target} />
        <Text style={{ marginTop: 8, color: colors.text }}>⚡ Current streak: <Text style={{ color: colors.accent, fontWeight: '700' }}>{user.streak} days</Text></Text>
      </Card>
      <SectionHeader title="Weekly activity (minutes)" />
      <Card style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 140 }}>
        {week.map((w) => (
          <View key={w.d} style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 10 }}>{w.m}</Text>
            <View style={{ width: 24, height: 4 + (w.m / max) * 70, backgroundColor: colors.primary, borderRadius: 6 }} />
            <Text style={{ fontSize: 11, color: colors.muted }}>{w.d}</Text>
          </View>
        ))}
      </Card>
      <SectionHeader title="Workout history" />
      {history.map((h) => (
        <Card key={h.id} style={{ padding: 12 }}>
          <Text style={{ fontWeight: '700' }}>{h.title}</Text>
          <Text style={{ color: colors.muted }}>{h.when} · {h.cal} kcal</Text>
        </Card>
      ))}
      <SectionHeader title="Recent achievements" />
      {achievements.map((a) => (
        <Card key={a} style={{ padding: 12, borderLeftWidth: 4, borderLeftColor: colors.accent }}>
          <Text style={{ fontWeight: '600', color: colors.text }}>{a}</Text>
        </Card>
      ))}
    </Screen>
  );
}
