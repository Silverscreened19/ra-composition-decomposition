import { v4 } from "uuid";

interface CurrenciesProps {
  code: string;
  value: number;
  diff: string;
}

interface ICurrencies {
  array: CurrenciesProps[];
}

const Currencies = ({ array }: ICurrencies) => {
  return (
    <ul className="currencies">
      {array.map((currency) => (
        <li key={v4()}>
          <span className="currency_code">{currency.code}</span>
          <span className="currency_value">{currency.value}</span>
          <span className="currency_diff">{currency.diff}</span>
        </li>
      ))}
    </ul>
  );
};

export default Currencies;
