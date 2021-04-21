import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
// import { StackScreenProps } from '@react-navigation/stack';
import { styles, colores } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props) => {
    const { width, height } = useWindowDimensions();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                width < height ?
                <TouchableOpacity
                    style={{
                        ...styles.botonPequeno,
                        backgroundColor: colores.primary
                    }}
                    onPress={ () => navigation.toggleDrawer() }
                >
                    <Text style={{ fontWeight: 'bold' }}>
                        <Icon name={ "menu-outline" } size={ 25 } color={ "white" } />
                    </Text>
                </TouchableOpacity>
                : null
            )
        })
    }, [width])
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>
            
            <TouchableOpacity
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#7868e6'
                }}
                onPress={ () => navigation.navigate("Pagina2Screen") }
            >
                <Text style={{ fontWeight: 'bold' }}>
                    <Icon name={ "arrow-forward-circle-outline" } size={ 35 } color={ "white" } />
                </Text>
                <Text style={ styles.botonGrandeTexto }>Ir página 2</Text>
            </TouchableOpacity>
            
            
            <Text style={{
                marginVertical: 20,
                fontSize: 20
            }}>Navegar con argumentos</Text>
            
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856d6'
                    }}
                    onPress={ () => navigation.navigate("PersonaScreen", {
                        id: 1,
                        nombre: 'Pedro'
                    }) }
                >
                    <Text style={{ fontWeight: 'bold' }}>
                        <Icon name={ "man-outline" } size={ 35 } color={ "white" } />
                    </Text>
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={ () => navigation.navigate("PersonaScreen", {
                        id: 1,
                        nombre: 'Maria'
                    }) }
                >
                    <Text style={{ fontWeight: 'bold' }}>
                        <Icon name={ "woman-outline" } size={ 35 } color={ "white" } />
                    </Text>
                    <Text style={ styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}
