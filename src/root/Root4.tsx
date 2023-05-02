import { StyleSheet, View, TextInput, Keyboard } from 'react-native'
import React, { useState, FC, useEffect, useRef, useMemo } from 'react'
import { colors } from './theme/colors'
import { validateNumbers } from './utils/utilityFunctions'
import StyledRoot from './components/StyledRoot'


interface Props {
    value: (val: string) => void,
    style?: object,
    itemStyle?: object,
    inputShape?: 'underline' | 'box' | 'rectangle' | 'circle' | 'box_with_border_radius' | 'no_style',
    includeAlphabets?: boolean,
    secureEntry?: boolean
}

const Root4: FC<Props> = ({
    value = () => { },
    style,
    itemStyle,
    inputShape = 'underline',
    includeAlphabets = false,
    secureEntry = false
}) => {

    const [first, setFirst] = useState<string>('')
    const [second, setSecond] = useState<string>('')
    const [third, setThird] = useState<string>('')
    const [fourth, setFourth] = useState<string>('')

    const focusFirst = useRef()
    const focusSecond = useRef()
    const focusThird = useRef()
    const focusFourth = useRef()

    useEffect(() => {
        focusFirst.current.focus()

    }, [])

    useEffect(() => {
        value(first + second + third + fourth)
    }, [first, second, third, fourth])

    useEffect(() => {
        if (fourth)
            Keyboard.dismiss()
    }, [fourth])

    const appliedStyle = () => {
        return inputShape == 'underline'
            ? styles.inputViewUnderline : inputShape == 'box'
                ? styles.inputViewBox : inputShape == 'circle'
                    ? styles.inputViewCircle : inputShape == 'rectangle'
                        ? styles.inputViewRectangle : inputShape == 'box_with_border_radius'
                            ? styles.inputViewBoxWithBorderStyle : inputShape == 'no_style'
                                ? styles.inputViewNoStyle : null
    }

    return (
        <StyledRoot
            onPress={() => {
                Keyboard.dismiss()
            }}
            usePressable={true}
            style={style}
        >
            <View style={styles.numberView}>
                <TextInput
                    secureTextEntry={secureEntry}
                    style={[appliedStyle(), itemStyle]}
                    value={first}
                    onChangeText={(val) => {
                        if (includeAlphabets) {
                            if (val) {
                                setFirst(val[val.length - 1])
                                focusSecond.current.focus()
                            } else {
                                focusFirst.current.focus()
                                setFirst('')
                            }
                        } else {
                            if (validateNumbers(val))
                                if (val) {
                                    setFirst(val[val.length - 1])
                                    focusSecond.current.focus()
                                } else {
                                    focusFirst.current.focus()
                                    setFirst('')
                                }
                        }
                    }}
                    ref={focusFirst}
                    keyboardType={includeAlphabets ? 'default' : 'numeric'}
                    placeholderTextColor={colors.gray}
                />
                <TextInput
                    secureTextEntry={secureEntry}
                    style={[appliedStyle(), itemStyle]}
                    value={second}
                    onChangeText={(val) => {
                        if (includeAlphabets) {
                            if (val) {
                                setSecond(val[val.length - 1])
                                focusThird.current.focus()
                            } else {
                                focusFirst.current.focus()
                                setSecond('')
                            }
                        } else {
                            if (validateNumbers(val))
                                if (val) {
                                    setSecond(val[val.length - 1])
                                    focusThird.current.focus()
                                } else {
                                    focusFirst.current.focus()
                                    setSecond('')
                                }
                        }
                    }}
                    ref={focusSecond}
                    keyboardType={includeAlphabets ? 'default' : 'numeric'}
                    placeholderTextColor={colors.gray}
                />
                <TextInput
                    secureTextEntry={secureEntry}
                    style={[appliedStyle(), itemStyle]}
                    value={third}
                    onChangeText={(val) => {
                        if (includeAlphabets) {
                            if (val) {
                                setThird(val[val.length - 1])
                                focusFourth.current.focus()
                            } else {
                                focusSecond.current.focus()
                                setThird('')
                            }
                        } else {
                            if (validateNumbers(val))
                                if (val) {
                                    setThird(val[val.length - 1])
                                    focusFourth.current.focus()
                                } else {
                                    focusSecond.current.focus()
                                    setThird('')
                                }
                        }
                    }}
                    ref={focusThird}
                    keyboardType={includeAlphabets ? 'default' : 'numeric'}
                    placeholderTextColor={colors.gray}
                />
                <TextInput
                    secureTextEntry={secureEntry}
                    style={[appliedStyle(), itemStyle]}
                    value={fourth}
                    onChangeText={(val) => {
                        if (includeAlphabets) {
                            if (val) {
                                setFourth(val[val.length - 1])
                            } else {
                                focusThird.current.focus()
                                setFourth('')
                            }
                        } else {
                            if (validateNumbers(val))
                                if (val) {
                                    setFourth(val[val.length - 1])
                                } else {
                                    focusThird.current.focus()
                                    setFourth('')
                                }
                        }
                    }}
                    ref={focusFourth}
                    keyboardType={includeAlphabets ? 'default' : 'numeric'}
                    placeholderTextColor={colors.gray}
                />
            </View>
        </StyledRoot>

    )
}

export default Root4

const styles = StyleSheet.create({
    numberView: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'center',
    },
    inputViewUnderline: {
        width: 50,
        borderBottomColor: colors.veryLightGray4,
        borderBottomWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue
    },
    inputViewBox: {
        width: 50,
        height: 50,
        borderColor: colors.veryLightGray4,
        borderWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue
    },
    inputViewRectangle: {
        width: 50,
        height: 35,
        borderColor: colors.veryLightGray4,
        borderWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue
    },
    inputViewBoxWithBorderStyle: {
        width: 50,
        height: 50,
        borderColor: colors.veryLightGray4,
        borderWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue,
        borderRadius: 10
    },
    inputViewCircle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderColor: colors.veryLightGray4,
        borderWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue,
    },
    inputViewNoStyle: {
        width: 60,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue
    },
    create: {
        color: colors.veryDarkDesaturatedBlue,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
    }
})