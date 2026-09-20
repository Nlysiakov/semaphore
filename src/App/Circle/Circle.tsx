import classNames from 'classnames';
import './Circle.css';
import { KeyboardEvent, MouseEvent } from 'react';
import { Tcolor } from '../models/types';

interface Props {
  color: Tcolor
  isActive: boolean
  onSelect:(color:Tcolor)=>void
  ref?: React.Ref<HTMLDivElement>
}

export const Circle = ({ color, isActive, onSelect, ref }:Props) => {

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            onSelect(color);
        }
    };
    
    const handleClick = (_e: MouseEvent<HTMLDivElement>) => {
            onSelect(color)
    };

        return (
            <div
                ref={ref}
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
