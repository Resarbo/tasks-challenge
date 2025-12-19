import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function FilterOption({ label, selected, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.option, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    padding: 12,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  selected: {
    backgroundColor: '#007AFF',
  },
  text: {
    color: '#000',
  },
});

