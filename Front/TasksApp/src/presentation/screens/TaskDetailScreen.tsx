import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigator';
import { useTaskDetail } from '../../application/hooks/useTasksDetail';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

export function TaskDetailScreen({ route }: Props) {
  const { taskId } = route.params;
  const { task, loading, error } = useTaskDetail(taskId);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !task) {
    return (
      <View style={styles.center}>
        <Text>{error ?? 'Tarea no encontrada'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>

      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.text}>{task.description}</Text>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Prioridad</Text>
          <Text style={styles.text}>{task.priority}</Text>
        </View>

        <View>
          <Text style={styles.label}>Estado</Text>
          <Text style={styles.text}>{task.status}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
  },
  text: {
    fontSize: 16,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
});

