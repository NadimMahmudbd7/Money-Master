
// Total Cost field
function totalCost(){
const inputFoodBtn = document.getElementById("inputFoodBtn");
const inputFoodBtnText = inputFoodBtn.value;
const inputFoodBtnValue = parseFloat(inputFoodBtnText);
const inputRentBTn = document.getElementById("inputRentBTn");
const inputRentBTnValue = parseFloat(inputRentBTn.value);
const inputClothesBtn = document.getElementById("inputClothesBtn");
const inputClothesBtnValue = parseFloat(inputClothesBtn.value);
let totalExpense = inputFoodBtnValue + inputRentBTnValue + inputClothesBtnValue
    return totalExpense
}


// For Minus Validation
function forMinus(inputfield,items){
    const inputFoodBtn = document.getElementById(inputfield);
    const inputFoodBtnText = inputFoodBtn.value;
    const forminuss = document.getElementById(items)
    if(inputFoodBtn.value<0){
        forminuss.style.display="block"
        return 
    }
    else{
        forminuss.style.display="none"
    }
}


// Income Balance Field
function incomeBalance(){
    const inputIncomeBtn = document.getElementById("inputIncomeBtn");
    const inputIncomeBtnValue = parseFloat(inputIncomeBtn.value)
    return inputIncomeBtnValue
}

document.getElementById("calculate").addEventListener("click",function(){
    // minus function call
    forMinus("inputIncomeBtn","incomeMinusNumber")
    forMinus("inputFoodBtn","foodMinusNumber")
    forMinus("inputRentBTn","rentMinusNumber")
    forMinus("inputClothesBtn","clothesMinusNumber")

    // error handle for string
    if(isNaN(totalCost())){
        alert('Please Fill all Inputs with Number')
    }
    else if(isNaN(incomeBalance())){
        alert('Please Fill all Inputs with Number')
    }
    else{    

const totalExpenses = document.getElementById("totalExpenses");
const totalExpensesText = totalExpenses.innerText;
const totalExpensesValue = parseFloat(totalExpensesText);
const balance = document.getElementById("balance");
const balanceText = balance.innerText;
const balanceValue = parseFloat(balanceText)
const balances = incomeBalance() - totalCost()
const incomeBalanceLow = document.getElementById("incomeBalanceLow")
if(incomeBalance() < totalCost()){
    incomeBalanceLow.style.display = "block"
}
else{
    totalExpenses.innerText = totalCost()
    balance.innerText = balances
    incomeBalanceLow.style.display = "none"
}
    }

})
