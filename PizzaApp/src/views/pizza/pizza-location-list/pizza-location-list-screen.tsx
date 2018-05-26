import * as React from "react"
import { observer } from "mobx-react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import {
  View,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  StatusBar,
} from "react-native"
import { color, spacing } from "../../../theme"
import { Button } from "../../shared/button"

import ZendeskChat from 'react-native-zendesk-chat';

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

export interface PizzaLocationListScreenProps extends NavigationScreenProps<{}> {}

// @inject("mobxstuff")
@observer
export class PizzaLocationList extends React.Component<PizzaLocationListScreenProps, {}> {
  nextScreen = () => {
    ZendeskChat.startChat({})
  }
  render() {
    console.tron.log("go here")
    return (
      <Screen>
        <Text preset="header" tx="PizzaDetailScreen.header" />
        <Button tx="firstExampleScreen.goBack" onPress={this.nextScreen} />
      </Screen>
    )
  }
}
