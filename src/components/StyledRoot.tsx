import { StyleSheet, View, PanResponder } from 'react-native'
import React, { FC, useRef } from 'react'
import { colors } from '../theme/colors'

interface Props {
    style?: object,
    children?: any,
    usePressable?: boolean,
    onPress?: () => void
}

const StyledRoot: FC<Props> = ({ children, style, usePressable = false, onPress = () => { } }) => {

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponderCapture: () => {
                onPress()
            },
            onShouldBlockNativeResponder: () => false,
        })
    ).current

    return usePressable ? (
        <View style={[styles.root, style]}  {...panResponder.panHandlers}>
            {children}
        </View>
    )
        :
        <View style={[styles.root, style]}>
            {children}
        </View>
}

export default StyledRoot

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: colors.white,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        // paddingHorizontal: 10,
        paddingVertical: 5
    }
})