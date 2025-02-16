export const formatDataFromAPI = (APIdata) => {
    const valueOfEUR = APIdata['EUR'].value;
  
    const currenciesDataTable = [
      { id: 0, code: "", toSubRatio: 1, value: 1 },
      ...Object.keys(APIdata).map((currency, index) => ({
        id: index + 1,
        code: APIdata[currency].code,
        toSubRatio: valueOfEUR / APIdata[currency].value,
        value: APIdata[currency].value
      }))
    ];
    return currenciesDataTable;
  };