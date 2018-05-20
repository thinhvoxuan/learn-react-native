import { StackNavigator } from "react-navigation"
import { PizzaLocationList } from "../views/pizza-location-list/pizza-location-list-screen"
// import { PizzaLocationList } from "../views/example/pizza-location-list/pizza-location-list-screen"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = StackNavigator(
  {
    PizzaLocationListNavigator: { screen: PizzaLocationList },
    exampleStack: { screen: ExampleNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
