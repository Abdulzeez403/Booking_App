import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchList = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }

            return (
              <Pressable
                style={styles.container}
                onPress={() => {
                  setInput(input.place);
                  navigation.navigate("Home", { input: item.place });
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.placeImage }}
                    style={styles.image}
                  />
                </View>
                <View>
                  <Text style={styles.placeText}>{item.place}</Text>
                  <Text>{item.shortDescription}</Text>
                  <Text>{item.properties.length}</Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  placeText: {
    fontWeight: 600,
    fontSize: 15,
  },
});
