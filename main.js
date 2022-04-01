const $ = document.querySelector.bind(document)

const calculateResult = (event) => {
  event.preventDefault()

  const loanValue = convertStringToFloat('loan-value')
  const loanInstallments = convertStringToFloat('loan-installments')
  const taxRate = convertStringToFloat('client-type')
  
const pisos = taxRate*(loanValue * loanInstallments)/taxRate
pisos.parseFloat

  const installmentValue = calculateInstallmentValue(loanValue, taxRate, loanInstallments)

  $('#result').innerText = `Quantidade de pisos de 1m² : ${pisos} Valor R$ ${installmentValue.toFixed(2)}`
 
  }
  

const convertStringToFloat = (id) => {
  let aux = $(`#${id}`).value
  const value = parseFloat(aux)
  return value
}

const calculateInstallmentValue = (loanValue, taxRate, loanInstallments) => {
  const finalLoanValue = taxRate*(loanValue * loanInstallments)
  
  return  finalLoanValue 
  
}


