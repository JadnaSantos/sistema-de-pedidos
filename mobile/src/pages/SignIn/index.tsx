import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const FormValidationSignupSchema = zod.object({
  email: zod.string().email({
  }),
  password: zod.string().min(3, { message: "Must be 5 or more characters long" })
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>


export function SignIn() {
  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  })

  const { handleSubmit, register, reset, control } = FormValidation

  async function onSubmit(data: SchemaFields) {
    const { email, password } = data

    console.log(data.email)
    console.log(data.password)

    reset()
  }



  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
      <View style={styles.inputContainer}>

        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Digite seu email"
              placeholderTextColor="#fff"
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder="Digite sua senha"
              placeholderTextColor="#fff"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            style={styles.textButton}
          >
            Acessar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202022',
  },
  logo: {
    marginBottom: 18
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#262626',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: '#2078ac',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
})
