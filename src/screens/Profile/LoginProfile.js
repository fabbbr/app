import React, { useState, useEffect } from "react"
import { View, Button } from "react-native"
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
        data.email = data.email.trim()

        if(!data.email.length) err.email = 'Ce champ est obligatoire'
        else if(!Verifier.email(data.email)) err.email = 'Email non valide'
        
        if(!data.password && !data.password.length) err.password = 'Ce champ est obligatoire'
        
        if(Tools.objSize(err) > 0) {
            setErrors(err)
        } else {
            //   Api.post('auth/login', data).then(data => {
            //       alert(JSON.stringify(data))
            //   })
        }
        console.log(Tools.objSize(err), err)
    }


  return (
    <View>
      <AppInput control={control} name="email" type="text" label="Email :" placeholder="john.doe@mail.com" error={errors.email} />
      <AppInput control={control} name="password" type="password" label="Mot de passe :" placeholder="********" error={errors.password} />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}