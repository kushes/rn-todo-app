// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    Button,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const HomeScreen = ({ navigation }) => {
    const prioties = ["Low", "Medium", "High"];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            You are on Home Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("SettingsStack", { screen: "Settings" })
            }
          >
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Details")}
          >
            <Text>Open Details Screen</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          React Native Bottom Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        >
          www.aboutreact.com
        </Text>
      </View> */}
            <View style={{ flex: 1, padding: 16 }}>
                <TextInput placeholder="Title" style={styles.input} />
                <TextInput placeholder="Description" style={styles.inputDes} />
                <SelectDropdown
                    data={prioties}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item;
                    }}
                />
                <TextInput placeholder="Due date" style={styles.input} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: { borderWidth: 2, borderColor: "gray", borderRadius: 5, margin: 5 },
    inputDes: { borderWidth: 2, borderColor: "gray", borderRadius: 5, margin: 5, height: 70 },
});
export default HomeScreen;
