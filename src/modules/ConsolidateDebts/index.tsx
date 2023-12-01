import React from 'react'

interface ConsolidatedProps {
  setReady: (ready: boolean) => void;
}

function ConsolidatedDebts({ setReady }: ConsolidatedProps) {
  return (
    <div>
      <span onClick={() => setReady(false)}>goback link</span>
      <div>
        Consolidate Loan title and subtitle
        input desired APR
        input desired APR 
        <div>
          new total payment
          new Monthly payment
        </div>
      </div>
    </div>

  )
}

export default ConsolidatedDebts