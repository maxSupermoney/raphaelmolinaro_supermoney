// @ts-ignore
import finance from 'FinanceJs/finance';
import { Debt } from './debt';

export default class Loan {
  
  static getTotalByAmount(debts: Debt[]) {
    let amount = 0
    debts.forEach(debt => {
      amount += debt.remainingAmount
    })
    return amount
  }
  static getTotalByMonth(debts: Debt[]) {
    let amount = 0
    debts.forEach(debt => {
      amount += debt.monthlyPayment
    })
    return amount
  }

  static getNewLoan(debts: Debt[], month: number, apr: number) {
    const { oldAmount } = Loan.getOldLoan(debts)
    const newMonth = finance.calculatePayment(oldAmount, month, apr)
    const newAmount = finance.calculateAmount(month, apr, newMonth)
    return { newAmount, newMonth }
  }

  static getOldLoan(debts: Debt[]) {
    let oldAmount = 0
    let oltMonth = 0

    debts.forEach(debt => {
      const { remainingAmount, currentAPR, monthlyPayment } = debt
      const time = finance.calculateMonths(remainingAmount, currentAPR, monthlyPayment)
      oldAmount += finance.calculateAmount(time, currentAPR, monthlyPayment)

      oltMonth += +monthlyPayment
    })

    return { oldAmount, oltMonth }
  }
}