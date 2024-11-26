import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone14ProMax3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax3}>
      <Text style={[styles.cadastro, styles.timeClr]}>Cadastro</Text>
      <View
        style={[styles.iphone14ProMax3Child, styles.iphone14ChildLayout1]}
      />
      <View style={[styles.iphone14ProMax3Item, styles.iphone14ChildLayout1]} />
      <View
        style={[styles.iphone14ProMax3Inner, styles.iphone14ChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.iphone14ChildLayout1]} />
      <View
        style={[styles.iphone14ProMax3Child1, styles.iphone14ChildLayout1]}
      />
      <Text style={[styles.telefone, styles.cpfClr]}>Telefone</Text>
      <Text style={[styles.nome, styles.nomePosition]}>Nome</Text>
      <Text style={[styles.eMail, styles.eMailLayout]}>E-mail</Text>
      <Text style={[styles.senha, styles.cpfClr]}>Senha</Text>
      <Text style={[styles.cpf, styles.cpfLayout]}>CPF</Text>
      <View style={[styles.iphone14ProMax3Child2, styles.eMailLayout]} />
      <Pressable
        style={styles.cadastrar}
        onPress={() => navigation.navigate("IPhone14ProMax2")}
      >
        <Text style={styles.cadastrar1}>Cadastrar</Text>
      </Pressable>
      <Pressable
        style={[styles.setaEsquerda1, styles.cpfLayout]}
        onPress={() => navigation.navigate("IPhone14ProMax1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/setaesquerda-1.png")}
        />
      </Pressable>
      <View
        style={[styles.iphone14ProMax3Child3, styles.iphone14ChildLayout]}
      />
      <View
        style={[styles.iphone14ProMax3Child4, styles.iphone14ChildLayout]}
      />
      <View style={styles.iphoneStatusBar}>
        <Image
          style={[styles.wifiIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/-battery1.png")}
        />
        <Image
          style={styles.receptionIcon}
          resizeMode="cover"
          source={require("../assets/reception.png")}
        />
        <Text style={[styles.time, styles.timeClr]}>19:02</Text>
      </View>
      <Text style={[styles.myHouseDisk, styles.nomePosition]}>
        My House Disk Service
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  iphone14ChildLayout1: {
    height: 58,
    width: 268,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  cpfClr: {
    color: Color.colorGray_100,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
  },
  nomePosition: {
    left: 86,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
    position: "absolute",
  },
  eMailLayout: {
    height: 43,
    position: "absolute",
  },
  cpfLayout: {
    height: 31,
    position: "absolute",
  },
  iphone14ChildLayout: {
    height: 120,
    width: 430,
    left: 0,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconPosition: {
    height: 13,
    top: 17,
    position: "absolute",
  },
  cadastro: {
    top: 270,
    left: 135,
    fontSize: FontSize.size_21xl,
    letterSpacing: -0.8,
    width: 145,
    height: 49,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  iphone14ProMax3Child: {
    top: 371,
    left: 77,
    width: 268,
    borderRadius: Border.br_xl,
  },
  iphone14ProMax3Item: {
    top: 443,
    left: 75,
  },
  iphone14ProMax3Inner: {
    top: 515,
    left: 77,
    width: 268,
    borderRadius: Border.br_xl,
  },
  rectangleView: {
    top: 587,
    left: 75,
  },
  iphone14ProMax3Child1: {
    top: 659,
    left: 75,
  },
  telefone: {
    top: 669,
    left: 82,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
    position: "absolute",
  },
  nome: {
    top: 380,
    color: Color.colorGray_100,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
  },
  eMail: {
    top: 454,
    width: 115,
    color: Color.colorGray_100,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    left: 75,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  senha: {
    top: 530,
    left: 82,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
    position: "absolute",
  },
  cpf: {
    top: 597,
    left: 65,
    width: 89,
    color: Color.colorGray_100,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  iphone14ProMax3Child2: {
    top: 731,
    left: 117,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorKhaki_100,
    width: 185,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 43,
  },
  cadastrar1: {
    color: "#010101",
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  cadastrar: {
    left: 142,
    top: 733,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  setaEsquerda1: {
    left: 10,
    top: 120,
    width: 45,
  },
  iphone14ProMax3Child3: {
    top: -22,
    backgroundColor: Color.colorMidnightblue,
  },
  iphone14ProMax3Child4: {
    top: -29,
    backgroundColor: Color.colorMediumslateblue,
  },
  wifiIcon: {
    right: 58,
    width: 18,
  },
  batteryIcon: {
    right: 26,
    width: 27,
  },
  receptionIcon: {
    height: 11,
    width: 18,
  },
  time: {
    top: 15,
    left: 39,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "center",
  },
  iphoneStatusBar: {
    top: 0,
    left: 9,
    width: 421,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  myHouseDisk: {
    top: 53,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    lineHeight: 24,
    color: Color.colorWhite,
    width: 258,
    height: 30,
  },
  iphone14ProMax3: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14ProMax3;
