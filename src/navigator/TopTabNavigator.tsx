import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';

LogBox.ignoreLogs(['Reanimated']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top:paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary
        },
        style: { 
          borderTopColor: colores.primary, 
          borderTopWidth: 0,
          elevation: 0
        },
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused } ) => {
          let iconName: string = '';
          switch ( route.name ) {
            case 'Chat':
              iconName = "chatbox-outline"
              break;
            case 'Contacts':
              iconName = "people-outline"
              break;
            case 'Albums':
              iconName = "images-outline"
              break;
            
          }
          return <Text style={{ color, fontWeight: 'bold' }}>
                     <Icon name={ iconName } size={ 25 } color={ color } />
                  </Text>
        }
      })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}