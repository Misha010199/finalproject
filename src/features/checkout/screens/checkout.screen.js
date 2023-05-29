// import React from "react";
// import {ScrollView} from "react-native";
// import {SafeArea} from "../../../components/utility/safe-area.component";
// import {Spacer} from "../../../components/spacer/spacer.component";
// import {
//   ButtonContainer,
//   ButtonCover,
//   ProceedButton,
// } from "../components/checkout.styles";

// export const CheckoutScreen = ({navigation}) => {
//   return (
//     <SafeArea>
//       <ScrollView>
//         <ButtonCover />
//         <ButtonContainer>
//           <Spacer size="large">
//             <ProceedButton label="Pay" icon="cash" mode="contained">
//               Proceed to Pay
//             </ProceedButton>
//           </Spacer>
//         </ButtonContainer>
//       </ScrollView>
//     </SafeArea>
//   );
// };

import React, {useContext} from "react";
import styled from "styled-components/native";
import {List} from "react-native-paper";

import {CheckoutContext} from "../../../services/checkout/checkout.context";

import {SafeArea} from "../../../components/utility/safe-area.component";
import {Text} from "../../../components/typography/text.component";
import {Spacer} from "../../../components/spacer/spacer.component";
import {FontAwesome} from "@expo/vector-icons"


import {RestaurantList} from "../../../features/FoodDeal/components/foodDeal-list.styles";
import {FoodDealInfoCard} from "../../FoodDeal/components/foodDeal-info-card.component";
import {Button} from "react-native-paper";
import SERVERACCESS from "../../../../SERVERACCESS";
import axios from "axios";



const NoCheckoutArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const CheckoutScreen = ({navigation}) => {
  const {Checkout} = useContext(CheckoutContext);
  console.log(Checkout)

  return Checkout.length ? (
    <SafeArea>
      <Button
        title="Go Back"
        icon="arrow-left"
        textColor="black"
        onPress={() => navigation.navigate("FoodDeal")}>
        Items
        </Button>

      <RestaurantList
        data={Checkout}
        renderItem={({item}) => {
          return (
            // <TouchableOpacity
            //   onPress={() =>
            //     navigation.navigate("RestaurantDetail", {
            //       restaurant: item,
            //     })
            //   }>
            <Spacer position="bottom" size="large">
              <FoodDealInfoCard restaurant={item} />
            </Spacer>

            // </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />

      <Spacer position="left" size="medium">
        <List.Section />
        <Button
          title="Proceed to Checkout"
          buttonColor="#5D3FD3"
          icon="shopping"
          textColor="white"
          mode="contained"
          onPress={async () => {
            console.log(Checkout);
            
            navigation.navigate("pay")
            
            for(let i=0; i<Checkout.length; i++){
            const {data} = await axios.post(SERVERACCESS + "/order/placeOrders", {
              "item":Checkout[i].name,
              "quantity":1,
              "price":Checkout[i].price,
              "AuthToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYzU0NmIzMDAxNGU2YjU1NWQyYWFjIn0sImlhdCI6MTY4MDgwOTc5NH0.0syySKbaWK1wSU-wPbKbNRA1EUtM-9UizdU6Qwz3Ihk"
              }, {
                headers: {
                  'Content-Type': 'application/json'
                  }
            })

          }
            console.log(data)


            
            }}>
          Place Order
        </Button>
      </Spacer>
    </SafeArea>
  ) : (
    
    <NoCheckoutArea>
    <FontAwesome name="shopping-basket" size={64}/>
      <Text center>No Checout yet</Text>
    </NoCheckoutArea>
  );
};
