import * as React from "react"
import { observer } from "mobx-react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar } from "react-native"
import { color, spacing } from "../../../theme"
import { Button } from "../../shared/button"

const TEXT: TextStyle = { 
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }

const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4], 
  paddingHorizontal: spacing[4],
}
const CONTINUE: ViewStyle = { 
  paddingVertical: spacing[4], 
  paddingHorizontal: spacing[4],
  backgroundColor: "#5D2555",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}

export interface PizzaLocationListScreenProps extends NavigationScreenProps<{}> {
}

// @inject("mobxstuff")
@observer
export class PizzaLocationList extends React.Component<PizzaLocationListScreenProps, {}> {
  nextScreen = () => this.props.navigation.navigate("detailScreen")
  render () {
    console.tron.log("go here")
    return (
      <Screen preset="fixedCenter">
        <Text preset="header" tx="PizzaLocationList.header" />
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Button
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              tx="firstExampleScreen.continue"
              onPress={this.nextScreen}
              />
          </View>
        </SafeAreaView>
      </Screen>
    )
  }
}
