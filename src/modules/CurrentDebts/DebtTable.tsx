import { Row, Col, Form } from 'antd';
import * as S from './style'
import { useDebt } from '../../context/DebtContext';

import Input from '../../components/Input'
import DebtRow from './DebtRow';
import { useState } from 'react';
import { Debt } from '../../models/debt';


interface CurrentProps {
  setReady: (ready: boolean) => void;
}

function DebtTable({ setReady }: CurrentProps) {
  //const { addToList, removeFromList } = useDebt()
  const [ tempDebts, setTempDebts ] = useState([new Debt()]);

  const handleAddDebt = (values: any) => {
    console.log('SUBMITTED', values)
    //addToList()
    setReady(true)
  }

  const createDebt = () => {
    setTempDebts(st => [...st, new Debt()])
  }

  return (
    <>
      <Form name="debts" onFinish={handleAddDebt}>

        <Row gutter={16}>
          <S.ColTitle span={6}>DEBT NAME</S.ColTitle>
          <S.ColTitle span={6}>REMAINING DEBT AMOUNT</S.ColTitle>
          <S.ColTitle span={6}>CURRENT APR</S.ColTitle>
          <S.ColTitle span={6}>CURRENT MONTHLY PAYMENT</S.ColTitle>
        </Row>
        
        {tempDebts.map((debt)=> <DebtRow debt={debt} key={debt.id}/>)} 

        <Row>
          <h2 onClick={createDebt}>+ Add another Debt</h2>
          <S.ButtonSubmit type="primary" htmlType="submit" block>Calculate Savings</S.ButtonSubmit>
        </Row>

      </Form >
    </>
  )
}

export default DebtTable