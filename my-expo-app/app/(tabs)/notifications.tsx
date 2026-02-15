//http://localhost:8081/notifications

import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function Details() {
  // Precisa do horario de emissao, materia cancelada, user and notification_type
  type notType = 'late' | 'cancel' | 'skip' | 'exam';
  type notData = {
    time: string, // horario de envio da notificacao no servidor
    horario: string, // horario aula referenciado
    discipline: string, // disciplina envolvida
    user: string, // usuario responsavael/ligado
    type: notType, // tipo de notificacao
    day: string, // dia referente a notificacao
  }
  const data : notData[] =[
    {
      time: "00:32",
      horario: "14:00-16:00", // class_time
      discipline: "MC211", // course
      user: "KGM",
      type: "skip",
      day: "Mon", // Mudar para ser data, nao dia da semana random kkkkkk
    },
    {
      time: "14:34",
      horario: "18:00-19:00",
      discipline: "F259",
      user: "Y",
      type: "cancel",
      day: "Tue"
    },
    {
      time: "08:01",
      horario: "19:00-21:00",
      discipline: "MA323",
      user: "VHAM",
      type: "late",
      day: "Fri",
    },
    {
      time: "18:32",
      horario: "21:00-23:00",
      discipline: "MC358",
      user: "BEDUNADO",
      type: "exam",
      day: "Wed",
    },
  ];
  const persoMessages = {
    late: "A sua aula de {discipline} fora remarcada ou teve seu horario padrao alterado para {day} as {horario}",
    cancel: "A sua aula de {discipline} de {day} as {horario} fora cancelada",
    skip: "O usuario {user} nao ira comparecer na aula de {discipline} as {horario} de {day}",
    exam: "A prova de {discipline} de {day} as {horario} se aproxima!",
  };
  // notification_type: "equivalent_icon_name"
  const iconRelationship = {
    late: "map-signs", cancel: "window-close", 
    skip: "user-o", exam: "calendar-check-o" 
  } as const;
  const titleRelationship = {
    late: "Late/Rescheduled Class", cancel: "Class Canceled", 
    skip: "Skip Class", exam: "Exam`s Close" 
  } as const;
  const formatMessage = (not: notData) => {
      let message = persoMessages[not.type]; // erro de type
      message = message.replace("{discipline}", not.discipline);
      message = message.replace("{day}", not.day);
      message = message.replace("{horario}", not.horario);
      message = message.replace("{user}", not.user);
      return message;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {data.map(not => (
            <View style={styles.notificationBlock}>
              <FontAwesome style={styles.icon} name={iconRelationship[not.type]} size={40} color="#000000"></FontAwesome>
              <View style={styles.textBlock}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                  <Text style={styles.title}>{titleRelationship[not.type]}</Text>
                  <Text style={styles.timeElement}>{not.time}</Text>
                </View>
                {/* FORMATACAO INCORRETA (PODE MELHORAR) */}
                <Text style={styles.body}>{formatMessage(not)}</Text>
              </View>
                {/* ADICIONAR USUARIO QUE CRIOU A NOT NA MENSAGEM??? */}
                {/* <Text style={styles.detailsElement}>by kgm</Text> */}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40, 
    paddingVertical: 60, 
    padding: 50
  },
  notificationBlock: {
    // flex: 1,
    borderRadius: 20,
    backgroundColor: '#D9D9D9', 
    opacity: .5,
    flexDirection: "row",
    marginVertical: 5,
  },
  icon: {
    marginLeft: 10,
    alignContent: "center",
  },
  textBlock: {
    padding: 10,
    flex:1,
    alignContent: "flex-end",
  },
  title: {
    fontWeight: "bold",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  body: {
    alignContent: "flex-start",
    flexShrink: 1,
  },
  // details: {
  //   flex:1,
  //   marginVertical: 10,
  //   justifyContent: "space-between",
  //   alignContent: "flex-end"
  // },
  timeElement: {
    opacity: .6
  }
});
