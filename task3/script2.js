const select = document.querySelector('.type-dep');
const select2 = document.querySelector('.term-dep');
const button = document.querySelector('button');
const input = document.querySelector('input');
const field = document.querySelector('.field');
var Replenished = 
{
    '0':'6 месяцев',
    '1':'1 год',
    '2':'1,5 года',
    '3':'2 года'
};

var Urgent = 
{
    '0':'3 месяца',
    '1':'6 месяцев',
    '2':'9 месяцев',
    '3':'1 год',
    '4':'1,5 года',
    '5':'2 года'
};

var PercentF = [20, 22, 15, 10]
var PercentS = [20, 22, 23, 24, 18, 15]

select.addEventListener('change', function(e)
{
    let size = select2.children.length
    for(let i = 0; i < size; i++)
    {
        select2.remove(1);
    }

    if(select.value == 0)
    {
        for (let i = 0; i < 4; i++)
        {
            var option = document.createElement('option');
            option.value = i;
            option.text = Replenished[i];
            select2.appendChild(option);
        }
    }
    else if(select.value == 1){
        
        for (let i = 0; i < 6; i++)
        {
            var option = document.createElement('option');
            option.value = i;
            option.text = Urgent[i];
            select2.appendChild(option);
        }
    }
    
})

button.onclick = function()
{
    if(select.value == 'disabled')
        alert('Сначала выберите вид вклада!');
    else if(select2.value == 'disabled')
        alert('Выберите срок вклада!');
    else if(input.value == ''||input.value <=0)
        alert('Введите корректную сумму вклада!');
    else 
    {
        var EndCash;
        if(select.value == 0)
        {
            EndCash = (input.value * (PercentF[select2.value]/100 + 1)) ;
        }
        else if(select){
            EndCash = (input.value * (PercentS[select2.value]/100 + 1)) ;
        }
        field.innerHTML = 'Вид вклада: "' + select.children[+select.value + 1].text + 
        '". Срок вклада: ' + select2.children[+select2.value + 1].text + 
        ' на сумму ' + input.value + ' руб'+
        '<br> В конце срока вы получите ' + EndCash + ' руб';
    }
}
