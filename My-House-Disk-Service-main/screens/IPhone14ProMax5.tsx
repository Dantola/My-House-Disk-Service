import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const IPhone14ProMax5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax5}>
      <Text style={[styles.inicio, styles.inicioTypo]}>{`Inicio
`}</Text>
      <View style={[styles.iphone14ProMax5Child, styles.iphone14Layout]} />
      <View style={[styles.iphone14ProMax5Item, styles.iphone14Layout]} />
      <Pressable
        style={[styles.basicoutlineButton, styles.basicoutlineLayout]}
        onPress={() => navigation.navigate("IPhone14ProMax7")}
      >
        <View
          style={[styles.basicoutlineSmallBase, styles.rectangleViewBorder]}
        >
          <View style={styles.content}>
            <Text style={[styles.button, styles.buttonTypo]}>Orçar</Text>
            <Image
              style={styles.iconSmall}
              resizeMode="cover"
              source={require("../assets/icon--small2.png")}
            />
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.basicoutlineButton1, styles.basicoutlineLayout]}
        onPress={() => navigation.navigate("IPhone14ProMax7")}
      >
        <View
          style={[styles.basicoutlineSmallBase, styles.rectangleViewBorder]}
        >
          <View style={styles.content}>
            <Text style={[styles.button, styles.buttonTypo]}>Orçar</Text>
            <Image
              style={styles.iconSmall}
              resizeMode="cover"
              source={require("../assets/icon--small2.png")}
            />
          </View>
        </View>
      </Pressable>
      <Text style={[styles.seuZPedreiro, styles.timePosition]}>
        Seu Zé Pedreiro
      </Text>
      <Text style={[styles.lucioEncanador, styles.timePosition]}>
        Lucio Encanador
      </Text>
      <View style={[styles.iphone14ProMax5Inner, styles.cardapio11Layout1]} />
      <Pressable
        style={[styles.cardapio11, styles.cardapio11Layout]}
        onPress={() => navigation.navigate("IPhone14ProMax6")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/cardapio-1-1.png")}
        />
      </Pressable>
      <Image
        style={styles.lupa1Icon}
        resizeMode="cover"
        source={require("../assets/lupa-1.png")}
      />
      <Image
        style={[styles.setaEsquerda1Icon, styles.cardapio11Layout]}
        resizeMode="cover"
        source={require("../assets/setaesquerda-1.png")}
      />
      <Image
        style={[styles.setaEsquerda1Icon, styles.cardapio11Layout]}
        resizeMode="cover"
        source={require("../assets/setaesquerda-1.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Image
        style={[styles.botaoHome1Icon, styles.botaoHome1IconPosition]}
        resizeMode="cover"
        source={require("../assets/botaohome-1.png")}
      />
      <Pressable
        style={[styles.hangoutsDoGoogle1, styles.iphoneStatusBarLayout]}
        onPress={() => navigation.navigate("IPhone14ProMax7")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/hangoutsdogoogle-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.perfilDeUsuario1}
        onPress={() => navigation.navigate("IPhone14ProMax13")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/perfildeusuario-1.png")}
        />
      </Pressable>
      <Text style={[styles.search, styles.buttonTypo]}>Search...</Text>
      <View
        style={[styles.iphone14ProMax5Child1, styles.iphone14ChildLayout]}
      />
      <View
        style={[styles.iphone14ProMax5Child2, styles.iphone14ChildLayout]}
      />
      <View style={[styles.iphoneStatusBar, styles.iphoneStatusBarLayout]}>
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
        <Text style={[styles.time, styles.timePosition]}>19:02</Text>
      </View>
      <Text style={[styles.myHouseDisk, styles.inicioTypo]}>
        My House Disk Service
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inicioTypo: {
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
    position: "absolute",
  },
  iphone14Layout: {
    height: 211,
    width: 380,
    borderWidth: 4,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    left: 25,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  basicoutlineLayout: {
    height: 24,
    width: 91,
    left: 300,
    position: "absolute",
  },
  rectangleViewBorder: {
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  buttonTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  timePosition: {
    left: 39,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  cardapio11Layout1: {
    height: 46,
    top: 126,
  },
  cardapio11Layout: {
    width: 45,
    position: "absolute",
  },
  botaoHome1IconPosition: {
    top: 873,
    width: 42,
  },
  iphoneStatusBarLayout: {
    height: 44,
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
  inicio: {
    top: 204,
    left: 100,
    width: 243,
    height: 38,
    color: Color.colorBlack,
    lineHeight: 36,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
  },
  iphone14ProMax5Child: {
    top: 262,
  },
  iphone14ProMax5Item: {
    top: 486,
  },
  button: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  iconSmall: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  content: {
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  basicoutlineSmallBase: {
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  basicoutlineButton: {
    top: 275,
  },
  basicoutlineButton1: {
    top: 498,
  },
  seuZPedreiro: {
    top: 418,
    fontFamily: FontFamily.portLligatSlabRegular,
    left: 39,
    lineHeight: 36,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
  },
  lucioEncanador: {
    top: 638,
    width: 228,
    height: 32,
    fontFamily: FontFamily.portLligatSlabRegular,
    left: 39,
    lineHeight: 36,
    letterSpacing: -0.7,
    fontSize: FontSize.size_17xl,
  },
  iphone14ProMax5Inner: {
    left: 62,
    borderRadius: Border.br_11xl,
    width: 296,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cardapio11: {
    left: 368,
    height: 46,
    top: 126,
  },
  lupa1Icon: {
    top: 127,
    left: 307,
    width: 36,
    height: 41,
    position: "absolute",
  },
  setaEsquerda1Icon: {
    top: 135,
    left: 10,
    height: 31,
  },
  rectangleView: {
    top: 866,
    left: 30,
    borderRadius: Border.br_6xl,
    width: 375,
    height: 57,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  botaoHome1Icon: {
    left: 194,
    height: 43,
    width: 42,
    position: "absolute",
  },
  hangoutsDoGoogle1: {
    left: 344,
    width: 42,
    top: 873,
  },
  perfilDeUsuario1: {
    left: 49,
    top: 874,
    height: 42,
    width: 42,
    position: "absolute",
  },
  search: {
    height: "1.93%",
    width: "15.12%",
    top: "15.13%",
    left: "20%",
    letterSpacing: 1,
    fontFamily: FontFamily.helvetica,
    color: Color.colorGray_200,
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
  },
  iphone14ProMax5Child1: {
    top: -22,
    backgroundColor: Color.colorMidnightblue,
  },
  iphone14ProMax5Child2: {
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
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplay,
  },
  iphoneStatusBar: {
    top: 0,
    left: 9,
    width: 421,
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
  },
  iphone14ProMax5: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14ProMax5;
