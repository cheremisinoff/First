let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null ){
        money = +prompt("Ваш бюджет на месяц? ska");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    saving: true,
    chooseExpenses: function (){
        for(let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце"), 
                b = prompt("Во сколько обойдется?");
            
        
            if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;  
            } else {
                i = i -1;
            }
                
        }
    },
    detectDayBudget: function (){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" +appData.moneyPerDay);

    },
    detectLevel: function (){
        if(appData.moneyPerDay < 100){
            console.log("min");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("mid");
        } else if (appData.moneyPerDay > 2000){
            console.log("max");
        } else {
            console.log("Warning");
        }    
    },
    checkSavings: function(){
        if (appData.saving == true){
            let save = +prompt("How much savings are you have?"),
                percent = +prompt("percent?");
            appData.monthIncome = save/100/12*percent;
            alert("доход в месяц со сбережений: " + appData.monthIncome);
        } 
    },
    chooseOptExpenses: function(){
        for (let i=1; i < 3; i++){
            let opt = prompt("статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function(){
        let items = prompt("что принесет дополнительный доход?(перечислите через запятую)", "");
        appData.income = items.split(", ");
        appData.income.sort();
    }

};


// VALUE
let stapt = document.getElementById('start'),
    bdgvalue = document.getElementsByClassName('budget-value'),
    dayBdgValue = document.getElementsByClassName('daybudget-value'),
    lvlValue = document.getElementsByClassName('level-value'),
    expValue = document.getElementsByClassName('expenses-value'),
    optExpValue = document.getElementsByClassName('optionalexpenses-value'),
    incValue = document.getElementsByClassName('income-value'),
    mntSavValue = document.getElementsByClassName('monthsavings-value'),
    yrSavValue = document.getElementsByClassName('yearsavings-value');


// INPUT
let expItemAll = document.getElementsByClassName('expenses-item'),
    eiInput1 = expItemAll[0],
    eiInput2 = expItemAll[1],
    eiInput3 = expItemAll[2],
    eiInput4 = expItemAll[3];

    
// BUTTON    
let butAll = document.getElementsByTagName('button'),
    but1 = butAll[0],
    but2 = butAll[1],
    but3 = butAll[2],
    but4 = butAll[3];


// OPTIONAL EXPENSES
let optExpItemAll = document.querySelectorAll('.optionalexpenses-item'),
    optExpItem1 = optExpItemAll[0],
    optExpItem2 = optExpItemAll[1],
    optExpItem3 = optExpItemAll[2];

    
// OTHER
let chooseIncome = document.querySelector('.choose-income'),
    checkBox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    


console.log(checkBox);