import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackToLogIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  border-top-width: 1px;
  border-top-color: #232129;

  padding: 16px 0 ${16 + getBottomSpace()}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToLogInText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;

  margin-left: 16px;
`;
