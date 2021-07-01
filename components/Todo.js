import  React ,{useState} from 'react';
import { Text, View, StyleSheet, Image,TextInput,TouchableOpacity,FlatList,CheckBox } from 'react-native';
import { Ionicons,Feather,AntDesign } from '@expo/vector-icons'

export default function Todo() {
  const[todos,setTodos]=useState([])
  const[renderTodo,setRenderTodo]=useState(todos)
  const [flag, setFlag] = useState(true);
  const [task,setTask]=useState("")
  
  const check=(item,index)=>{
    setTodos(
      todos.map((ex)=>(
        todos[index]==ex?{...ex,checked:!item.checked}:ex
      ))
    )
  } 
 const deleteItem=(item)=>{
   setTodos(todos.filter((todo)=>todo!=item))
 }   
 const show=({item})=>( 
   <View style={{flexDirection:"row"}}>
   <Feather name={item.checked?"check-square":"square"} size={24} color="white" onPress={()=>check(item,todos.indexOf(item))} /> 
    <Text style={styles.list}>{item.title}</Text>
    <AntDesign name="delete" size={24} color="#A07BA3" style={{marginLeft:30}} onPress={()=>deleteItem(item)}/>  
   </View>
   
 )
 const add=()=>{
   if(task!="")
   {
     setTodos([...todos,{
     title:task,
     checked:false
   }])
   setFlag(true)
   setTask("")

   }   

 }
 const all=()=>{
   setFlag(true)
 }
 const active=()=>{
   let x = todos.filter((item)=>item.checked===false)
   setRenderTodo(x)
   setFlag(false)
 }
 const done=()=>{
   let y = todos.filter((item)=>item.checked===true)
   setRenderTodo(y)
   setFlag(false)
 }
 //console.log(task)
  return (
    <View style={styles.container}>
    <Text style={styles.head}>BABY SHARK</Text>
    <Text style={styles.secoundHead}>Todo-dododododddddooooo</Text>
    <View style={styles.totdDiv}>
    <TextInput style={styles.todoInput} 
    placeholder="Write your task here" value={task} onChangeText={setTask}/>
    <TouchableOpacity>
   <Ionicons name="add-circle" size={40} color='#A07BA3' onPress={add} />
    </TouchableOpacity>

    </View>
    
    <View style={{ flexDirection: 'row' ,width:"100%"}}>
    <TouchableOpacity style={styles.btn} onPress={all} Press >
    <Text>All</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={active}>
    <Text>ACTIVE</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={done}>
    <Text>DONE</Text>
    </TouchableOpacity>
    </View>

    <FlatList 
    data={flag?todos:renderTodo}
    renderItem={show}/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:"#C3D3E7",
   /*  height:700 */
  },
  head:{
    color: '#A07BA3',
    fontSize:40,
     marginTop:70,
   

  },
  secoundHead:{
    color: "#EBF3F8",
    fontSize:20

  },
  totdDiv:{
    flexDirection:"row",
    marginTop:30

  },
  todoInput:{
    borderWidth:2,
    borderColor:"#EBF3F8",
    width:240, 
    marginRight:20,
    backgroundColor:"#EBF3F8",
  },
  btn:{
    backgroundColor: '#A07BA3',
    margin:20,
    marginLeft:0,
    width:"30%",
    height:30,
    /* textAlign:"center", */
    alignItems:"center",
    justifyContent:"center",
    color:"#0B0121",
    borderRadius:25
  },
  list:{
    marginLeft:10,
    color:"#EBF3F8",
    fontSize:20


  },
  
});
