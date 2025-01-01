import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Input from "./components/Input";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  // how to keys from an object
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-bgImg bg-cover bg-no-repeat gap-4">
        <h1 className="text-3xl text-white">Currency Convertor</h1>
        <div className="w-3/6 h-3/6 backdrop-blur text-center rounded-lg border-white border-2 p-1">
          <div className="pt-8 px-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div>
                <Input
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-1 border-2 transition-all scale-105 hover:bg-blue-600"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div>
                <Input
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  readonly
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-xl w-full mt-4 p-1 rounded-md transition-all hover:bg-blue-600"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
