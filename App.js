import React from 'react';
import { ScrollView,Image, Text, View, ImageBackground,Pressable, ProgressViewIOSComponent } from 'react-native';

import capa from './assets/capa.jpg'
import backgraud from './assets/backgraud.jpg'
import estilo from './components/estilo';


export default function App() {
  return (
   <ScrollView>

      <ImageBackground source={backgraud} blurRadius={5} resizeMode="cover"> 
{/* capa    */}
    <View>
     <Image source={capa} />
   <Text style={estilo.titulo}>Forza horizon 5 :jogo de corrida e mundo aberto</Text>
   <Text style={estilo.subtitulo}>Desenvolvedora : Playground Games </Text>
    </View>

      {/* botoes  */}
      {/* sobre */}
    <Pressable
    onPress={()=>{props.navigation.navigate('')}}>
    <Text style={estilo.titulo}>Sobre</Text>
    </Pressable>

   {/* Plataformas */}
    <Pressable
    onPress={()=>{props.navigation.navigate('')}}>
    <Text style={estilo.titulo}>Plataformas</Text>
    </Pressable>





    </ImageBackground>
   </ScrollView>
  );
}

