import classNames from 'classnames';
import { useRef } from 'react';
import './Circle.css';
import { KeyboardEvent, MouseEvent, useEffect } from 'react';
import { Tcolor } from '../models/types';

interface Props {
  color: Tcolor
  isActive: boolean
  onSelect:(color:Tcolor)=>void
}

export const Circle = ({ color, isActive, onSelect }:Props) => {

    const ref=useRef<HTMLDivElement>(null)


    useEffect(()=>{
        if(isActive){
            ref.current?.focus()
        }
    },[isActive])

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
