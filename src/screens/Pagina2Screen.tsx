import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationOptions } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

export const Pagina2Screen = () => {
    const navigation = useNavigation();
    const options: StackNavigationOptions = {
        title: 'Hola mundo',
        headerBackTitle: 'Atrás'
    }
    
    useEffect(() => {
        navigation.setOptions(options);
    }, [])
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina2Screen</Text>
            <TouchableOpacity
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#7868e6'
                }}
                onPress={ () => navigation.navigate("Pagina3Screen") }
            >
                <Text style={{ fontWeight: 'bold' }}>
                    <Icon name={ "arrow-forward-circle-outline" } size={ 35 } color={ "white" } />
                </Text>
                <Text style={ styles.botonGrandeTexto }>Ir página 3</Text>
            </TouchableOpacity>
        </View>
    )
}
