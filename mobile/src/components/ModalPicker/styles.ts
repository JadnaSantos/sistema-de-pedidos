import styled from 'styled-components/native'
import { Dimensions } from "react-native";


export const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  width: WIDTH - 20;
  height: HEIGHT / 2;

  background-color: ${({ theme }) => theme.color.white};
  border-width: 1px;
  border-color:  ${({ theme }) => theme.color.gray};

  border-radius: 4px;
`
