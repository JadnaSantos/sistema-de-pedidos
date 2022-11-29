import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from '../../contexts/AuthContext';
import { Button, Container, Input, InputContainer, Logo, TextButton } from './styles';

const FormValidationSignupSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(3, { message: "Must be 5 or more characters long" })
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>


export function SignIn() {
  const { signIn } = useContext(AuthContext)


  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  })

  const { handleSubmit, register, reset, control } = FormValidation

  async function onSubmit(data: SchemaFields) {
    try {
      const { email, password } = data

      await signIn({
        email, password
      })

    } catch (error) {

    }

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

        <Button
          onPress={handleSubmit(onSubmit)}
        >
          <TextButton>
            Acessar
          </TextButton>
        </Button>
      </InputContainer>
    </Container>
  )
}
