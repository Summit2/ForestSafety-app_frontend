import React from "react";

import './Label.scss';
import { Text } from "../Text/Text";

export type LabelColorType = 'blue' | 'accent' | 'fill-blue' | 'auto';
 
interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string,
    shadow?: boolean,
    labelColor?: LabelColorType,
}

export const Label: React.FC<LabelProps> = ({
    name,
    shadow=false,
    labelColor='auto',
    ...props
}) => {

    const LabelClass = 'map-label';
    const LabelShadowClass = (shadow) ? 'component-shadow' : '';
    const LabelColorClass = (labelColor !== 'auto') ? LabelClass + '-' + labelColor : '';

    return (
        <Text 
            tag='div' 
            color='inherit'
            type='small-text'
            class={[LabelClass, 
                    LabelShadowClass, 
                    LabelColorClass, 
                    props.className].join(' ').trim()}
        >
            {name}
        </Text>
    )
}


