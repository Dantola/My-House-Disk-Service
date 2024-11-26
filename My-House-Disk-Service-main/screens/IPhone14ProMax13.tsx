import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const IPhone14ProMax13 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax13}>
      <Text style={[styles.perfil, styles.timeFlexBox]}>{`Perfil
`}</Text>
      <Text style={[styles.search, styles.searchFlexBox]}>Search...</Text>
      <View style={styles.iphone14ProMax13Child} />
      <Image
        style={styles.perfilDeUsuario2Icon}
        resizeMode="cover"
        source={require("../assets/perfildeusuario-2.png")}
      />
      <Pressable
        style={styles.basicoutlineButton}
        onPress={() => navigation.navigate("IPhone14ProMax1")}
      >
        <View
          style={[
            styles.basicoutlineSmallBase,
            styles.iphone14ProMax13ItemBorder,
          ]}
        >
          <View style={styles.content}>
            <Text style={[styles.button, styles.searchTypo]}>Sair</Text>
            <Image
              style={styles.iconSmall}
              resizeMode="cover"
              source={require("../assets/icon--small2.png")}
            />
          </View>
        </View>
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>19 992623641</Text>
      <Text style={[styles.lucasbreve13gmailcom, styles.textTypo]}>
        Lucasbreve13@gmail.com
      </Text>
      <Text style={[styles.lucasGomez, styles.textTypo]}>Lucas Gomez</Text>
      <Image
        style={styles.cardapio21}
        resizeMode="cover"
        source={require("../assets/cardapio-2-1.png")}
      />
      <View
        style={[styles.iphone14ProMax13Item, styles.iphone14ProMax13ItemBorder]}
      />
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
      <Image
        style={styles.perfilDeUsuario1Icon}
        resizeMode="cover"
        source={require("../assets/perfildeusuario-1.png")}
      />
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
      <View
        style={[styles.iphone14ProMax13Inner, styles.rectangleViewLayout]}
      />
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
  searchFlexBox: {
    alignItems: "flex-end",
    display: "flex",
  },
  iphone14ProMax13ItemBorder: {
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  searchTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    color: Color.colorBlack,
    position: "absolute",
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
  perfil: {
    top: 114,
    left: 101,
    fontSize: FontSize.size_17xl,
    letterSpacing: -0.7,
    lineHeight: 36,
    width: 243,
    height: 38,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  search: {
    height: "1.93%",
    width: "15.12%",
    top: "20.49%",
    left: "15.12%",
    fontFamily: FontFamily.helvetica,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
    alignItems: "flex-end",
    display: "flex",
    position: "absolute",
  },
  iphone14ProMax13Child: {
    top: 170,
    left: 28,
    borderRadius: Border.br_31xl,
    backgroundColor: "rgba(253, 245, 156, 0.76)",
    borderWidth: 1,
    width: 369,
    height: 616,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  perfilDeUsuario2Icon: {
    top: 214,
    left: 60,
    width: 92,
    height: 90,
    position: "absolute",
  },
  button: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  iconSmall: {
    width: 16,
    height: 16,
    display: "none",
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
    marginTop: 266,
    top: "50%",
    left: 186,
    width: 59,
    height: 39,
    position: "absolute",
  },
  text: {
    top: 379,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    left: 49,
  },
  lucasbreve13gmailcom: {
    top: 336,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    left: 49,
  },
  lucasGomez: {
    top: 223,
    left: 125,
    fontSize: 25,
    width: 206,
    height: 50,
    alignItems: "flex-end",
    display: "flex",
  },
  cardapio21: {
    top: 109,
    left: 359,
    width: 65,
    height: 46,
    position: "absolute",
  },
  iphone14ProMax13Item: {
    top: 866,
    left: 30,
    borderRadius: Border.br_6xl,
    width: 375,
    height: 57,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  perfilDeUsuario1Icon: {
    top: 874,
    height: 42,
    width: 42,
    left: 49,
    position: "absolute",
  },
  setaEsquerda1: {
    left: 10,
    top: 120,
    width: 45,
    height: 31,
    position: "absolute",
  },
  iphone14ProMax13Inner: {
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
    textAlign: "center",
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
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  iphone14ProMax13: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14ProMax13;
