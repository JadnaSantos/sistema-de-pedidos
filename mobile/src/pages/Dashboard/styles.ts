import styled from 'styled-components/native'

export const ContainerSafe = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 15px;
  background-color: ${({ theme }) => theme.color.dark};
`

export const TextOrder = styled.Text`
  font-size: 30px;
  font-weight: bold;

  color: ${({ theme }) => theme.color.white};
  margin-bottom: 24px;
`

export const Input = styled.TextInput`
  width: 95%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.gray_400};

  margin-bottom: 12px;
  border-radius: 4px;
  text-align: center;

  padding: 8px;
  font-size: 15px;
  color:${({ theme }) => theme.color.white};;
`


export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 95%;
  border-radius: 4px;
  height: 40px;

  background-color: ${({ theme }) => theme.color.green_900};
`


export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:${({ theme }) => theme.color.white};;
`


