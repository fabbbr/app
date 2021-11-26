import React, { useState } from "react"
import { ScrollView, Button } from "react-native"
import { useForm } from "react-hook-form"

import AppInput from "../../components/AppInput"
import * as Api from "../../utils/Api"
import * as Verifier from '../../utils/Verifier'
import * as Tools from '../../utils/Tools'

export default function LoginProfile() {
    const { control, handleSubmit } = useForm()
    const [ errors, setErrors ] = useState({})
    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)
        
        if(!data.username.length) err.username = 'Ce champ est obligatoire'
        if(!data.password.length) err.password = 'Ce champ est obligatoire'
        
        if(Tools.objSize(err) > 0) {
            setErrors(err)
        } else {
            Api.post('login', data)
            .then(data => {
                alert(JSON.stringify(data))
            })
        }
    }


  return (
    <ScrollView>
      <AppInput control={control} name="username" type="text" label="User :" placeholder="john.doe@mail.com" error={errors.username} />
      <AppInput control={control} name="password" type="password" label="Mot de passe :" placeholder="********" error={errors.password} />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}