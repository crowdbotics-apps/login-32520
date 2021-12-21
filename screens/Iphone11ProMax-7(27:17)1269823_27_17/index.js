import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/522e/0bca/831e567c1650d205d53b9e2895af87f4"
        }}
        style={styles.ImageBackground_27_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8997/ea65/7cc5797b05d446a2f17ecac8ddf4c837"
        }}
        style={styles.ImageBackground_27_19}
      />
      <View style={styles.View_27_20}>
        <Text style={styles.Text_27_20}>Bring People Together</Text>
      </View>
      <View style={styles.View_27_21} />
      <View style={styles.View_27_22} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(237, 234, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_27_18: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("94%"),
    resizeMode: "cover"
  },
  ImageBackground_27_19: {
    width: wp("31%"),
    height: hp("8%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_27_20: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_27_20: {
    color: "rgba(83, 83, 83, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_21: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-44%"),
    top: hp("-25%"),
    backgroundColor: "rgba(30, 87, 241, 1)"
  },
  View_27_22: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("98%"),
    backgroundColor: "rgba(30, 87, 241, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
