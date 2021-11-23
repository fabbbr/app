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
        data.email = data.email.trim()

        if(!data.email.length) err.email = 'Ce champ est obligatoire'
        else if(!Verifier.email(data.email)) err.email = 'Email non valide'
        
        if(!data.password && !data.password.length) err.password = 'Ce champ est obligatoire'
        
        if(Tools.objSize(err) > 0) {
            setErrors(err)
        } else {
            Api.post('register', data).then(data => {
                console.log(JSON.stringify(data))
            })
        }
    }


    return (
      <ScrollView>
          <AppInput control={control} name="username" type="text" label="Pseudo" placeholder="John.Doe" required error={errors.username} />
          <AppInput control={control} name="email" type="text" label="Email" placeholder="john.doe@mail.com" required error={errors.email} />
          <AppInput control={control} name="password" type="password" label="Mot de passe" placeholder="********" required error={errors.password} />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    );
}