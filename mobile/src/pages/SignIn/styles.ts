import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.dark};
`
export const Logo = styled.Image`
  margin-bottom: 18px;
`

export const InputContainer = styled.View`
  width: 95%;
  align-items: center;
  justify-content: center;

  padding: 32px 14px;
`
export const Input = styled.TextInput`
  width: 95%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.gray_400};

  margin-bottom: 12px;
  border-radius: 4px;

  padding: 8px;
  color:${({ theme }) => theme.color.white};;
`

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 95%;
  border-radius: 4px;
  height: 40px;

  background-color: #2078ac;
`

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:${({ theme }) => theme.color.white};;
`

