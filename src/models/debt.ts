import { v4 as uuidv4 } from 'uuid';


export interface DebtType {
  id: string
  name: string
  remainingAmount: number
  currentAPR: number
  monthlyPayment: number
}

export class Debt implements DebtType {
  id: string
  name: string
  remainingAmount: number
  currentAPR: number
  monthlyPayment: number

  constructor(name = 'Other', remainingAmount = '0', currentAPR = '0', monthlyPayment = '0') {
    this.id = uuidv4()
    this.name = name
    this.remainingAmount = parseFloat(remainingAmount)
    this.currentAPR = parseFloat(currentAPR)
    this.monthlyPayment = parseFloat(monthlyPayment)
  }
}

