import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone14ProMax6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax6}>
      <Text style={[styles.categorias, styles.timeFlexBox]}>Categorias</Text>
      <Pressable
        style={[styles.basicoutlineButton, styles.basicoutlinePosition]}
        onPress={() => navigation.navigate("IPhone14ProMax8")}
      >
        <View style={[styles.basicoutlineLargeBase, styles.basicoutlineBorder]}>
          <View style={styles.content}>
            <Text style={styles.buttonTypo}>Pedreiro</Text>
            <Image
              style={styles.iconLarge}
              resizeMode="cover"
              source={require("../assets/icon--large.png")}
            />
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.basicoutlineLargeBase1, styles.basicoutlineBorder]}
        onPress={() => navigation.navigate("IPhone14ProMax12")}
      >
        <View style={styles.content}>
          <Text style={styles.buttonTypo}>Pintor</Text>
          <Image
            style={styles.iconLarge}
            resizeMode="cover"
            source={require("../assets/icon--large.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.basicoutlineLargeBase2, styles.basicoutlineBorder]}
        onPress={() => navigation.navigate("IPhone14ProMax11")}
      >
        <View style={styles.content}>
          <Text style={[styles.button2, styles.buttonTypo]}>Limpeza</Text>
          <Image
            style={styles.iconLarge}
            resizeMode="cover"
            source={require("../assets/icon--large.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.basicoutlineLargeBase3, styles.basicoutlineBorder]}
        onPress={() => navigation.navigate("IPhone14ProMax10")}
      >
        <View style={styles.content}>
          <Text style={[styles.button3, styles.button3Clr]}>Eletricista</Text>
          <Image
            style={styles.iconLarge}
            resizeMode="cover"
            source={require("../assets/icon--large.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.basicoutlineLargeBase4, styles.basicoutlineBorder]}
        onPress={() => navigation.navigate("IPhone14ProMax9")}
      >
        <View style={styles.content}>
          <Text style={[styles.button3, styles.button3Clr]}>Encanador</Text>
          <Image
            style={styles.iconLarge}
            resizeMode="cover"
            source={require("../assets/icon--large.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={styles.setaEsquerda1}
        onPress={() => navigation.navigate("IPhone14ProMax5")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/setaesquerda-1.png")}
        />
      </Pressable>
      <View style={[styles.iphone14ProMax6Child, styles.cardapio11Position]} />
      <Image
        style={[styles.cardapio11, styles.cardapio11Position]}
        resizeMode="cover"
        source={require("../assets/cardapio-1-1.png")}
      />
      <Image
        style={styles.lupa1Icon}
        resizeMode="cover"
        source={require("../assets/lupa-1.png")}
      />
      <View style={[styles.iphone14ProMax6Item, styles.iphone14Border]} />
      <Pressable
        style={[styles.botaoHome1, styles.botaoHome1Position]}
        onPress={() => navigation.navigate("IPhone14ProMax5")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/botaohome-1.png")}
        />
      </Pressable>
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
      <Text style={styles.search}>Search...</Text>
      <View style={[styles.iphone14ProMax6Inner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
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
        <Text style={[styles.time, styles.timeFlexBox]}>19:02</Text>
      </View>
      <Text style={[styles.myHouseDisk, styles.button3Clr]}>
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
  basicoutlinePosition: {
    width: 191,
    left: 127,
    position: "absolute",
  },
  basicoutlineBorder: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderWidth: 2,
    borderColor: Color.colorBlue,
    borderStyle: "solid",
    backgroundColor: Color.colorBlue,
    borderRadius: Border.br_5xs,
  },
  buttonTypo: {
    width: 102,
    textAlign: "right",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.size_5xl,
  },
  button3Clr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  cardapio11Position: {
    height: 46,
    top: 118,
    position: "absolute",
  },
  iphone14Border: {
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderStyle: "solid",
  },
  botaoHome1Position: {
    top: 873,
    width: 42,
  },
  iphoneStatusBarLayout: {
    height: 44,
    position: "absolute",
  },
  rectangleViewLayout: {
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
  categorias: {
    top: 175,
    left: 101,
    fontSize: FontSize.size_17xl,
    letterSpacing: -0.7,
    lineHeight: 36,
    color: "#040404",
    width: 243,
    height: 38,
    fontFamily: FontFamily.portLligatSlabRegular,
    textAlign: "center",
  },
  iconLarge: {
    width: 32,
    display: "none",
    marginLeft: 8,
    height: 32,
  },
  content: {
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  basicoutlineLargeBase: {
    alignSelf: "stretch",
  },
  basicoutlineButton: {
    top: 245,
    backgroundColor: Color.colorWhite,
  },
  basicoutlineLargeBase1: {
    top: 623,
    width: 191,
    left: 127,
    position: "absolute",
  },
  button2: {
    height: 32,
  },
  basicoutlineLargeBase2: {
    top: 527,
    width: 191,
    left: 127,
    position: "absolute",
  },
  button3: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 32,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  basicoutlineLargeBase3: {
    top: 431,
    width: 191,
    left: 127,
    position: "absolute",
  },
  basicoutlineLargeBase4: {
    top: 339,
    left: 127,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderWidth: 2,
    borderColor: Color.colorBlue,
    borderStyle: "solid",
    backgroundColor: Color.colorBlue,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  setaEsquerda1: {
    left: 10,
    top: 127,
    height: 31,
    width: 45,
    position: "absolute",
  },
  iphone14ProMax6Child: {
    left: 62,
    borderRadius: Border.br_11xl,
    width: 296,
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderStyle: "solid",
  },
  cardapio11: {
    left: 368,
    width: 45,
  },
  lupa1Icon: {
    top: 119,
    left: 307,
    width: 36,
    height: 41,
    position: "absolute",
  },
  iphone14ProMax6Item: {
    top: 866,
    left: 30,
    borderRadius: Border.br_6xl,
    width: 375,
    height: 57,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  botaoHome1: {
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
    top: "14.27%",
    left: "20%",
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
    fontFamily: FontFamily.helvetica,
    color: Color.colorGray_200,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "left",
    position: "absolute",
  },
  iphone14ProMax6Inner: {
    top: -22,
    backgroundColor: Color.colorMidnightblue,
  },
  rectangleView: {
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
    letterSpacing: -0.5,
    lineHeight: 24,
    width: 258,
    height: 30,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
    position: "absolute",
  },
  iphone14ProMax6: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14ProMax6;
