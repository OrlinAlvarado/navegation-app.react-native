import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};
export const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin }>
            <Text style={ styles.title } >Pagina3Screen</Text>
            <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#7868e6'
                }}
                onPress={ () => navigation.pop() }
            >
                <Text style={{ fontWeight: 'bold' }}>
                    <Icon name={ "arrow-back-circle-outline" } size={ 35 } color={ "white" } />
                </Text>
                <Text style={ styles.botonGrandeTexto }>Regresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#7868e6'
                }}
                onPress={ () => navigation.popToTop() }
            >
                <Text style={{ fontWeight: 'bold' }}>
                    <Icon name={ "home-outline" } size={ 35 } color={ "white" } />
                </Text>
                <Text style={ styles.botonGrandeTexto }>Inicio</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
