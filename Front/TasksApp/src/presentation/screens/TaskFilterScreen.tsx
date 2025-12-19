import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigator';
import { TaskStatus } from '../../domain/entities/TaskStatus';
import { TaskPriority } from '../../domain/entities/TaskPriority';
import { TaskFilters } from '../../domain/repositories/ITaskRepository';
import { FilterOption } from '../../presentation/components/FilterOption'

type Props = NativeStackScreenProps<RootStackParamList, 'TaskFilter'>;

export function TaskFilterScreen({ navigation, route }: Props) {
  const [status, setStatus] = useState<TaskStatus | undefined>(
    route.params?.currentFilters?.status
  );
  const [priority, setPriority] = useState<TaskPriority | undefined>(
    route.params?.currentFilters?.priority
  );

  const applyFilters = () => {
    const filters: TaskFilters = {
      status,
      priority,
    };

    navigation.navigate('TaskList', filters as any);
  };

  const clearFilters = () => {
    setStatus(undefined);
    setPriority(undefined);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado</Text>

      {Object.values(TaskStatus).map((value) => (
        <FilterOption
          key={value}
          label={value}
          selected={status === value}
          onPress={() => setStatus(value)}
        />
      ))}

      <Text style={styles.title}>Prioridad</Text>

      {Object.values(TaskPriority).map((value) => (
        <FilterOption
          key={value}
          label={value}
          selected={priority === value}
          onPress={() => setPriority(value)}
        />
      ))}

      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyText}>Aplicar filtros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
        <Text style={styles.clearText}>Limpiar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  applyButton: {
    marginTop: 24,
    padding: 12,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: '600',
  },
  clearButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  clearText: {
    color: '#007AFF',
  },
});
