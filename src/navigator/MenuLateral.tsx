import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Drawer.Navigator
        drawerType={ width > height ? 'permanent' : 'front'}
        drawerContent={(props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
  
  return (
    <DrawerContentScrollView>
      
      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style={ styles.avatar }
        />
      </View>
      
      {/* Opciones del menu */}
      
      <View style={ styles.menuContainer }>
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('Tabs')}
        >
          <Text style={{ fontWeight: 'bold', marginRight: 10 }}>
              <Icon name={ "navigate-outline" } size={ 25  } color={ colores.primary } />
          </Text>
          <Text style={ styles.menuTexto }>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Text style={{ fontWeight: 'bold', marginRight: 10 }}>
              <Icon name={ "settings-outline" } size={ 25  } color={ colores.primary } />
          </Text>
          <Text style={ styles.menuTexto }>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}