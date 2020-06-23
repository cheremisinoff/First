// VALUE
let startBtn = document.getElementById('start'),
    bdgvalue = document.getElementsByClassName('budget-value')[0],
    dayBdgValue = document.getElementsByClassName('daybudget-value')[0],
    lvlValue = document.getElementsByClassName('level-value')[0],
    expValue = document.getElementsByClassName('expenses-value')[0],
    optExpValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incValue = document.getElementsByClassName('income-value')[0],
    mntSavValue = document.getElementsByClassName('monthsavings-value')[0],
    yrSavValue = document.getElementsByClassName('yearsavings-value')[0];


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


let money, time;



startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    

    while(isNaN(money) || money == "" || money == null ){
        money = +prompt("Ваш бюджет на месяц? ska");
    }

    appData.budget = money;
    appData.timeData = time;
    bdgvalue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


but1.addEventListener('click', function(){
    let sum = 0;

    for(let i = 0; i < optExpItemAll.length; i++){
        let a = expItemAll[i].value, 
            b = expItemAll[++i].value;                    
        if((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;  
        } else {
            i = i -1;
        }
            
    }
    expValue.textContent = sum;
});

but2.addEventListener('click', function(){
    for (let i = 0; i < optExpItemAll.length; i++){
        let opt = optExpItemAll[i].value;
        appData.optionalExpenses[i] = opt;
        optExpValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

but3.addEventListener('click', function(){
    if (appData.budget != undefined){
    
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBdgValue.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 100){
        lvlValue.textContent = "Минимальный";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        lvlValue.textContent = "Средний";
    } else if (appData.moneyPerDay > 2000){
        lvlValue.textContent = "Отличный";
    } else {
        lvlValue.textContent = "Произошла ОИШБКА";
    }
    } else {
        alert ('Введите бюджет!');
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incValue.textContent = appData.income;
});

checkBox.addEventListener('click', function(){
    if(appData.saving == true){
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});

chooseSum.addEventListener('input', function(){
    if(appData.saving == true){
        let sum = chooseSum.value,
            percent = choosePercent.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        mntSavValue.textContent = appData.monthIncome.toFixed(1);
        yrSavValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if(appData.saving == true){
        let sum = chooseSum.value,
            percent = choosePercent.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        mntSavValue.textContent = appData.monthIncome.toFixed(1);
        yrSavValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    saving: false,
    
};