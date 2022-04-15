import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <image style={{ width: 500, height: 500, backgroundColor: 'pink', borderRadius: 40 }} source={require("./assets/instagram.png")}></image>
      </TouchableOpacity>

      <view>
        <text><h1><i>Instagram</i></h1></text>
      </view>
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40, width: 400, backgroundColor: 'lightgrey', borderRadius: 15, fontSize: 20 }}
          placeholder=" Enter username"
          placeholderTextColor={' black'}
        />
      </View>

      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40, width: 400, backgroundColor: 'lightgrey', borderRadius: 15, fontSize: 20 }}
          secureTextEntry={'hidePassword'}
          placeholder=" Enter password"
          placeholderTextColor={' black'}
          autoCompleteType="password"
        >
        </TextInput>
      </View>


      <View style={{ width: 200, height: 100, marginTop: 10 }}>
        <TouchableOpacity>
          <Button
            onPress={() => {
              alert('You have sucessfully signed Up!');
            }}
            title="sign up"
            color={'lightblue'}
          >
          </Button>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    height: 600,
    width: 600,
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
