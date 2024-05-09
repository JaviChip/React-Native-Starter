import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../theme/index'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

export default function HomeScreen() {

  const [showSearch, toggleSearch] = useState(false);
  return (
    <View className = "flex-1 relative">

      <StatusBar style="light"/>

      <Image blurRadius = {20} source = {require("../assets/images/ACMWeatherBg.png")}

        className = "absolute h-full w-full"

      />

      <SafeAreaView className = "flex flex-1" >

        <View style = {{height: '7%'}} className = "mx-4 relative z-50" >

          <View className = "flex-row justify-end items-center rounded-full" 
                style = {{ backgroundColor:'ghostwhite'} } >

                  {
                    showSearch ? (

                      <TextInput placeholder='Search City' 
                       placeholderTextColor={'lightgray'} 
                       className = "pl-6 h-10 pb-1 flex-1 text-base text-white" />


                    ):null

                  }


            <TouchableOpacity style = {{backgroundColor: 'darkgray'}} className = "rounded-full p-3 m-1 "
                              onPress={()=> toggleSearch(!showSearch)} >


              <MagnifyingGlassIcon size="25" color = "white" />
            
            </TouchableOpacity>

            

          </View>


        </View>

      </SafeAreaView>
 
    </View>
  )
}