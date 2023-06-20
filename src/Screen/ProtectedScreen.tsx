import React from "react";
import { useContext } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { AuthContext } from "../Context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");

const ProtectedScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View>
        <LottieView
          autoPlay={true}
          style={{
            width: "80%",
            backgroundColor: "transparent",
            alignSelf: "center",
            marginTop: height * 0.1,
          }}
          source={require("../../assets/119589-multitasking.json")}
        />
        <View>
          <Text style={styles.text}>
            {" "}
            Welcome,{JSON.stringify(user?.nombre, null, 5)}!
          </Text>
        </View>
      </View>
      {/* <Text>
  {token}
</Text> */}
      <View></View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={logOut} activeOpacity={0.8}>
          <Text style={{ fontSize: 16, color: "#FFF" }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 28,
    color: "#323646",
    alignSelf: "center",
    marginTop: height * 0.05,
  },
  viewButton: {
    marginTop: height * 0.2,
    paddingHorizontal: width * 0.03,
  },
  button: {
    backgroundColor: "#50e3c2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.06,
    marginTop: height * 0.03,
  },
});
export default ProtectedScreen;
