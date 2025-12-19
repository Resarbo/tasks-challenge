import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../../domain/entities/Task';

type Props = {
  task: Task;
  onPress: () => void;
};

export function TaskItem({ task, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.subtitle}>
        {task.priority} · {task.status}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 4,
    color: '#666',
  },
});
