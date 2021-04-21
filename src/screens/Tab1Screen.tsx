import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles, colores } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tab1Screen');
    }, [])
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Iconos</Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="cloud-upload-outline" />
                <TouchableIcon iconName="cellular-outline" />
                <TouchableIcon iconName="chatbubble-ellipses-outline" />
                <TouchableIcon iconName="chatbubbles-outline" />
                <TouchableIcon iconName="checkbox-outline" />
                <TouchableIcon iconName="compass-outline" />
                <TouchableIcon iconName="cut-outline" />
                <TouchableIcon iconName="color-wand-outline" />
            </Text>
        </View>
    )
}
