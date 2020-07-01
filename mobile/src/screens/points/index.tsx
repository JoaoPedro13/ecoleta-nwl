import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./styles";
import strings from "./strings";
import BackButton from "../../components/back-button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faCarBattery } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import Emoji from "react-native-emoji";
import MapView, { Marker } from "react-native-maps";
import colors from "../../styles/colors";

const Screen = () => {
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack();
  };
  const handleNavigateDetails = () => {
    navigation.navigate("Detail");
  };

  return (
    <>
      <View style={styles.container}>
        <BackButton onPress={handleNavigationBack} />
        <View style={styles.titleView}>
          <Emoji name="grin" style={styles.titleEmoji} />
          <Text style={styles.title}>Bem vindo.</Text>
        </View>
        <Text style={styles.description}>
          Encontre no mapa o ponto de recolha.
        </Text>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 38.6686615,
              longitude: -9.0460533,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <Marker
              onPress={handleNavigateDetails}
              style={styles.mapMarker}
              coordinate={{
                latitude: 38.6686615,
                longitude: -9.0460533,
              }}
            >
              <View>
                <View style={styles.mapMarkerContainer}>
                  <Image
                    source={require("../../assets/images/placeholder-image.png")}
                    style={styles.mapMarkerImage}
                  />
                  <Text>{strings.pointName}</Text>
                </View>
                <FontAwesomeIcon
                  icon={faSortDown}
                  color={colors.green}
                  size={20}
                  style={styles.mapMarkerPointer}
                />
              </View>
            </Marker>
          </MapView>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <FontAwesomeIcon
              icon={faLaptop}
              color={colors.green}
              size={48}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>{strings.electronics}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <FontAwesomeIcon
              icon={faLemon}
              color={colors.green}
              size={48}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>{strings.organics}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <FontAwesomeIcon
              icon={faTint}
              color={colors.green}
              size={48}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>{strings.cookOils}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <FontAwesomeIcon
              icon={faLightbulb}
              color={colors.green}
              size={48}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>{strings.lightbulbs}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <FontAwesomeIcon
              icon={faCarBattery}
              color={colors.green}
              size={48}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>{strings.batteries}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <FontAwesomeIcon
              icon={faNewspaper}
              color={colors.green}
              size={48}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>{strings.paper}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Screen;
