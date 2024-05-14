import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import {images} from '../../../constants'
import { AntDesign } from '@expo/vector-icons'

const swollenCombPage = () => {
  return (
    <SafeAreaView className="bg-cadetblue w-full h-full">
      <ScrollView>
      <View className="flex-1">
        <TouchableOpacity onPress={() => router.back()} className="ml-5 mt-5">
          <AntDesign name="arrowleft" size={24} color="black"/>
        </TouchableOpacity>
          <Text className="text-center font-pextrabold text-3xl pt-20 mb-5">SWOLLEN COMB</Text>
          <View>
              <Text className="text-center font-pbold text-2xl underline">AVIAN INFLUENZA</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">  
                    Avian influenza, also known as bird flu, is a viral infection caused by influenza A viruses that
                    primarily affects birds, but can also infect humans and other animals. It presents with symptoms
                    ranging from mild respiratory issues to severe disease and high mortality rates in birds. Highly
                    pathogenic strains, such as H5N1 and H7N9, are of particular concern due to their potential to
                    cause widespread outbreaks and pose zoonotic risks to human health.          
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.avianinfluenza}
                      className="items-center justify-center w-80 h-80 mb-10"
                      resizeMode='contain'
                    />
                    <Link href="https://www.msdmanuals.com/professional/infectious-diseases/respiratory-viruses/avian-influenza" 
                    className='text-lg underline text-black mb-10'>Click here for more info</Link>
                    </View>
                </View>
            </View>
            <View>
              <Text className="text-center font-pbold text-2xl underline mb-5">FOWL POX</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">              
                    Fowl pox is a viral disease in poultry caused by the avipoxvirus. It manifests
                    in two forms: the cutaneous form, which causes wart-like lesions on the skin, comb,
                    and wattles, and the diphtheritic form, which affects the mucous membranes of the mouth,
                    throat, and respiratory tract. The disease spreads through direct contact or insect vectors,
                    and while it generally has low mortality, it can lead to reduced productivity and secondary
                    infections.       
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.fowlpox}
                      className="items-center justify-center w-80 h-80"
                      // resizeMode='contain'
                    />
                    <Link href="https://www.msdvetmanual.com/poultry/fowlpox/fowlpox-in-chickens-and-turkeys" 
                    className='text-lg underline text-black mb-10 mt-6'>Click here for more info</Link>
                    </View>
                </View>
            </View>
            <View>
              <Text className="text-center font-pbold text-2xl underline mb-5">MAREK'S DISEASE</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">  
                  Marek's disease is a highly contagious viral disease in chickens, caused by the Marek's disease virus (MDV),
                  a type of herpesvirus. It manifests in various forms, including tumors, paralysis, and immunosuppression, 
                  leading to significant morbidity and mortality in affected flocks. Vaccination is the primary method of control, 
                  but the disease remains a major concern in poultry farming.                
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.mareks}
                      className="items-center justify-center w-80 h-80"
                      // resizeMode='contain'
                    />
                    <Link href="https://www.msdvetmanual.com/poultry/neoplasms-in-poultry/marek-s-disease-in-poultry?autoredirectid=23789" 
                    className='text-lg underline text-black mb-10 mt-6'>Click here for more info</Link>
                    </View>
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default swollenCombPage