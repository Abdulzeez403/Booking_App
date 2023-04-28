import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import ApHeader from "../compnonents/header";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalButton,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
const HomeScreen = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(5);
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectDate, setSelectedDates] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 120,
      },
      headerStyle: {
        backgroundColor: "blue",
        height: 110,
        // borderBottonColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 5 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  const SearchPlaces = (place) => {
    if (!route?.params || !selectDate) {
      Alert.alert("Invalid", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (route?.params && selectDate) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectDate: selectDate,
        place: place,
      });
    }
  };
  return (
    <View>
      <ApHeader />

      <ScrollView>
        <View style={styles.inputContainer}>
          <Pressable
            style={styles.inputItems}
            onPress={() => navigation.navigate("Search")}
          >
            <FontAwesome name="search" size={24} color="black" />
            <TextInput
              placeholder={
                route.params ? route.params.input : "Enter your Destination..."
              }
              placeholderColor="grey"
              // style={styles.placeholderStyling}
            />
          </Pressable>

          <Pressable style={styles.inputItems}>
            <MaterialIcons name="date-range" size={24} color="black" />
            <DatePicker
              style={styles.datePicker}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: "#003580",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDates(startDate, endDate)
              }
              selectedBgColor="black"
              allowFontScaling={false} // optional
              placeholder={"Select Your Date!"}
              mode={"range"}
            />
          </Pressable>

          <Pressable
            style={styles.inputItems}
            onPress={() => setModalVisibile(!modalVisibile)}
          >
            <Ionicons name="person-outline" size={24} color="#003580" />

            <TextInput
              placeholderTextColor="red"
              placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
              style={styles.placeholderStyling}
            />
          </Pressable>

          <Pressable
            style={styles.buttonStyle}
            onPress={() => SearchPlaces(route?.params.input)}
          >
            <Text style={styles.buttonText}>Search</Text>
          </Pressable>
        </View>

        <View style={styles.horizontalViewContainer}>
          <View>
            <Text style={styles.ScrollViewTitle}> Travel More spend less</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={[styles.contextContainer, styles.activeContextContainer]}
            >
              <Text style={styles.contextHeaderText}>Genuis</Text>
              <Text style={styles.contextText}>
                {" "}
                You are ate genius level one in our loyalty program
              </Text>
            </Pressable>
            <Pressable
              style={[styles.contextContainer, styles.unactiveContextContainer]}
            >
              <Text style={styles.contextHeaderText}>15% Discounts</Text>
              <Text style={styles.contextText}>
                Complete 5 stays to unlock level 2
              </Text>
            </Pressable>
            <Pressable
              style={[styles.contextContainer, styles.unactiveContextContainer]}
            >
              <Text style={styles.contextHeaderText}> 10% Discounts</Text>
              <Text style={styles.contextText}>
                Enjoy Discounts at participating at properties worldwide
              </Text>
            </Pressable>
          </ScrollView>

          <View>
            <Pressable
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 250, height: 150, resizeMode: "cover" }}
                source={{
                  uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
                }}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={styles.ModalButtonStyle}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={styles.ModalContainer}>
          <View style={styles.ModalView}>
            <View>
              <Text style={styles.ModalText}>Rooms</Text>
            </View>

            <Pressable style={styles.ModalItems}>
              <Pressable onPress={() => setRooms(Math.max(1, rooms - 1))}>
                <Ionicons
                  name="ios-remove-circle-sharp"
                  size={24}
                  color="black"
                />
              </Pressable>

              <Pressable>
                <Text style={styles.ModalValue}>{rooms}</Text>
              </Pressable>

              <Pressable onPress={() => setRooms((c) => c + 1)}>
                <Ionicons name="add-circle-sharp" size={24} color="black" />
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.ModalView}>
            <View>
              <Text style={styles.ModalText}>Adults</Text>
            </View>

            <Pressable style={styles.ModalItems}>
              <Pressable onPress={() => setAdults(Math.max(1, adults - 1))}>
                <Ionicons
                  name="ios-remove-circle-sharp"
                  size={24}
                  color="black"
                />
              </Pressable>

              <Pressable>
                <Text style={styles.ModalValue}>{adults}</Text>
              </Pressable>

              <Pressable onPress={() => setAdults((c) => c + 1)}>
                <Ionicons name="add-circle-sharp" size={24} color="black" />
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.ModalView}>
            <View>
              <Text style={styles.ModalText}>Children</Text>
            </View>

            <Pressable style={styles.ModalItems}>
              <Pressable onPress={() => setChildren(Math.max(1, children - 1))}>
                <Ionicons
                  name="ios-remove-circle-sharp"
                  size={24}
                  color="black"
                />
              </Pressable>

              <Pressable>
                <Text style={styles.ModalValue}>{children}</Text>
              </Pressable>

              <Pressable onPress={() => setChildren((c) => c + 1)}>
                <Ionicons name="add-circle-sharp" size={24} color="black" />
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#eb9b34",
    marginHorizontal: 20,
    marginTop: 5,
  },
  inputItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#eb9b34",
  },
  placeholderStyling: {
    // fontSize: 15,
    // color: "red"
  },
  buttonStyle: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
  ModalContainer: {
    width: 100,
    height: 210,
  },
  ModalView: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 210,
    alignItems: "center",
    marginVertical: 15,
  },
  ModalText: {
    fontSize: 16,
    fontWeight: 500,
  },
  ModalItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  ModalValue: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 6,
  },
  ModalButtonStyle: {
    marginBottom: 20,
    backgroundColor: "#003580",
    color: "white",
  },
  horizontalViewContainer: {
    margin: 10,
  },
  contextContainer: {
    width: 200,
    height: 150,
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  activeContextContainer: {
    backgroundColor: "blue",
  },

  unactiveContextContainer: {
    backgroundColor: "grey",
    borderColor: "#E0E0E0",
  },
  ScrollViewTitle: {
    fontWeight: "bold",
    marginVertical: 4,
  },
  contextHeaderText: {
    fontWeight: 500,
    fontSize: 20,
    color: "white",
    marginVertical: 8,
  },
  contextText: {
    color: "white",
    fontSize: 12,
    fontWeight: 500,
  },
  datePicker: {
    width: 350,
    height: 30,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "transparent",
  },
});
