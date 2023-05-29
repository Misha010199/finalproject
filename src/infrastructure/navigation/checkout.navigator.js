import React from "react";

import {createStackNavigator} from "@react-navigation/stack";


import {CheckoutScreen} from "../../features/checkout/screens/checkout.screen";
import { PaymentScreen } from "../../features/payment/screens/payment.screen";
import { CreditScreen } from "../../features/Order/screens/Orderalert.screen";

const CheckoutStack = createStackNavigator();
export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator headerMode="none">
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
  
 
    <CheckoutStack.Screen name="pay" component={PaymentScreen} />
    <CheckoutStack.Screen name="credit" component={CreditScreen} />
  </CheckoutStack.Navigator>
);
