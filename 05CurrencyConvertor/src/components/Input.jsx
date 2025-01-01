import React, { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
}) {
  
  // It's not necessary but it help in optimize the lable and bind the label and input feild by providing the unique ids.
  const amountInputId = useId();

  

  return (
    <>
      <div className="w-full h-24 bg-white rounded-md flex justify-between px-20">
        <div className="text-black flex flex-col justify-evenly">
          <label htmlFor={amountInputId} className="text-xl text-gray-600">
            {label}
          </label>
          <input
            id={amountInputId}
            type="number"
            placeholder="Amount"
            className="border-slate-200 p-px border-2 rounded-md outline-none"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="text-black flex flex-col justify-evenly">
          <label htmlFor="" className="text-xl text-gray-600">
            Currency Type
          </label>
          <select
            className="cursor-pointer outline-none bg-slate-100 rounded-md p-1"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {/* when we uses loops in jsx file then key attribute must use because if we don't uses key than react performance decreses rapadily  */}
            {currencyOption.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Input;
