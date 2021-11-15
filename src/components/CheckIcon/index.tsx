import {InputHTMLAttributes} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {Container} from './style';

interface CheckIconProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    icon: IconDefinition,
    checkedColor: string,
}

export const CheckIcon = ({icon,checkedColor, id, ...rest}:CheckIconProps) => {
    return (
        <Container htmlFor={id} checkedColor={checkedColor} >
            <input type="checkbox" {...rest} id={id} />
            <FontAwesomeIcon className="check-icon" icon={icon}  size="2x" />
        </Container>
    )
}