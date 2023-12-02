import { v4 as uuidv4 } from 'uuid';


// class Loan {
//   getMonthPaymentByPercentage() {}
//   getTotalPaymentByPercentage() {}

//   getMonthPaymentByMonth() {}
//   getTotalPaymentByMonth() {}
// }

export interface DebtType {
  id: string
  name: string
  remainingAmount: string
  currentAPR: string
  monthlyPayment: string
}

export class Debt implements DebtType {
  id: string
  name: string
  remainingAmount: string
  currentAPR: string
  monthlyPayment: string

  constructor(name = 'Other', remainingAmount = '', currentAPR = '', monthlyPayment = '') {
    this.id = uuidv4()
    this.name = name
    this.remainingAmount = remainingAmount
    this.currentAPR = currentAPR
    this.monthlyPayment = monthlyPayment
  }
}

