import React from 'react';
import { TouchableHighlight } from 'react-native';

interface Props {
  children?: JSX.Element,
  onPress?: () => void,
}

const Button: React.FC<Props> = ({ onPress, children }): JSX.Element => {
  return (
    <TouchableHighlight onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
}

export default Button;
