import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone14ProMax4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax4}>
      <Text style={[styles.cadastro, styles.timeFlexBox]}>Cadastro</Text>
      <View
        style={[styles.iphone14ProMax4Child, styles.iphone14ChildLayout1]}
      />
      <View style={[styles.iphone14ProMax4Item, styles.iphone14ChildLayout1]} />
      <View
        style={[styles.iphone14ProMax4Inner, styles.iphone14ChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.iphone14ChildLayout1]} />
      <View
        style={[styles.iphone14ProMax4Child1, styles.iphone14ChildLayout1]}
      />
      <Text style={[styles.telefone, styles.nomeTypo]}>Telefone</Text>
      <Text style={[styles.nome, styles.nomeTypo]}>Nome</Text>
      <Text style={[styles.eMail, styles.eMailLayout]}>E-mail</Text>
      <Text style={[styles.senha, styles.nomeTypo]}>Senha</Text>
      <View style={[styles.iphone14ProMax4Child2, styles.eMailLayout]} />
      <Pressable
        style={styles.cadastrar}
        onPress={() => navigation.navigate("IPhone14ProMax2")}
      >
        <Text style={styles.cadastrar1}>Cadastrar</Text>
      </Pressable>
      <View
        style={[styles.iphone14ProMax4Child3, styles.iphone14ChildLayout1]}
      />
      <Text style={[styles.categoria, styles.nomeTypo]}>Categoria</Text>
      <Pressable
        style={styles.setaEsquerda1}
        onPress={() => navigation.navigate("IPhone14ProMax1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/setaesquerda-1.png")}
        />
      </Pressable>
      <View
        style={[styles.iphone14ProMax4Child4, styles.iphone14ChildLayout]}
      />
      <View
        style={[styles.iphone14ProMax4Child5, styles.iphone14ChildLayout]}
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
        <Text style={[styles.time, styles.timeFlexBox]}>19:02</Text>
      </View>
      <Text style={[styles.myHouseDisk, styles.timeFlexBox]}>
        My House Disk Service
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
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
  nomeTypo: {
    color: Color.colorGray_100,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  eMailLayout: {
    height: 43,
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
    fontSize: FontSize.size_21xl,
    letterSpacing: -0.8,
    width: 275,
    height: 49,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
    left: 83,
  },
  iphone14ProMax4Child: {
    top: 370,
    left: 82,
    width: 268,
    borderRadius: Border.br_xl,
  },
  iphone14ProMax4Item: {
    top: 433,
    left: 82,
    width: 268,
    borderRadius: Border.br_xl,
  },
  iphone14ProMax4Inner: {
    top: 496,
    left: 82,
    width: 268,
    borderRadius: Border.br_xl,
  },
  rectangleView: {
    top: 559,
    left: 83,
  },
  iphone14ProMax4Child1: {
    top: 624,
    left: 82,
    width: 268,
    borderRadius: Border.br_xl,
  },
  telefone: {
    top: 636,
    left: 89,
    position: "absolute",
  },
  nome: {
    top: 380,
    left: 93,
    position: "absolute",
  },
  eMail: {
    top: 444,
    left: 77,
    width: 115,
    color: Color.colorGray_100,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  senha: {
    top: 506,
    left: 88,
    position: "absolute",
  },
  iphone14ProMax4Child2: {
    top: 762,
    left: 123,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorKhaki_100,
    width: 185,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 43,
  },
  cadastrar1: {
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  cadastrar: {
    left: 151,
    top: 765,
    position: "absolute",
  },
  iphone14ProMax4Child3: {
    top: 688,
    left: 82,
    width: 268,
    borderRadius: Border.br_xl,
  },
  categoria: {
    top: 700,
    left: 87,
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
    height: 31,
    position: "absolute",
  },
  iphone14ProMax4Child4: {
    top: -22,
    backgroundColor: Color.colorMidnightblue,
  },
  iphone14ProMax4Child5: {
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
    color: Color.colorBlack,
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
    left: 86,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    lineHeight: 24,
    color: Color.colorWhite,
    width: 258,
    height: 30,
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  iphone14ProMax4: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14ProMax4;
