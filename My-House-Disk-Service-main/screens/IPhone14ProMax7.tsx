import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone14ProMax7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone14ProMax7}>
      <Text style={[styles.chat, styles.chatClr]}>{`Chat
`}</Text>
      <View style={[styles.iphone14ProMax7Child, styles.iphone14Border]} />
      <View style={styles.group}>
        <Text style={[styles.possoFazerO, styles.vaiFicar4Typo]}>
          Posso fazer o orçamento?
        </Text>
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />
        <Text style={[styles.mar, styles.marTypo]}>23 Mar</Text>
        <Text style={[styles.rubensPintor, styles.marTypo]}>Rubens Pintor</Text>
        <Text style={[styles.essaSemanaS, styles.essaSemanaSClr]}>
          Essa semana só consigo na terça
        </Text>
        <Image
          style={styles.imageIcon1}
          resizeMode="cover"
          source={require("../assets/image1.png")}
        />
        <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
        <Text style={[styles.brunaLimpeza, styles.sunTypo]}>Bruna Limpeza</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Text style={[styles.belezaFicoNo, styles.vaiFicar4Typo]}>
          Beleza fico no aguardo
        </Text>
        <Image
          style={[styles.imageIcon2, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image2.png")}
        />
        <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
        <Text style={[styles.pedroEncanador, styles.tueTypo]}>
          Pedro Encanador
        </Text>
        <Text style={[styles.vaiFicar4, styles.vaiFicar4Typo]}>
          Vai ficar 4 mil a parede
        </Text>
        <Image
          style={[styles.imageIcon3, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image3.png")}
        />
        <Text style={[styles.text, styles.textLayout]}>08:43</Text>
        <Text style={[styles.joPedreiro, styles.marTypo]}>Jão Pedreiro</Text>
      </View>
      <View style={styles.rectangle} />
      <Text style={[styles.search, styles.text1FlexBox]}>Search...</Text>
      <View style={[styles.group1, styles.groupLayout]}>
        <View style={styles.rectangle395} />
        <Text style={[styles.text1, styles.text1FlexBox]}>+</Text>
      </View>
      <Image
        style={[styles.groupIcon1, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <View style={[styles.iphone14ProMax7Item, styles.iphone14Border]} />
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
      <Image
        style={[styles.hangoutsDoGoogle1Icon, styles.botaoHome1Position]}
        resizeMode="cover"
        source={require("../assets/hangoutsdogoogle-1.png")}
      />
      <Pressable
        style={[styles.perfilDeUsuario1, styles.textLayout]}
        onPress={() => navigation.navigate("IPhone14ProMax13")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/perfildeusuario-1.png")}
        />
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
      <View style={[styles.iphone14ProMax7Inner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
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
        <Text style={[styles.time, styles.chatClr]}>19:02</Text>
      </View>
      <Text style={[styles.myHouseDisk, styles.essaSemanaSClr]}>
        My House Disk Service
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatClr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  iphone14Border: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 30,
    position: "absolute",
  },
  vaiFicar4Typo: {
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    left: 60,
    position: "absolute",
  },
  imageIconLayout: {
    height: 94,
    width: 92,
    left: -20,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  marTypo: {
    height: 19,
    fontSize: FontSize.size_mini,
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    color: Color.colorWhite,
    letterSpacing: 1,
  },
  essaSemanaSClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  sunTypo: {
    top: 148,
    height: 19,
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "57.65%",
    top: "36.47%",
    height: "5.88%",
    position: "absolute",
    overflow: "hidden",
  },
  tueTypo: {
    top: 74,
    height: 19,
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    letterSpacing: 1,
    position: "absolute",
  },
  textLayout: {
    width: 42,
    position: "absolute",
  },
  text1FlexBox: {
    alignItems: "flex-end",
    display: "flex",
    letterSpacing: 1,
    position: "absolute",
  },
  groupLayout: {
    width: 40,
    height: 44,
    top: 196,
    position: "absolute",
  },
  botaoHome1Position: {
    top: 873,
    width: 42,
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
  chat: {
    top: 114,
    left: 101,
    fontSize: FontSize.size_17xl,
    letterSpacing: -0.7,
    lineHeight: 36,
    width: 243,
    height: 38,
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  iphone14ProMax7Child: {
    top: 166,
    borderRadius: Border.br_31xl,
    backgroundColor: "rgba(116, 112, 112, 0.8)",
    borderWidth: 6,
    width: 373,
    height: 689,
  },
  possoFazerO: {
    top: 246,
    width: 210,
  },
  imageIcon: {
    top: 202,
  },
  mar: {
    left: 270,
    width: 52,
    textAlign: "right",
    top: 221,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rubensPintor: {
    width: 121,
    top: 221,
    fontSize: FontSize.size_mini,
    position: "absolute",
    textAlign: "left",
    left: 60,
  },
  essaSemanaS: {
    top: 172,
    width: 203,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    left: 60,
  },
  imageIcon1: {
    top: 139,
    left: -14,
    width: 112,
    height: 114,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  sun: {
    left: 294,
    width: 28,
    textAlign: "right",
  },
  brunaLimpeza: {
    width: 119,
    textAlign: "left",
    left: 60,
  },
  vectorIcon: {
    width: "5.19%",
    right: "18.42%",
    left: "76.4%",
  },
  groupIcon: {
    width: "4.66%",
    right: "25.16%",
    left: "70.19%",
  },
  belezaFicoNo: {
    top: 98,
    width: 161,
  },
  imageIcon2: {
    top: 55,
  },
  tue: {
    left: 295,
    width: 27,
    textAlign: "right",
  },
  pedroEncanador: {
    width: 141,
    textAlign: "left",
    left: 60,
  },
  vaiFicar4: {
    top: 24,
    width: 186,
  },
  imageIcon3: {
    top: -19,
  },
  text: {
    left: 280,
    top: 0,
    height: 19,
    fontSize: FontSize.size_mini,
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    color: Color.colorWhite,
    letterSpacing: 1,
    textAlign: "right",
  },
  joPedreiro: {
    width: 122,
    top: 0,
    textAlign: "left",
    left: 60,
    position: "absolute",
  },
  group: {
    top: 291,
    left: 51,
    width: 322,
    height: 269,
    position: "absolute",
  },
  rectangle: {
    left: 50,
    backgroundColor: Color.colorGray_100,
    width: 275,
    height: 44,
    borderRadius: Border.br_3xs,
    top: 196,
    position: "absolute",
  },
  search: {
    height: "1.93%",
    width: "15.12%",
    top: "22.42%",
    left: "15.12%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.helvetica,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  rectangle395: {
    backgroundColor: Color.colorKhaki_100,
    left: 0,
    width: 40,
    height: 44,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 10,
    left: 14,
    fontSize: FontSize.size_xl,
    color: "#080808",
    width: 12,
    height: 25,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    display: "flex",
  },
  group1: {
    left: 340,
  },
  groupIcon1: {
    left: 285,
  },
  iphone14ProMax7Item: {
    top: 866,
    borderRadius: Border.br_6xl,
    borderWidth: 2,
    width: 375,
    height: 57,
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botaoHome1: {
    left: 194,
    height: 43,
  },
  hangoutsDoGoogle1Icon: {
    left: 344,
    height: 44,
  },
  perfilDeUsuario1: {
    left: 49,
    top: 874,
    height: 42,
  },
  setaEsquerda1: {
    left: 10,
    top: 120,
    width: 45,
    height: 31,
    position: "absolute",
  },
  iphone14ProMax7Inner: {
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
    textAlign: "center",
  },
  iphoneStatusBar: {
    left: 9,
    width: 421,
    height: 44,
    top: 0,
    position: "absolute",
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
    textAlign: "center",
    fontFamily: FontFamily.portLligatSlabRegular,
  },
  iphone14ProMax7: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14ProMax7;
