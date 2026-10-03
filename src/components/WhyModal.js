import React from 'react';
import { Modal, Text, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import colors from '../theme/colors';
export default function WhyModal({ visible, text, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 24 }}>
        <View style={{ backgroundColor: colors.white, borderRadius: 16, padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 8 }}>Why this plan?</Text>
          <Text style={{ color: colors.muted, marginBottom: 16, lineHeight: 22 }}>{text}</Text>
          <PrimaryButton title="Got it" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
