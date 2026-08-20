import './Circle.css';

interface Props {
  color: string
  active?: boolean
  enterActive?: boolean
}

// export function Circle({ color, active, enterActive }: Props) {
//   const circleInfo = `circle circle-${color} ${active ? 'selected' : ''} ${enterActive ? 'active' : ''}`;
//   return <div className={circleInfo} />;
// }

export function Circle({ color, active = false, enterActive = false }: Props) {
  const classes = [
    'circle',
    `circle-${color}`,
    active ? `circle-${color}--selected` : '',
    enterActive ? `circle-${color}--active` : ''
  ].filter(Boolean).join(' ');
  
  return <div className={classes} />;
}
