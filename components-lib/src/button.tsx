import * as React from 'react';

interface ButtonProps {
  /**
   * Button label text
   */
  label?: string;
  /**
   * Event handler for button click
   */
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  label = 'Button from lib', 
  onClick 
}) => {
  return <button onClick={onClick}>{label} from afsdasd</button>;
};