import classNames from 'classnames';
import { useState } from 'react';
import './Circle.css';
import { KeyboardEvent, MouseEvent } from 'react';


interface Props {
  color: string
//   isActive?: boolean
  onFocus?: ()=>void
}

export const Circle = ({ color, onFocus }:Props) => {
    const [isActive, setIsActive]=useState(false)

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            setIsActive(prev => !prev);
        }
    };
    
    const handleClick = (_e: MouseEvent<HTMLDivElement>) => {
        setIsActive(prev=> !prev)
    };

        return (
            <div
                tabIndex={0}
                className={classNames(
                    "circle",
                    `circle-${color}`,
                    {[`circle-${color}--active`]: isActive}
                )}
                onFocus={onFocus}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
            />
        );
    }
