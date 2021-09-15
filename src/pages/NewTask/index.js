import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity 
} from "react-native";

//? database e styles
import { database } from "../../config/firebaseconfig"
import styles from "./style"

export default function NewTask({navigation}){
  const[descricao, setDescricao] = useState(null)

  //? função que adiciona uma nova task
  function addTask(){
    database.collection("Tasks").add({
      descricao: descricao,
      status: false
    })
    navigation.navigate("Notas Rapidas") //? retorna para pagina home
  }

  return(
    <View style={styles.container}>
      {/* input */}
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. Estudar javascript"
        onChangeText={setDescricao}
        value={descricao}
      />

      {/* botao salvar */}
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={()=>{addTask()
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}