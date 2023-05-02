import { StyleSheet, View, TextInput, Keyboard } from 'react-native'
import React, { useState, FC, useEffect, useRef } from 'react'
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

const Root6: FC<Props> = ({
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
    const [fifth, setFifth] = useState<string>('')
    const [sixth, setSixth] = useState<string>('')

    const focusFirst = useRef()
    const focusSecond = useRef()
    const focusThird = useRef()
    const focusFourth = useRef()
    const focusFifth = useRef()
    const focusSixth = useRef()

    useEffect(() => {
        focusFirst.current.focus()

    }, [])

    useEffect(() => {
        value(first + second + third + fourth + fifth + sixth)
        if (first && second && third && fourth && fifth && sixth)
            Keyboard.dismiss()
    }, [first, second, third, fourth, fifth, sixth])


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
        <StyledRoot onPress={() => {
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
                                focusFifth.current.focus()
                            } else {
                                focusThird.current.focus()
                                setFourth('')
                            }
                        } else {
                            if (validateNumbers(val))
                                if (val) {
                                    setFourth(val[val.length - 1])
                                    focusFifth.current.focus()
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

                <TextInput
                    secureTextEntry={secureEntry}
                    style={[appliedStyle(), itemStyle]}
                    value={fifth}
                    onChangeText={(val) => {
                        if (includeAlphabets) {
                            if (val) {
                                setFifth(val[val.length - 1])
                                focusSixth.current.focus()
                            } else {
                                focusFourth.current.focus()
                                setFifth('')
                            }
                        } else {
                            if (validateNumbers(val))
                                if (val) {
                                    setFifth(val[val.length - 1])
                                    focusSixth.current.focus()
                                } else {
                                    focusFourth.current.focus()
                                    setFifth('')
                                }
                        }
                    }}
                    ref={focusFifth}
                    keyboardType={includeAlphabets ? 'default' : 'numeric'}
                    placeholderTextColor={colors.gray}
                />

                <TextInput
                    secureTextEntry={secureEntry}
                    style={[appliedStyle(), itemStyle]}
                    value={sixth}
                    onChangeText={(val) => {
                        if (includeAlphabets) {
                            if (val) {
                                setSixth(val[val.length - 1])
                            } else {
                                focusFifth.current.focus()
                                setSixth('')
                            }
                        } else {
                            if (validateNumbers(val))
                                if (val) {
                                    setSixth(val[val.length - 1])
                                } else {
                                    focusFifth.current.focus()
                                    setSixth('')
                                }
                        }
                    }}
                    ref={focusSixth}
                    keyboardType={includeAlphabets ? 'default' : 'numeric'}
                    placeholderTextColor={colors.gray}
                />
            </View>
        </StyledRoot>

    )
}

export default Root6

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
        width: 40,
        borderBottomColor: colors.veryLightGray4,
        borderBottomWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue
    },
    inputViewBox: {
        width: 40,
        height: 40,
        borderColor: colors.veryLightGray4,
        borderWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue
    },
    inputViewRectangle: {
        width: 40,
        height: 30,
        borderColor: colors.veryLightGray4,
        borderWidth: 2,
        marginHorizontal: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.veryDarkDesaturatedBlue
    },
    inputViewBoxWithBorderStyle: {
        width: 40,
        height: 40,
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
        width: 40,
        height: 40,
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
        width: 40,
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