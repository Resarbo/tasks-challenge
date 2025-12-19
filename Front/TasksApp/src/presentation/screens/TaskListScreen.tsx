import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigator';
import { useTasks } from '../../application/hooks/useTasks';
import { TaskItem } from '../components/TaskItem';
import { TaskFilters } from '../../domain/repositories/ITaskRepository';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

export function TaskListScreen({ navigation }: Props) {
    const [filters, setFilters] = React.useState<TaskFilters | undefined>();
    const { tasks, loading, error, reload } = useTasks(filters);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
        <TouchableOpacity onPress={reload}>
          <Text style={styles.retry}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() =>
            navigation.navigate('TaskFilter', {
            currentFilters: filters,
            })
        }
        >
        <Text style={styles.filterText}>Filtrar</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() =>
              navigation.navigate('TaskDetail', { taskId: item.id })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No hay tareas</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retry: {
    marginTop: 8,
    color: '#007AFF',
  },
  filterButton: {
    padding: 12,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  filterText: {
    color: '#fff',
    fontWeight: '600',
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    color: '#666',
  },
});
