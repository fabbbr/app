import React, { useState } from "react"
import { View, Button } from "react-native"
import { useForm } from "react-hook-form"
import AppInput from "../../components/AppInput"
import Api from "../../utils/Api"
// import 

export default function LoginProfile() {
  const { control, handleSubmit } = useForm()
  const { errors, setErrors} = useState()
  const onSubmit = data => {
      console.log(JSON.stringify(data))
      Api.post('auth/login', data)
  }

  return (
    <View>
      <AppInput control={control} name="email" type="text" label="Email :" placeholder="john.doe@mail.com" />
      <AppInput control={control} name="password" type="password" label="Mot de passe :" placeholder="********" />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = {
    box: {
        marginVertical: 12
    },
    label: {
        marginBottom: 5
    }
}