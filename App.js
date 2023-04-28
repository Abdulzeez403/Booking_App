import { StyleSheet, Text, View } from "react-native";
import StackTab from "./navigation/StackTab";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <>
      <Provider store={store}>
      <StackTab />
      <ModalPortal />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
