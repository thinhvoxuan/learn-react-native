import { StackNavigator } from "react-navigation"
import { PizzaLocationList } from "../views/pizza/pizza-location-list";
import { PizzaDetailScreen } from "../views/pizza/pizza-detail-screen";


export const PizzaNavigator = StackNavigator({
  listScreen: { screen: PizzaLocationList },
  detailScreen: { screen: PizzaDetailScreen },
},
{
  initialRouteName: "listScreen",
  headerMode: "none",
})
