/*
function doubleIt(num){
  const result = num * 2 ;
  return result;
}
  const fiveDouble   = doubleIt(5);
  const secondDouble =  doubleIt(7);
*/
  function getInputValue(inputId){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText)
    depositInput.value = '';
    return depositAmount;
  }




/*
   (old code section) 
   Handle Deposit Button Event
   document.getElementById('deposit-button').addEventListener
   ('click',function(){

    // get the amount deposited

   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);
  
   // update deposit total

   const depositTotal = document.getElementById('deposit-total');
   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText);
   const newDepositTotal = previousDepositAmount + newDepositAmount;
   depositTotal.innerText = newDepositTotal;

   // update account balance 
   const balanceTotal = document.getElementById('balance-total')
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   balanceTotal.innerText = newBalanceTotal;

   // clear the deposit input field
   depositInput.value = '';
});

  // handle withdraw event handler
   document.getElementById('withdraw-button').addEventListener
   ('click',function(){
     const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmountText = withdrawInput.Value();
     const newWithdrawAmount = parseFloat(withdrawAmountText);
     console.log(newWithdrawAmount);

     // set withdraw total
     const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawText = withdrawTotal.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawText);
     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotal.innerText = newWithdrawTotal;
     
     // update balance
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceText);
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

     balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
     withdrawInput.value = ''; 
 });
*/
document.getElementById('deposit-button').addEventListener
('click',function(){
 /*
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  depositAmount = parseFloat(depositAmountText)
  */
  // get and update deposit total 
  const depositTotal = document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText)
  depositTotal.innerText = previousDepositTotal + depositAmount;
  
  // update balance 
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;

  //clear input field 
  depositInput.value = '';
});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener
('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

  // update withdraw total
    const withdrawTotal =  document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalText)
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
  // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;  
   // clear withdraw input field
    withdrawInput.value ='';
});