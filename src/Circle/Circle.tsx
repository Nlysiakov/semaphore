import classNames from 'classnames';
import './Circle.css';
import { KeyboardEvent, MouseEvent } from 'react';

type Tcolor="red" | "orange" | "green"

interface Props {
  color: Tcolor
  isActive: boolean
  onFocus:(color:Tcolor)=>void
}

export const Circle = ({ color, isActive ,onFocus }:Props) => {

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            onFocus(color);
        }
    };
    
    const handleClick = (_e: MouseEvent<HTMLDivElement>) => {
            onFocus(color)
    };

        return (
            <div
                tabIndex={0}
                className={classNames(
                    "circle",
                    `circle-${color}`,
                    {[`circle-${color}--active`]: isActive}
                )}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
            />
        );
    }
