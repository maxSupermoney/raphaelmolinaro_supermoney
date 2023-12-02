import { Row, Form } from 'antd';
import * as S from './style'
import { useDebt } from '../../context/DebtContext';
import DebtRow from './DebtRow';
import { Debt, DebtType } from '../../models/debt';


interface CurrentProps {
  setReady: (ready: boolean) => void;
}

function DebtTable({ setReady }: CurrentProps) {
  const { addToList } = useDebt()

  const handleAddDebt = (values: any) => {
    if(!values.debts) return null;

    values.debts.forEach((debt: any) => {
      const { debtName, apr, month, amount } = debt

      if (debtName !== "" && apr !== '' && month !== "" && amount !== "") {
        const newDebt: DebtType = new Debt(debtName, amount, apr, month)
        addToList(newDebt)
      }
    })
    setReady(true)
  }

  return (
    <>
      <Form onFinish={handleAddDebt} name="all">

        <Row gutter={16}>
          <S.ColTitle span={6}>DEBT NAME</S.ColTitle>
          <S.ColTitle span={6}>REMAINING DEBT AMOUNT</S.ColTitle>
          <S.ColTitle span={6}>CURRENT APR</S.ColTitle>
          <S.ColTitle span={6}>CURRENT MONTHLY PAYMENT</S.ColTitle>
        </Row>

        <Form.List name="debts">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <DebtRow
                  key={key} remove={remove}
                  field={restField} name={name} />
              ))}
              <S.AddingMoreDebt onClick={() => add('', 0)}>+ Add another Debt</S.AddingMoreDebt>
            </>
          )}
        </Form.List>
        <Row>
          <S.ButtonSubmit type="primary" htmlType="submit" block>Calculate Savings</S.ButtonSubmit>
        </Row>

      </Form >
    </>
  )
}

export default DebtTable