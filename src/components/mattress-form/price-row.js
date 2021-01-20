import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 25px;
`;

const MattLabel = styled.span`
  font-size: 18px;
`;

const PriceLabel = styled.span`
  float: right;
  font-family: "Questrial", sans-serif;
  font-size: 18px;
`;

const PriceRow = ({ matt }) => {
  // Probably should be memoized
  const formatMoney = (
    amount,
    decimalCount = 2,
    decimal = ".",
    thousands = ","
  ) => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : "")
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Content>
      <MattLabel>{matt.name}</MattLabel>
      <PriceLabel>${formatMoney(matt.price, 0)}</PriceLabel>
    </Content>
  );
};

export default PriceRow;
