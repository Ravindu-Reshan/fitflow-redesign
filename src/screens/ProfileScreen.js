import React from 'react';
import { Pressable, Switch, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import SectionHeader from '../components/SectionHeader';
import { useApp } from '../state/AppState';
import { user } from '../data/mockWorkouts';
import colors from '../theme/colors';

const rows = ['Notification preferences', 'Workout preferences', 'Privacy', 'Language', 'Help & Support'];

export default function ProfileScreen({ navigation }) {
  const { personalized, setPersonalized, done } = useApp();
  return (
    <Screen>
      <View style={{ alignItems: 'center', marginBottom: 12 }}>
        <Text style={{ fontSize: 64 }}>🧑</Text>
        <Text style={{ fontSize: 22, fontWeight: '800' }}>{user.name}</Text>
        <Text style={{ color: colors.muted }}>Goal: {user.goal}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <StatCard icon="flash" label="Streak" value={`${user.streak} days`} highlight />
        <StatCard icon="barbell" label="Total workouts" value={user.totalWorkouts + done.workouts} />
      </View>
      <SectionHeader title="Settings" />
      {rows.map((r) => (
        <Pressable key={r} onPress={r === 'Privacy' ? () => navigation.navigate('Privacy') : undefined}>
          <Card style={{ padding: 14 }}><Text>{r}  ›</Text></Card>
        </Pressable>
      ))}
      <Card style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ flex: 1, marginRight: 8 }}>Allow personalized recommendations</Text>
        <Switch value={personalized} onValueChange={setPersonalized} trackColor={{ true: colors.primary }} />
      </Card>
      <SectionHeader title="About" />
      {[['Privacy Policy', 'Privacy'], ['Release Notes', 'ReleaseNotes'], ['Testing', 'Testing']].map(([t, r]) => (
        <Pressable key={r} onPress={() => navigation.navigate(r)}><Card style={{ padding: 14 }}><Text>{t}  ›</Text></Card></Pressable>
      ))}
    </Screen>
  );
}
