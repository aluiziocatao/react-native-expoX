import React from "react";

import { Text, View, Image, StyleSheet } from "react-native";

import Texto from "../../components/Texto";

export default function detalhes({titulo, tituloProduto, nomeVendendor, logoVendedor, descricao, preco}){
    return <>
      <Texto style={styles.detalhes}>{titulo}</Texto>
      <Texto style={styles.titulo}>{tituloProduto}</Texto>
      <View style={styles.vendedor}>
        <Image style={styles.logoVendedor} source={logoVendedor} />
        <Text style={styles.nomeVendedor}>{nomeVendendor}</Text>
      </View>
      <Texto style={styles.desc}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
    </>
}

const styles = StyleSheet.create({
    detalhes: {
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center",
      },
      titulo: {
        color: "#ffa500",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center"
      },
      nomeVendedor: {
        color: "#a3a3a3",
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 10
      },
      desc: {
        fontSize: 18,
        paddingVertical: 10
      },
      preco: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "right",
        paddingHorizontal: 10
      },
      logoVendedor: {
        width: 32,
        height: 32,
        marginLeft: 2
      },
      vendedor: {
        flexDirection: "row",
        padding: 10,
      }
})