// @ts-ignore
import finance from 'FinanceJs/finance';
import { useMemo, useState } from 'react';
import Title from '../components/Title';
import CurrentDebts from '../modules/CurrentDebts';
import ConsolidatedDebts from '../modules/ConsolidateDebts';

function App() {
  const [ isReady, setReady ] = useState<boolean>(false)
  const payment = useMemo(() => finance.calculatePayment(6750, 24, 8), [])
  console.log(payment)
  
  const DISPLAY = isReady ? <ConsolidatedDebts setReady={setReady} /> : <CurrentDebts setReady={setReady} />

  return (
    <>
    <div>
      <Title />
      <div>
        {DISPLAY}
      </div>
    </div>   
    </>
  );
}

export default App;
