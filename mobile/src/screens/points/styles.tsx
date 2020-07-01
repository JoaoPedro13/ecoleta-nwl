import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 45,
  },
  titleView: {
    flexDirection: "row",
  },
  titleEmoji: {
    fontSize: 20,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 8,
  },
  description: {
    color: colors.gray,
    fontSize: 16,
    marginTop: 4,
  },
  mapContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapMarker: {
    width: 90,
    height: 80,
  },
  mapMarkerPointer: {
    marginTop: -12,
    alignSelf: "center",
  },
  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: colors.green,
    flexDirection: "column",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },
  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: "cover",
  },
  mapMarkerTitle: {
    flex: 1,
    color: colors.white,
    fontSize: 13,
    lineHeight: 23,
  },
  itemsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 32,
  },
  item: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.lightGray,
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectedItem: {
    borderColor: colors.green,
    borderWidth: 2,
  },
  itemTitle: {
    textAlign: "center",
    fontSize: 13,
  },
  itemImage: {
    marginBottom: 5,
  },
});
