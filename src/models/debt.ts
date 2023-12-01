import { v4 as uuidv4 } from 'uuid';


class Loan {
  getMonthPaymentByPercentage() {}
  getTotalPaymentByPercentage() {}

  getMonthPaymentByMonth() {}
  getTotalPaymentByMonth() {}
}

export class Debt extends Loan {
  id: string = ''
  name: string = ''
  remainingAmount: number = 0
  currentAPR: number = 0
  monthlyPayment: number = 0

  constructor(name = 'Other', remainingAmount: number, currentAPR: number, monthlyPayment: number) {
    super()
    this.id = uuidv4()
    this.name = name
    this.remainingAmount = remainingAmount
    this.currentAPR = currentAPR
    this.monthlyPayment = monthlyPayment
  }
}

