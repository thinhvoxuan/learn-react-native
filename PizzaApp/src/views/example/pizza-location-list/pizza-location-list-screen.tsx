import * as React from "react"
import { observer } from "mobx-react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"

export interface PizzaLocationListScreenProps extends NavigationScreenProps<{}> {
}

// @inject("mobxstuff")
@observer
export class PizzaLocationList extends React.Component<PizzaLocationListScreenProps, {}> {
  render () {
    return (
      <Screen preset="fixedCenter">
        <Text preset="header" tx="PizzaLocationList.header" />
      </Screen>
    )
  }
}
