import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList

} from 'react-native';

//TODO: importa database, icons e styles
import { database } from '../../config/firebaseconfig'
import { FontAwesome } from "@expo/vector-icons"
import styles from './style';

//? cria e exporta função usada no App.js
export default function Task({navigation}){
  const [task, setTask] = useState([])

  //? cri função delete database
  function deleteTask(id){
    database.collection("Tasks").doc(id).delete()
  }
  
  //? chama a collection 'Tasks' da database
  useEffect(()=>{
    database.collection("Tasks").onSnapshot((query)=>{
      const list = []; 
      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id})
      })
      setTask(list); //? seta a lista com dados
    })
  },[])



  return (
    //? cria View da pagina
    <View style={styles.container}>
      
      {/*cria flalist itens e renderiza o database */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({item}) =>{
          return(
          // deleta itens
            <View style={styles.tasks}>
               <TouchableOpacity
                style={styles.deleteTasks}
                onPress={() =>{
                deleteTask(item.id)
                }}
                >
                
                {/* Chama icone */}
                <FontAwesome
                  name='trash'
                  size={23}
                  color='#f92a6a'
                >
                </FontAwesome>
                
                {/* botão navega para detalhes */}
                {/* chamando item do database */}
                </TouchableOpacity>
                  <Text 
                    style={styles.descriptionTask}
                    onPress={()=>{
                      navigation.navigate('Detalhes', {
                      id: item.id,
                      descricao: item.descricao
                      })
                    }} 
                  >
                    { item.descricao }
                  </Text>
            </View>
          )
        }}
        
      />
      {/* botao chama NewTaks */}
       <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=> navigation.navigate('New Task')}
       > 
        <Text style={styles.iconButton}>+</Text>
       </TouchableOpacity>
    </View>
  )
}