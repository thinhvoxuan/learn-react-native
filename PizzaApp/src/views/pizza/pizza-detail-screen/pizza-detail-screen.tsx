import * as React from "react"
import { observer } from "mobx-react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"

export interface PizzaDetailScreenScreenProps extends NavigationScreenProps<{}> {
}

// @inject("mobxstuff")
@observer
export class PizzaDetailScreen extends React.Component<PizzaDetailScreenScreenProps, {}> {
  render () {
    return (
      <Screen preset="fixedCenter">
        <Text preset="header" tx="PizzaDetailScreen.header" />
      </Screen>
    )
  }
}
