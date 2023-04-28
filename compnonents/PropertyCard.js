import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";


const PropertyCard = ({
  rooms,
  adults,
  children,
  property,
  selectDate,
  availableRooms,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <Pressable
          style={styles.container}
          onPress={() =>
            navigation.navigate("Info", {
              name: property.name,
              rating: property.rating,
              oldPrice: property.oldPrice,
              newPrice: property.newPrice,
              photos: property.photos,
              availableRooms: property.rooms,
              adults: adults,
              children: children,
              rooms: rooms,
              selectedDates: selectDate,
            })
          }
        >
          <View>
            <Image
              source={{ uri: property?.image }}
              style={{ height: 250, width: 180 }}
            />
          </View>

          <View>
            <Text style={styles.propertyName}>{property.name}</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.rating}>
                <Text>{property.rating}</Text>
                <MaterialIcons name="stars" size={20} color="green" />
              </View>
              <View>
                <Text style={styles.propertyRemark}>Genus Level</Text>
              </View>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.propertyAddress}>
                {property?.address.length > 50
                  ? property?.address.substr(0, 50)
                  : property?.address}
              </Text>
            </View>

            <View>
              <Text style={styles.currentPrice}>
                Price for 1 Night and {adults} adults
              </Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.oldPrice}>{property.oldPrice * adults}</Text>
              <Text style={styles.newPrice}>{property.newPrice * adults}</Text>
            </View>

            <View>
              <Text>$ {property.newPrice * adults}</Text>
            </View>

            <View style={{ marginTop: 6 }}>
              <Text style={{ fontSize: 13, color: "gray" }}>Deluxe Room</Text>
              <Text style={{ fontSize: 13, color: "gray" }}>
                Hotel Room : 1 bed
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#6082B6",
                paddingVertical: 2,
                marginTop: 2,
                borderRadius: 5,
                width: 150,
                paddingHorizontal: 3,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Limited Time deal
              </Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    gap: 10,
  },
  propertyName: {
    fontWeight: 500,
    fontSize: 15,
    width: 180,
  },
  rating: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  propertyRemark: {
    backgroundColor: "#6CB4EE",
    width: 80,
    paddingHorizontal: 3,
    textAlign: "center",
    color: "white",
  },
  propertyAddress: {
    color: "gray",
    fontSize: 13,
  },
  addressContainer: {
    width: 150,
    marginVertical: 3,
  },
  currentPrice: {
    fontSize: 13,
    fontWeight: 500,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 20,
  },
  oldPrice: {
    color: "red",
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontSize: 18,
  },
});
