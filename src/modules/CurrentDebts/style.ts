import styled from "styled-components";
import { Button, Col as ColAntD } from 'antd';

export const EnterTitle = styled.h1`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #0D0B2D;
  text-transform: uppercase;
`;

export const ButtonSubmit = styled(Button)``;

export const ColTitle = styled(ColAntD)`
  font-size: 10px;
`;

export const DeleteContainer = styled.span`
  display: flex;
  flex: columns;
`;

export const DeleteBox = styled.span`
  padding: 0 6px;
  font-weight: 900;
  font-size: 18px;
  color: #AAAAB2;
`;