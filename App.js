import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Image, ImageBackground } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.herobanner}>
        <StatusBar style="auto" />
        <View style={styles.icon}>
          <Image
            source={require("./assets/ban2.jpg")}
            style={{ width: 400, height: 300 }}
          />
        </View>
        <View style={styles.butto1area}>
          <TouchableOpacity>
            <View style={styles.button1}>
              <Text style={styles.but1txt}>Shop Now</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}>
          The Game begins here. With Immortal 1000D gaming headphones, don't
          just play the game-feel it,live it,own it.
        </Text>
      </View>
      <View>
        <Text style={styles.prodtopic}>Our Products</Text>
      </View>
      <View style={styles.produbanner}>
        <View style={styles.prod1}>
          <Image
            source={require("./assets/prod1.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>BoAt Rockerz 451</Text>
          <Text style={styles.price}>$59</Text>
        </View>
        <View style={styles.prod2}>
          <Image
            source={require("./assets/prod2.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>BoAt Rockerz 333</Text>
          <Text style={styles.price}>$66</Text>
        </View>
        <View style={styles.prod2}>
          <Image
            source={require("./assets/prod3.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>BoAt Airdopes 281</Text>
          <Text style={styles.price}>$79</Text>
        </View>
        <View style={styles.prod2}>
          <Image
            source={require("./assets/prod4.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>BoAt BassHeads 242</Text>
          <Text style={styles.price}>$30</Text>
        </View>
        <View style={styles.prod2}>
          <Image
            source={require("./assets/prod5.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>BoAt Party Pal 50</Text>
          <Text style={styles.price}>$89</Text>
        </View>
        <View style={styles.prod2}>
          <Image
            source={require("./assets/prod8.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>BoAt BassHead 900</Text>
          <Text style={styles.price}>$49</Text>
        </View>
        <View style={styles.prod2}>
          <Image
            source={require("./assets/prod7.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>BoAt Immortal 1000D</Text>
          <Text style={styles.price}>$65</Text>
        </View>
        <View style={styles.prod2}>
          <Image
            source={require("./assets/prod6.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text>Watch Blaze</Text>
          <Text style={styles.price}>$49</Text>
        </View>
      </View>
      <View style={styles.bannerbottom}>
        <Text style={styles.botbantxt}>SUMMER SALE</Text>
        <Text style={styles.botbantxt2}>25% OFF</Text>
        <View style={styles.botbanimg}>
          <Image
            source={require("./assets/f1.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Hellow</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  herobanner: {
    width: 400,
    height: 500,
    backgroundColor: "#d9d6d6",
    marginTop: 110,
    //#d9d6d6
  },
  heading1: {
    fontSize: 20,
    marginTop: 50,
    marginLeft: 50,
  },
  heading2: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
    marginLeft: 50,
  },
  heading3: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 10,
  },
  ban1: {
    height: 150,
  },
  but1txt: {
    color: "white",
    fontSize: 18,
    marginLeft: 32,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    padding: 15,
    backgroundColor: "#ff5050",
    borderRadius: 28,
    height: 55,
    marginTop: 15,
    width: 180,
    marginLeft: 20,
    fontFamily: "monospace",
  },
  desc: {
    marginLeft: 140,
    marginTop: 30,
    letterSpacing: 1.2,
    fontSize: 12,
  },
  prodtopic: {
    fontFamily: "sans-serif-medium",
    fontSize: 50,
    marginLeft: 45,
    marginTop: 40,
    fontWeight: "bold",
  },
  produbanner: {
    marginTop: 65,
    width: 400,
    height: 2170,
  },
  prod1: {
    width: 200,
    height: 200,
    backgroundColor: "#d9d6d6",
    marginLeft: 100,
    marginTop: 20,
    borderRadius: 25,
  },
  price: {
    fontWeight: "bold",
  },
  prod2: {
    width: 200,
    height: 200,
    backgroundColor: "#d9d6d6",
    marginLeft: 100,
    marginTop: 65,
    borderRadius: 25,
  },
  bannerbottom: {
    marginTop: 70,
    width: 400,
    height: 350,
    backgroundColor: "#ff3333",
  },
  botbantxt: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 60,
    marginTop: 21,
    fontFamily: "Roboto",
  },
  botbanimg: {
    marginLeft: 90,
    marginTop: 20,
  },
  botbantxt2: {
    color: "#ffffff",
    marginLeft: 300,
  },
  footer: {
    width: 400,
    height: 200,
  },
});
