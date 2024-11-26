import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone14ProMax1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax1}>
      <View style={[styles.iphone14ProMax1Child, styles.iphone14Layout]} />
      <View style={[styles.iphone14ProMax1Item, styles.iphone14Layout]} />
      <View style={styles.iphone14ProMax1Inner} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={[styles.cadastrar, styles.cadastrarLayout]}>Cadastrar</Text>
      <Text style={[styles.queroSerUm, styles.queroLayout]}>
        Quero ser um prestador
      </Text>
      <View style={styles.lineView} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.iphone14ProMax1Child1, styles.rectanglePressableLayout]}
      />
      <Pressable
        style={styles.login1}
        onPress={() => navigation.navigate("IPhone14ProMax2")}
      >
        <Text style={[styles.login2, styles.login2Typo]}>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IPhone14ProMax3")}
      />
      <Text style={[styles.cadastrar1, styles.login2Typo]}>Cadastrar</Text>
      <Pressable
        style={styles.queroPosition}
        onPress={() => navigation.navigate("IPhone14ProMax4")}
      >
        <Text style={styles.queroLayout}>Quero ser um prestador</Text>
      </Pressable>
      <View style={styles.lineView} />
      <View
        style={[styles.iphone14ProMax1Child3, styles.iphone14ChildLayout]}
      />
      <View
        style={[styles.iphone14ProMax1Child4, styles.iphone14ChildLayout]}
      />
      <View style={[styles.iphoneStatusBar, styles.rectangleViewPosition]}>
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
        <Text style={styles.time}>19:02</Text>
      </View>
      <Text style={[styles.myHouseDisk, styles.login2Typo]}>
        My House Disk Service
      </Text>
      <Image
        style={styles.marteloNaMaoDentroDeUmaCIcon}
        resizeMode="cover"
        source={require("../assets/martelonamaodentrodeumacasa-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone14Layout: {
    height: 70,
    width: 324,
    left: 53,
    position: "absolute",
  },
  loginTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  cadastrarLayout: {
    height: 34,
    width: 250,
    lineHeight: 36,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
  },
  queroLayout: {
    height: 56,
    width: 308,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  rectangleViewPosition: {
    left: 9,
    position: "absolute",
  },
  rectanglePressableLayout: {
    borderWidth: 2,
    backgroundColor: Color.colorBlue,
    borderRadius: Border.br_16xl,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 70,
    width: 324,
    left: 53,
    position: "absolute",
  },
  login2Typo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  iphone14ChildLayout: {
    height: 120,
    width: 430,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 13,
    top: 17,
    position: "absolute",
  },
  iphone14ProMax1Child: {
    top: 614,
    backgroundColor: Color.colorWhite,
  },
  iphone14ProMax1Item: {
    backgroundColor: "#00cecb",
    top: 709,
  },
  iphone14ProMax1Inner: {
    top: 619,
    left: 60,
    width: 311,
    height: 61,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  login: {
    top: 626,
    left: 131,
    width: 169,
    height: 47,
    lineHeight: 36,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
    position: "absolute",
  },
  cadastrar: {
    left: 90,
    top: 725,
    width: 250,
    position: "absolute",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  queroSerUm: {
    left: 58,
    top: 788,
    position: "absolute",
  },
  lineView: {
    top: 809,
    left: 120,
    borderTopWidth: 1,
    width: 186,
    height: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleView: {
    top: 630,
    width: 412,
    height: 293,
    backgroundColor: Color.colorWhite,
  },
  iphone14ProMax1Child1: {
    top: 614,
  },
  login2: {
    height: 34,
    width: 250,
    lineHeight: 36,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
  },
  login1: {
    left: 87,
    top: 632,
    position: "absolute",
  },
  rectanglePressable: {
    top: 709,
  },
  cadastrar1: {
    height: 34,
    width: 250,
    lineHeight: 36,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    left: 90,
    top: 725,
    position: "absolute",
  },
  queroPosition: {
    left: 58,
    top: 788,
    position: "absolute",
  },
  iphone14ProMax1Child3: {
    top: -22,
    backgroundColor: Color.colorMidnightblue,
  },
  iphone14ProMax1Child4: {
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
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplay,
    letterSpacing: -0.4,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iphoneStatusBar: {
    top: 0,
    width: 421,
    height: 44,
    overflow: "hidden",
  },
  myHouseDisk: {
    top: 53,
    left: 86,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    lineHeight: 24,
    width: 258,
    height: 30,
    position: "absolute",
  },
  marteloNaMaoDentroDeUmaCIcon: {
    top: 173,
    left: 25,
    width: 384,
    height: 389,
    position: "absolute",
  },
  iphone14ProMax1: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14ProMax1;
