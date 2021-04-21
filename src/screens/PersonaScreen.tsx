import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//     id: number,
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ( { route, navigation }: Props ) => {
    const { changeUserName  } = useContext(AuthContext)
    // const params = route.params as RouterParams;
    const params = route.params;
    
    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
        
    }, [])
    
    useEffect(() => {
        changeUserName(params.nombre);
    }, [])
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
