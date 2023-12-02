// @ts-ignore
import finance from 'FinanceJs/finance';
import { useState } from 'react';
import Title from '../components/Title';
import CurrentDebts from '../modules/CurrentDebts';
import ConsolidatedDebts from '../modules/ConsolidateDebts';
import Screen from '../components/screen';

function App() {
  const [isReady, setReady] = useState<boolean>(false)
  // const payment = useMemo(() => finance.calculatePayment(6750, 24, 8), [])
  // console.log(payment)

  const DISPLAY = isReady ? <ConsolidatedDebts setReady={setReady} /> : <CurrentDebts setReady={setReady} />

  return (
    <Screen>
        {/* //TODO: Add Router if there is time */}
        <Title />
        <div>
          {DISPLAY}
        </div>

    </Screen>
  );
}

export default App;
