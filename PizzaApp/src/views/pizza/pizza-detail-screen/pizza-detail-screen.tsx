import * as React from "react"
import { observer } from "mobx-react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { Button } from "../../shared/button"

export interface PizzaDetailScreenScreenProps extends NavigationScreenProps<{}> {
}

// @inject("mobxstuff")
@observer
export class PizzaDetailScreen extends React.Component<PizzaDetailScreenScreenProps, {}> {
  goBack = () => this.props.navigation.goBack()
  render () {
    return (
      <Screen preset="fixedCenter">
        <Text preset="header" tx="PizzaDetailScreen.header" />
        <Button tx="firstExampleScreen.goBack" onPress={this.goBack} />
      </Screen>
    )
  }
}
