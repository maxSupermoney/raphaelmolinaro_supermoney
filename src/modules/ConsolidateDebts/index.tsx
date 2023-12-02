import { useDebt } from '../../context/DebtContext';
import * as S from './style'

interface ConsolidatedProps {
  setReady: (ready: boolean) => void;
}

function ConsolidatedDebts({ setReady }: ConsolidatedProps) {
  const { debtList } = useDebt()
  


  return (
    <div>
      <S.AddingMoreDebt onClick={() => setReady(false)}>Update Your Current Debts</S.AddingMoreDebt>
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

  )
}

export default ConsolidatedDebts