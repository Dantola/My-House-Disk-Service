import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone14ProMax2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax2}>
      <View style={[styles.iphone14ProMax2Child, styles.iphone14Layout]} />
      <Text style={[styles.login, styles.timeFlexBox]}>{`Login
`}</Text>
      <Text style={[styles.nome, styles.nomeTypo]}>{`Nome
`}</Text>
      <View style={[styles.iphone14ProMax2Item, styles.iphone14Layout]} />
      <Text style={[styles.senha, styles.nomeTypo]}>Senha</Text>
      <View style={styles.iphone14ProMax2Inner} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("IPhone14ProMax5")}
      />
      <Text style={[styles.logar, styles.logarPosition]}>Logar</Text>
      <View style={[styles.rectangleView, styles.recuperarPosition]} />
      <Text style={[styles.recuperar, styles.recuperarPosition]}>
        Recuperar
      </Text>
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
        style={[styles.iphone14ProMax2Child1, styles.iphone14ChildLayout]}
      />
      <View
        style={[styles.iphone14ProMax2Child2, styles.iphone14ChildLayout]}
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
  iphone14Layout: {
    height: 56,
    width: 274,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 78,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  nomeTypo: {
    opacity: 0.25,
    height: 26,
    width: 99,
    left: 79,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
    position: "absolute",
  },
  rectangleLayout: {
    height: 43,
    width: 185,
    backgroundColor: Color.colorKhaki_100,
    borderRadius: Border.br_16xl,
    left: 120,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  logarPosition: {
    top: 551,
    position: "absolute",
  },
  recuperarPosition: {
    top: 612,
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
  iphone14ProMax2Child: {
    top: 378,
  },
  login: {
    top: 270,
    left: 156,
    fontSize: FontSize.size_21xl,
    letterSpacing: -0.8,
    width: 114,
    height: 67,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  nome: {
    top: 387,
  },
  iphone14ProMax2Item: {
    top: 459,
  },
  senha: {
    top: 468,
  },
  iphone14ProMax2Inner: {
    top: 389,
    left: 175,
    borderRightWidth: 1,
    width: 1,
    height: 36,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  rectanglePressable: {
    top: 551,
    position: "absolute",
  },
  logar: {
    left: 176,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  rectangleView: {
    height: 43,
    width: 185,
    backgroundColor: Color.colorKhaki_100,
    borderRadius: Border.br_16xl,
    left: 120,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  recuperar: {
    left: 142,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
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
  iphone14ProMax2Child1: {
    top: -22,
    backgroundColor: Color.colorMidnightblue,
  },
  iphone14ProMax2Child2: {
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
  iphone14ProMax2: {
    backgroundColor: "#fffbfb",
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone14ProMax2;
