import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import strings from "./strings";
import Logo from "../../components/logo";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../../styles/colors";

const Screen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Points");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.main}>
        <View style={styles.logo}>
          <Logo size={40} colorText={colors.purple} />
        </View>
        <Text style={styles.title}>{strings.title}</Text>
        <Text style={styles.description}>{strings.description}</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigation}>
          <View style={styles.buttonIcon}>
            <FontAwesomeIcon icon={faArrowRight} color={colors.white} />
          </View>
          <Text style={styles.buttonText}>{strings.button}</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Screen;
