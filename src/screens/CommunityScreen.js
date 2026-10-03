import React, { useState } from 'react';
import { Text } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SocialPost from '../components/SocialPost';
import SectionHeader from '../components/SectionHeader';
import { posts, challenge } from '../data/mockCommunity';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function CommunityScreen() {
  const [liked, setLiked] = useState({});
  const [joined, setJoined] = useState(false);
  return (
    <Screen>
      <Text style={[typography.h1, { color: colors.text }]}>Community</Text>
      <SectionHeader title="Community Challenge" />
      <Card style={{ backgroundColor: colors.primaryLight }}>
        <Text style={{ fontWeight: '800', fontSize: 17 }}>{challenge.title}</Text>
        <Text style={{ color: colors.muted, marginVertical: 4 }}>{challenge.desc}</Text>
        <Text style={{ marginBottom: 10 }}>👥 {challenge.members + (joined ? 1 : 0)} members joined</Text>
        {joined
          ? <SecondaryButton title="✓ Joined (tap to leave)" onPress={() => setJoined(false)} />
          : <PrimaryButton title="Join Challenge" onPress={() => setJoined(true)} />}
      </Card>
      <SectionHeader title="Friends activity" />
      {posts.map((p) => <SocialPost key={p.id} post={p} liked={!!liked[p.id]} onLike={() => setLiked({ ...liked, [p.id]: !liked[p.id] })} />)}
    </Screen>
  );
}
