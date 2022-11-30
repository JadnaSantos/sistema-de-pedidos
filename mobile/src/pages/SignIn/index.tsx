import { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from '../../contexts/AuthContext';
import { Button, Container, Input, InputContainer, Logo, TextButton } from './styles';
import { AppError } from '../../utils/AppError';
import { ActivityIndicator } from 'react-native';

const FormValidationSignupSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(3, { message: "Must be 5 or more characters long" })
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>


export function SignIn() {
  const { signIn, loadingAuth } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)


  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  })

  const { handleSubmit, reset, control, formState: { errors } } = FormValidation

  async function onSubmit(data: SchemaFields) {
    try {
      setIsLoading(true);
      const { email, password } = data

      await signIn({
        email, password
      })

    } catch (error) {
      console.error(error)
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'

    }
    setIsLoading(false);
    reset()
  }


  return (
    <Container>
      <Logo
        source={require('../../assets/logo.png')}
      />
      <InputContainer>

        <Controller
          control={control}
          name="email"
          rules={{ required: 'Informe o e-mail' }}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Digite seu email"
              placeholderTextColor="#fff"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: 'Informe a senha' }}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Digite sua senha"
              placeholderTextColor="#fff"
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />

        <Button onPress={handleSubmit(onSubmit)}>
          {loadingAuth ? (
            <ActivityIndicator size={25} color="#fff" />
          ) : (
            <TextButton>
              Acessar
            </TextButton>
          )}
        </Button>
      </InputContainer>
    </Container>
  )
}
