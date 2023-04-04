import { useEffect, useState } from "react";
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('RUB');
  const [fromPrice, setFromPrice] = useState(60);
  const [toPrice, setToPrice] = useState(0);

  const [rates] = useState({USD: 1, RUB: 60, EUR: 0.8, GBP: 0.6});

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setFromPrice(value);
    setToPrice(result.toFixed(2))
  }

  useEffect(() => {
    onChangeFromPrice(fromPrice)
    // eslint-disable-next-line
  }, [fromCurrency, toCurrency])

  return (
    <div className="App">
      <Block    
        value={fromPrice}   
        currency={fromCurrency}    
        onChangeCurrency={setFromCurrency}    
        onChangeValue={onChangeFromPrice}
      />
      <Block 
        disabled={true}
        value={toPrice} 
        currency={toCurrency} 
        onChangeCurrency={setToCurrency}
      />
    </div>
  );
}

export default App;
