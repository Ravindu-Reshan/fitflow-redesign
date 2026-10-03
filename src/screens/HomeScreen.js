import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Screen from '../components/Screen';
import AppHeader from '../components/AppHeader';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import WorkoutCard from '../components/WorkoutCard';
import WhyModal from '../components/WhyModal';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import { useApp } from '../state/AppState';
import { user } from '../data/mockWorkouts';
import { week } from '../data/mockProgress';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function HomeScreen({ navigation }) {
  const { plan, done } = useApp();
  const [why, setWhy] = useState(false);
  const [status, setStatus] = useState('pending'); // pending | accepted | skipped
  const max = Math.max(...week.map((w) => w.m));
  return (
    <Screen>
      <AppHeader navigation={navigation} />
      <Text style={[typography.h1, { color: colors.text }]}>Good morning, {user.name}!</Text>
      <Card style={{ marginTop: 12 }}>
        <Text style={{ fontWeight: '700' }}>Today's progress: {done.workouts}/1 workout</Text>
        <ProgressBar value={done.workouts} />
      </Card>
      {status === 'skipped' ? (
        <Card><Text>Recommendation skipped. Open the Planner for another plan.</Text></Card>
      ) : (
        <>
          <WorkoutCard workout={plan} label="Today's AI Workout" onWhy={() => setWhy(true)}
            onStart={() => navigation.navigate('WorkoutDetails', { autoStart: true })} />
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <PrimaryButton title={status === 'accepted' ? '✓ Accepted' : 'Accept'} onPress={() => setStatus('accepted')} style={{ flex: 1, marginRight: 6 }} />
            <SecondaryButton title="Customize" onPress={() => navigation.navigate('Planner')} style={{ flex: 1, marginRight: 6 }} />
            <SecondaryButton title="Skip" onPress={() => setStatus('skipped')} style={{ flex: 1 }} />
          </View>
        </>
      )}
      <View style={{ flexDirection: 'row' }}>
        <StatCard icon="flame" label="Burned" value={`${done.calories} kcal`} />
        <StatCard icon="restaurant" label="Eaten" value="840 kcal" />
        <StatCard icon="flash" label="Streak" value={`${user.streak} days`} highlight />
      </View>
      <SectionHeader title="This week" />
      <Card style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 110 }}>
        {week.map((w) => (
          <View key={w.d} style={{ alignItems: 'center' }}>
            <View style={{ width: 22, height: 4 + (w.m / max) * 50, backgroundColor: colors.primary, borderRadius: 6 }} />
            <Text style={{ fontSize: 11, color: colors.muted }}>{w.d}</Text>
          </View>
        ))}
      </Card>
      <Card style={{ backgroundColor: colors.primaryLight, borderColor: colors.accent, borderWidth: 1 }}>
        <Text style={{ fontWeight: '700', color: colors.text }}>
          🏅 Achievement unlocked: <Text style={{ color: colors.accent }}>5-day streak!</Text>
        </Text>
        <Text style={{ color: colors.muted, marginTop: 2 }}>Keep going, you're building a great habit.</Text>
      </Card>
      <WhyModal visible={why} text={plan.why} onClose={() => setWhy(false)} />
    </Screen>
  );
}
