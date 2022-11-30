import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  padding: 70px 50px 50px;
  background-color: ${({ theme }) => theme.color.dark};
`

export const Content = styled.View`
  flex-direction: row;
  margin-bottom: 12px;

  align-items: center;
  margin-top: 24px;
`

export const Text = styled.Text`
  font-size: 30px;
  font-weight: bold;

  color: ${({ theme }) => theme.color.white};
  margin-right: 14px;
`

export const Button = styled.TouchableOpacity`
`
