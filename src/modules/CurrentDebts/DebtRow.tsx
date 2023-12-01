import { Row, Col, Form } from 'antd';
import * as S from './style'
import Input from '../../components/Input'
import { Debt } from '../../models/debt';

interface RowProps {
  debt: Debt
}

function DebtRow({ debt }: RowProps) {

  console.log(debt)
  return (
    <Row gutter={16}>
      <Form.Item name='id' />
      <Col span={6}><Form.Item name="name"><Input fieldName='name' /></Form.Item></Col>
      <Col span={6}><Form.Item name="amount"><Input fieldName='amount' addonBefore="$" /></Form.Item></Col>
      <Col span={6}><Form.Item name="apr"><Input addonAfter="%" fieldName='apr' /></Form.Item></Col>
      <Col span={6}>
        <S.DeleteContainer>
          <Form.Item name="month"><Input addonBefore="$" fieldName='month' /></Form.Item>
          <S.DeleteBox>X</S.DeleteBox>
        </S.DeleteContainer>
      </Col>
    </Row>
  )
}

export default DebtRow