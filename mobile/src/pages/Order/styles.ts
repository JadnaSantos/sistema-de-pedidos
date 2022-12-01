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

export const DropDown = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.gray_400};

  border-radius: 4px;
  width: 100%;
  height: 40px;

  margin-bottom: 12px;
  justify-content: center;

  padding: 8px;
`

export const TextDropdown = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.color.white};
`

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`
export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.color.gray_400};
  color:${({ theme }) => theme.color.white};
  width: 60%;
  text-align: center;

  height: 40px;
`

export const Actions = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content:space-between;
`

export const ButtonAction = styled.TouchableOpacity`
  width: 20%;
  background-color: ${({ theme }) => theme.color.blue_dark};

  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const ButtonActionText = styled.Text`
  color: ${({ theme }) => theme.color.dark};
  font-size: 18px;
  font-weight: bold;
`
export const ButtonAdvanced = styled.TouchableOpacity`
  width: 75%;

  background-color: ${({ theme }) => theme.color.green_900};

  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const ButtonAdvancedText = styled.Text`
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  font-weight: bold;
`
