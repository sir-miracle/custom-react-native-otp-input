import React, { FC } from 'react';
import { Root4, Root5, Root6, Root7, Root8 } from '.';

interface Props {
    value: (val: string) => void,
    style?: object,
    itemStyle?: object,
    numberOfDigits: number,
    inputShape?: 'underline' | 'box' | 'rectangle' | 'circle' | 'box_with_border_radius' | 'no_style',
    includeAlphabets?: boolean,
    secureEntry?: boolean
}

const Root: FC<Props> = ({
    value = () => { },
    style,
    itemStyle,
    numberOfDigits = 6,
    inputShape = 'circle',
    includeAlphabets = false,
    secureEntry = false
}) => {

    return (
        <>
            {
                numberOfDigits == 4 &&
                <Root4
                    value={(val: string) => value(val)}
                    inputShape={inputShape}
                    includeAlphabets={includeAlphabets}
                    style={style}
                    itemStyle={itemStyle}
                    secureEntry={secureEntry}
                />
            }
            {
                numberOfDigits == 5 &&
                <Root5
                    value={(val: string) => value(val)}
                    inputShape={inputShape}
                    includeAlphabets={includeAlphabets}
                    style={style}
                    itemStyle={itemStyle}
                    secureEntry={secureEntry}
                />
            }
            {
                numberOfDigits == 6 &&
                <Root6
                    value={(val: string) => value(val)}
                    inputShape={inputShape}
                    includeAlphabets={includeAlphabets}
                    style={style}
                    itemStyle={itemStyle}
                    secureEntry={secureEntry}
                />
            }
            {
                numberOfDigits == 7 &&
                <Root7
                    value={(val: string) => value(val)}
                    inputShape={inputShape}
                    includeAlphabets={includeAlphabets}
                    style={style}
                    itemStyle={itemStyle}
                    secureEntry={secureEntry}
                />
            }
            {
                numberOfDigits == 8 &&
                <Root8
                    value={(val: string) => value(val)}
                    inputShape={inputShape}
                    includeAlphabets={includeAlphabets}
                    style={style}
                    itemStyle={itemStyle}
                    secureEntry={secureEntry}
                />
            }
        </>
    );
}

export default Root;

