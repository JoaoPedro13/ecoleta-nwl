import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import strings from "./strings";
import colors from "../../styles/colors";
import BackButton from "../../components/back-button";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Screen = () => {
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack();
  };
  
  return (
    <>
      <View style={styles.container}>
        <BackButton onPress={handleNavigationBack} />
        <Image
          style={styles.pointImage}
          source={require("../../assets/images/placeholder-image.png")}
        />
        <Text style={styles.pointName}>{strings.name}</Text>
        <Text style={styles.pointItems}>{strings.type}</Text>
        <View style={styles.address}>
          <Text style={styles.addressTitle}>{strings.addressTitle}</Text>
          <Text style={styles.addressContent}>{strings.addressContent}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesomeIcon icon={faWhatsapp} color={colors.white} size={20} />
          <Text style={styles.buttonText}>{strings.whatsapp}</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesomeIcon icon={faEnvelope} color={colors.white} size={20} />
          <Text style={styles.buttonText}>{strings.email}</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Screen;
