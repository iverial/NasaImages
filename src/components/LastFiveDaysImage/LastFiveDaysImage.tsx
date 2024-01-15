import React,{FC} from "react"
import { Text, View,StyleSheet,ScrollView } from "react-native"
import { PostImage } from "../../types"
import CardPostImage from "../CardPostImage"


const LastFiveDaysImage:FC<{ PostImages?:PostImage[]}> = ({PostImages})=> {

return (
        <View style ={style.container}>
            <Text style={style.title}>Last Five Images</Text>
            <ScrollView style={style.content}>
                {
                    PostImages?.map((postImage,index)=>{
                        return <CardPostImage key={index} {...postImage} />
                    })
                }
            </ScrollView>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:8
    },
    title:{
        color:"#fff",
        fontSize:16,
        marginBottom:18
    },
    content:{
        paddingHorizontal:24
    }
})


export default LastFiveDaysImage