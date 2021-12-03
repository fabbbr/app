import React, { useState } from "react"
import { ScrollView, View, Pressable, Text, StyleSheet } from "react-native"
import { useForm } from "react-hook-form"
import { Link } from "@react-navigation/native"

import GlobalStyle from "../../styles/GlobalStyle"
import ButtonStyle from "../../styles/ButtonStyle"

import AppInput from "../../components/AppInput"
import TextLine from "../../components/TextLine"

import * as Api from "../../utils/Api"
import * as Tools from '../../utils/Tools'

export default function LoginProfile() {
    const { control, handleSubmit } = useForm()
    const [ errors, setErrors ] = useState({})
    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)
        
        if(!data.username.length) err.username = 'Ce champ est obligatoire'
        if(!data.password.length) err.password = 'Ce champ est obligatoire'
        
        setErrors(err)
        if(Tools.objSize(err) === 0) {
          Api.post('login', data)
          .then(data => {
              alert(JSON.stringify(data))
          })
        }
    }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <AppInput control={control} name="username" type="text" label="Email" error={errors.username} />
      <AppInput control={control} name="password" type="password" label="Mot de passe" error={errors.password} />
      
      <View style={{marginTop: 10}}>
        <Pressable style={ButtonStyle.default} onPress={handleSubmit(onSubmit)}>
        <Text style={ButtonStyle.default_text}>Connexion</Text>
      </Pressable>
      </View>

      <View style={{marginVertical: 15}}>
        <TextLine text='connexion avec' color={GlobalStyle.color.darklight} lineColor={GlobalStyle.color.darklight} />
      </View>

      <View style={{marginTop: 10}}>
        <Pressable style={ButtonStyle.google} onPress={handleSubmit(onSubmit)}>
          <Text style={ButtonStyle.google_text}>Connexion avec Gologolo</Text>
        </Pressable>
      </View>

      <View style={{marginTop: 40, alignItems: 'center'}}>
        <Text style={{color: GlobalStyle.color.darklight, marginBottom: 5}}>Vous n'avez pas de compte ?</Text>
        <Link style={styles.link} to={{ screen: 'SigninProfile', params: { id: 'jane' } }}>
          Créer un compte
        </Link>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: GlobalStyle.color.background,
    padding: GlobalStyle.container.padding
  },
  title: {
    color: GlobalStyle.color.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: GlobalStyle.size.title,
    marginBottom: 10
  },
  link: {
    color: GlobalStyle.color.primary,
    textDecorationLine: 'underline'
  }
})