import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext';
import { ContainerSafe, Input, TextOrder, Button, TextButton } from './styles';
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';


const FormValidationOrderSchema = zod.object({
  table: zod.string(),
})

type SchemaFields = zod.infer<typeof FormValidationOrderSchema>

export function Dashboard() {
  const navigation = useNavigation()
  const { signOut } = useContext(AuthContext);

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationOrderSchema)
  })

  const { handleSubmit, reset, control } = FormValidation

  async function openOrder(data: SchemaFields) {
    try {
      const { table } = data

      await api.post('/order', {
        table: Number(table),
      })

    } catch (err) {
      console.log(err)
    }

    navigation.navigate('order', { number: data.table, order_id: data.table })

    reset()
  }

  return (
    <ContainerSafe>
      <TextOrder>Novo Pedido</TextOrder>

      <Controller
        control={control}
        name="table"
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder="Número da mesa"
            placeholderTextColor="#fff"
            keyboardType='numeric'
            value={value}
            onChangeText={onChange}
          />
        )}
      />


      <Button onPress={handleSubmit(openOrder)}>
        <TextButton>Abrir mesa</TextButton>
      </Button>
    </ContainerSafe>
  )
}
