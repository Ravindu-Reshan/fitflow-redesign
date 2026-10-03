import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import ExerciseCard from '../components/ExerciseCard';
import ProgressBar from '../components/ProgressBar';
import { useApp } from '../state/AppState';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function WorkoutDetailsScreen({ route }) {
  const { plan, completeWorkout } = useApp();
  const [status, setStatus] = useState('idle'); // idle | running | paused | complete
  const [doneIds, setDoneIds] = useState([]);
  useEffect(() => { if (route.params?.autoStart) setStatus('running'); }, [route.params]);

  const toggle = (id) => status === 'running' && setDoneIds(doneIds.includes(id) ? doneIds.filter((x) => x !== id) : [...doneIds, id]);
  const finish = () => { completeWorkout(plan); setStatus('complete'); };

  if (status === 'complete') {
    return (
      <Screen>
        <Card style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 48 }}>🎉</Text>
          <Text style={[typography.h1, { color: colors.text }]}>Workout Complete!</Text>
          <Text style={{ marginTop: 8 }}>🔥 {plan.calories} kcal burned · ⏱ {plan.duration} min</Text>
          <Text>✅ {doneIds.length}/{plan.exercises.length} exercises completed</Text>
          <Text style={{ marginTop: 12, textAlign: 'center', color: colors.muted }}>Consistency beats intensity. See you tomorrow!</Text>
        </Card>
        <Card style={{ backgroundColor: colors.primaryLight }}><Text style={{ fontWeight: '700' }}>🔥 Great job! You completed today's workout.</Text></Card>
      </Screen>
    );
  }
  return (
    <Screen>
      <Text style={[typography.h1, { color: colors.text }]}>{plan.title}</Text>
      <Text style={{ color: colors.muted, marginVertical: 6 }}>⏱ {plan.duration} min · {plan.difficulty} · 🔥 ~{plan.calories} kcal</Text>
      <ProgressBar value={doneIds.length / plan.exercises.length} />
      <Text style={{ marginVertical: 8, color: colors.muted }}>
        {status === 'idle' ? 'Press Start Workout, then tap exercises to tick them off.' : status === 'paused' ? 'Paused' : `${doneIds.length}/${plan.exercises.length} done`}
      </Text>
      {plan.exercises.map((e) => <ExerciseCard key={e.id} ex={e} done={doneIds.includes(e.id)} onPress={() => toggle(e.id)} />)}
      <View style={{ flexDirection: 'row' }}>
        {status === 'running'
          ? <SecondaryButton title="Pause" onPress={() => setStatus('paused')} style={{ flex: 1, marginRight: 8 }} />
          : <PrimaryButton title={status === 'paused' ? 'Resume' : 'Start Workout'} onPress={() => setStatus('running')} style={{ flex: 1, marginRight: 8 }} />}
        <PrimaryButton title="Complete" onPress={finish} style={{ flex: 1, backgroundColor: colors.success }} />
      </View>
    </Screen>
  );
}
