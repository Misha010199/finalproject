import React, {useContext} from "react";
import {FoodDealContext} from "../../../services/foodDeal/foodDeal.context";
import {FoodDealInfoCard} from "../components/foodDeal-info-card.component";
import {HeaderText} from "../components/foodDeal-info-card.styles";
import {Text} from "../../../components/typography/text.component";


import {SafeArea} from "../../../components/utility/safe-area.component";

export const FoodDealDetailScreen = ({route}) => {
  const {restaurants} = useContext(FoodDealContext);
  const {restaurant} = route.params;
  return (
    <SafeArea>
      <FoodDealInfoCard restaurant={restaurant} />
      <Text></Text>
      <Text>Description: {restaurant.description}</Text>
      <Text></Text>
      <HeaderText>Reviews</HeaderText>
      <Text></Text>
    </SafeArea>
  );
};
