import React, { useState } from "react"
import { View, Button } from "react-native"
import { useForm } from "react-hook-form"
import AppInput from "../../components/AppInput"

export default function LoginProfile() {
  const { control, handleSubmit } = useForm()
  const { errors, setErrors} = useState()
  const onSubmit = data => {
      alert(JSON.stringify(data))
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
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
}