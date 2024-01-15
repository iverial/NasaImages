import React, { useEffect, useState } from "react";
import {View,StyleSheet, Text,Image,ScrollView} from "react-native"
import { useRoute} from "@react-navigation/native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Details = ()=> {
    //Para obtener parametros de la ruta anterior
    const {params:{title,url,explanation,date,}} = useRoute<NativeStackScreenProps<RootStackParams, 'Details'> ["route"]>()
    return (
        <View style={style.container}>
            <Header/>
            <View style={style.content}>
                <Image style={style.Image} source={{uri:url}}/>
                <Text style={style.title}>{title}</Text>
                <Text style={style.date}>{date}</Text>
                <ScrollView style={style.containerText}>
                    <Text>{explanation}</Text>
                </ScrollView>
            </View>
            <Text>Detalles</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"rgba(7,26,93,255)",
        flex:1,
        paddingHorizontal:16
    },
    content:{
        backgroundColor:"#2c449d",
        borderRadius:32,
        marginVertical:24,
        padding:16,
        flex:1
    },
    Image:{
        width:"100%",
        height:"50%",
        borderColor:"#FFF",
        borderRadius:32,
        borderWidth:2,
        marginBottom:16
    },
    title:{
        color:"#fff",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:16
    },
    date:{
        color:"#fff",
        fontSize:16,

    },
    containerText:{
        marginVertical:16
    }
})

export default Details