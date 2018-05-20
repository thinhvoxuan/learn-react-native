import { StackNavigator } from "react-navigation"
import { ExampleNavigator } from "./example-navigator"
import { PizzaNavigator } from "./pizza-navigator";


export const RootNavigator = StackNavigator(
  {
    // PizzaDetailScreenNavigator: { screen: PizzaDetailScreen },
    pizza: { screen: PizzaNavigator },
    exampleStack: { screen: ExampleNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
