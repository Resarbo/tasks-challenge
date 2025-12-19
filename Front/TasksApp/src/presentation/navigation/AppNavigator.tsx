import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TaskListScreen } from '../screens/TaskListScreen';
import { TaskDetailScreen } from '../screens/TaskDetailScreen';
import { TaskFilterScreen } from '../screens/TaskFilterScreen';
import { TaskFilters } from '../../domain/repositories/ITaskRepository';

export type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: { taskId: string };
  TaskFilter: { currentFilters?: TaskFilters };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="TaskList">
      <Stack.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{ title: 'Mis tareas' }}
      />

      <Stack.Screen
        name="TaskFilter"
        component={TaskFilterScreen}
        options={{ title: 'Filtros' }}
      />

      <Stack.Screen
        name="TaskDetail"
        component={TaskDetailScreen}
        options={{ title: 'Detalle de tarea' }}
      />
    </Stack.Navigator>
  );
}
