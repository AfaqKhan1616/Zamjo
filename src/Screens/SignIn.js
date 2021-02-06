// ./screens/Home.js
import React from "react";
import { View, Text, StyleSheet ,SafeAreaView} from "react-native";
const SignIn = ({ navigation }) => {
    return (
        <SafeAreaView>
          <View style={styles.rootContainer}>
            <Text>Sign In</Text>
          </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
    },
    rootContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
    },
});
export default SignIn;
