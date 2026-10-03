import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Card from './Card';
import colors from '../theme/colors';
export default function SocialPost({ post, liked, onLike }) {
  return (
    <Card>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ fontSize: 30, marginRight: 10 }}>{post.avatar}</Text>
        <View><Text style={{ fontWeight: '700' }}>{post.user}</Text><Text style={{ color: colors.muted, fontSize: 12 }}>{post.activity} · {post.time}</Text></View>
      </View>
      <Text style={{ marginBottom: 10, color: colors.text }}>{post.text}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={onLike} style={({ pressed }) => ({ marginRight: 20, opacity: pressed ? 0.5 : 1 })}>
          <Text style={{ color: liked ? colors.primary : colors.muted, fontWeight: '600' }}>{liked ? '❤️' : '🤍'} {post.likes + (liked ? 1 : 0)}</Text>
        </Pressable>
        <Text style={{ color: colors.muted, fontWeight: '600' }}>💬 {post.comments}</Text>
      </View>
    </Card>
  );
}
