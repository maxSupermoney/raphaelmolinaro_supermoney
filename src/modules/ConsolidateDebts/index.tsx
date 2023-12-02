import { useDebt } from '../../context/DebtContext';
import InputAPR from '../../components/DesiredSlider/InputAPR';
import InputLoanTerm from '../../components/DesiredSlider/InputLoanTerm';
import Title from './Title';
import * as S from './style';
import { useCallback, useMemo, useState } from 'react';

interface ConsolidatedProps {
  setReady: (ready: boolean) => void;
}

function ConsolidatedDebts({ setReady }: ConsolidatedProps) {
  const { debtList } = useDebt();
  const [newDebt, setNewDebt] = useState({ apr: 8, month: 24 })

  const handleApr = useCallback((value: number) => setNewDebt(st => ({ ...st, apr: value })), [newDebt.apr])
  const handleMonth = useCallback((value: number) => setNewDebt(st => ({ ...st, month: value })), [newDebt.month])


  return (
    <>
      <S.AddingMoreDebt onClick={() => setReady(false)}>Update Your Current Debts</S.AddingMoreDebt>
      <S.Wrapper>
        <S.ContainerInput>
          <Title />
          <InputAPR onChange={handleApr} value={newDebt.apr} />
          <InputLoanTerm onChange={handleMonth} value={newDebt.month} />
        </S.ContainerInput>
        <S.ContainerTotal>
          <div><p>new total Repayment </p><span>$6513</span></div>
          <div><p>Current Total Repayment </p><span>$6750</span></div>
          <div><p>Total Repayment Savings </p><span>$237</span></div>
        </S.ContainerTotal>
        <S.ContainerMonth>
          <div><p>New Monthly Repayment </p><span>$271.36</span></div>
          <div><p>Current Monthly Repayment </p><span>$450.00</span></div>
          <div><p>Total Monthly Savings </p><span>$178.64</span></div>
        </S.ContainerMonth>
      </S.Wrapper>
    </>
  );
}

export default ConsolidatedDebts;
