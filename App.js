import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TODO: importa a funções das paginas 
import Task from './src/pages/Task/';
import NewTask from './src/pages/NewTask/';
import Details from './src/pages/Details/indesx';

// creia e chama as paginas do app
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= 'Task'>
        <Stack.Screen
          name="Notas Rapidas" //? nome da pagina
          component={Task} //* componente da pagina
          options={{
            headerTintColor:"#f92e6a"
          }}
        />
        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor:"#f92e6a"
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerTintColor:"#f92e6a"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



