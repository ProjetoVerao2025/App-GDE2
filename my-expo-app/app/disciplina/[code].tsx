// http://localhost:8081/disciplina/ passando codigo da disciplina como parametro

import { View, Text, ScrollView, Pressable, ImageBackground } from 'react-native';
import { useLocalSearchParams, useRouter, Stack} from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 




// TODO: Implementar os requests e parar de mockar os dados
// A bibliografia nao ta sendo retornada pelo back ainda, mas isso
// eh facil de resolver, dificil eh encontrar onde vao estar as bibliografias
const disciplina = {
  course_code: "MA311",
  course_name: "Calculo 3",
  class_letter: "H",
  syllabus: "Séries numéricas e séries de funções. Equações diferenciais ordinárias. Transformadas de Laplace. Sistemas de equações de primeira ordem. Equações diferenciais parciais e séries de Fourier.",
  bibliography: "O curso é quase todo baseado no seguinte livro-texto: William E. Boyce e Richard C. Diprima, Equações Diferenciais Elementares...",
};

export default function DisciplineDetails() {
  const { code } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F5F5F5]"> 
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView className="flex-1 px-6 pt-12">
        <Pressable onPress={() => router.back()} className="mb-6 items-start">
          <View className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
          <Text className="font-bold mt-1 text-lg">Return</Text>
        </Pressable>

        <View className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 mb-10">
          
          <View className="flex-row justify-between items-center mb-10">
            <View className="bg-gray-100 p-3 rounded-2xl">
              <Ionicons name="calculator" size={32} color="black" /> 
            </View>
            <Text className="text-3xl font-bold">{code || disciplina.course_code}</Text>
            <Text className="text-xl font-bold">Turma: {disciplina.class_letter}</Text>
          </View>

          <View className="mb-8">
            <Text className="text-2xl font-bold mb-4">Ementa:</Text>
            <Text className="text-gray-700 leading-6 text-base">
              {disciplina.syllabus}
            </Text>
          </View>

          <View className="mb-8">
            <Text className="text-2xl font-bold mb-4">Bibliografia:</Text>
            <Text className="text-gray-700 leading-6 text-base">
              {disciplina.bibliography}
            </Text>
            <Pressable className="mt-2">
              <Text className="text-black font-bold underline">
                {/* Toda disciplina vai ter que ter um link pra bibliografia? 
                    So segui o que tava no design do figma lol

                    // TODO: Transformar num link ou remover essa secao
                    */}
                Veja mais informações sobre bibliografia e materiais complementares aqui.
              </Text>
            </Pressable>
          </View>

          {/* Atendimento */}

          {/*
              Novamente, acho que essa parte aqui vai dar um trabalho muito grande pra conseguir achar
              Ja que o processo de atendimento nao eh centralizado no site da DAC

             // TODO: Transformar num link ou remover essa secao
          */}
          <View>
            <Text className="text-2xl font-bold mb-4">Atendimento:</Text>
            <Text className="text-gray-700 text-base">
              <Text className="font-bold underline">Confira aqui</Text> os horários dos atendimentos de dúvidas dos PEDs e PADs.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  container: 'flex flex-1 bg-white',
};
