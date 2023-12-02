import { memo } from 'react';
import { Row, Col, Form } from 'antd';
import * as S from './style'
import Input from '../../components/Input'

interface RowProps {
  name: number
  remove: (n: number) => void
  field: any
}

function DebtRow({ remove, field, name }: RowProps) {

  return (
    <Row gutter={16}>
      <Col span={6}><Form.Item {...field} name={[name, 'debtName']} required>
        <Input fieldName={`${name}-debtName`} />
      </Form.Item></Col>
      <Col span={6}><Form.Item {...field} name={[name, 'amount']} required>
        <Input addonBefore="$" fieldName={`${name}-amount`} />
      </Form.Item></Col>
      <Col span={6}><Form.Item {...field} name={[name, 'apr']} required>
        <Input addonAfter="%" fieldName={`${name}-apr`} />
      </Form.Item></Col>
      <Col span={6}>
        <S.DeleteContainer>
          <Form.Item {...field} name={[name, 'month']} required>
            <Input addonBefore="$" fieldName={`${name}-month`} />
          </Form.Item>
          {name > 0 ? <S.DeleteBox onClick={() => remove(name)}>X</S.DeleteBox> : <span></span>}
        </S.DeleteContainer>
      </Col>
    </Row>
  )
}

export default memo(DebtRow)