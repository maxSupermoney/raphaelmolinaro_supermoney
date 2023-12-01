// @ts-ignore
import finance from 'FinanceJs/finance';
import { useMemo } from 'react';

function App() {
  const payment = useMemo(() => finance.calculatePayment(6750, 24, 8), [])
  console.log(payment)
  
  return (
    <>
    {/* Architecture - Replace components as long they are being create and implemented */}
    <div>
      Component Title with memo
      <div>
        title debts
        input hook dispatch context and Callback<span>remove targeted data</span>
        <span>add another debts</span>
      </div>
      <button>Button Calculate Saving</button>
    </div>

    <div>
      Same Component Title with memo
      <span>goback link</span>
      <div>
        Consolidate Loan title and subtitle
        input desired APR
        input desired APR 
        <div>
          new total payment
          new Monthly payment
        </div>
      </div>
    </div>
      
    </>
  );
}

export default App;
