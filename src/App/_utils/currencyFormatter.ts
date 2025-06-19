import { CurrencyItem, APIDataProps } from "../types";

export const formatDataFromAPI = (APIdata: APIDataProps): CurrencyItem[] => {
  const valueOfEUR = APIdata['EUR'].value;

  return [
    { id: 0, code: "", toSubRatio: 1, value: 1, label: "" },
    ...Object.keys(APIdata).map((currency, index) => ({
      id: index + 1,
      code: APIdata[currency].code,
      toSubRatio: valueOfEUR / APIdata[currency].value,
      value: APIdata[currency].value,
      label: APIdata[currency].code
    }))
  ];
};