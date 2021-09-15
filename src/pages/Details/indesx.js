import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity 
} from "react-native";

import { database } from "../../config/firebaseconfig";
import styles from "./style" 

export default function Details({navigation, route}){
  const [descricaoEdit, setDescricaoEdit] = useState(route.params.descricao)
  const idTask = route.params.id

  //? função editar task 
  function  editTask(descricao, id){
    database.collection("Tasks").doc(id).update({
      descricao: descricaoEdit,
    })
    navigation.navigate("Notas Rapidas")
  }

  return(
    <View style={styles.container}>
      {/* input */}
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex. Estudar javascript"
        onChangeText={setDescricaoEdit}
        value={descricaoEdit}
      />
      {/* botão salvar */}
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={()=>{editTask(descricaoEdit, idTask) 
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  ) 
}