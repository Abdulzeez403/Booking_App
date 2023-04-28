import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Pressable } from "react-native";

const ApHeader = () => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.headerItems, styles.activeHeaderItems]}>
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={styles.headerTitle}>Stay</Text>
      </Pressable>
      <Pressable style={styles.headerItems}>
        <Ionicons name="ios-airplane-outline" size={26} color="white" />
        <Text style={styles.headerTitle}>Fights</Text>
      </Pressable>
      <Pressable style={styles.headerItems}>
        <Ionicons name="car-outline" size={26} color="white" />
        <Text style={styles.headerTitle}>Car Rental</Text>
      </Pressable>
      <Pressable style={styles.headerItems}>
        <FontAwesome5 name="uber" size={24} color="white" />
        <Text style={styles.headerTitle}>Taxi</Text>
      </Pressable>
    </View>
  );
};

export default ApHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    
  },
  headerItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeHeaderItems: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  headerTitle: {
    color: "white",
    marginHorizontal: 5,
    // fontSize: "bold"
  },
});
