let billInput = document.querySelector('.form_input_bill')
let qualitySelect = document.querySelector('.form_input_quality')
let peopleInput = document.querySelector('.form_input_people')
let calcButton = document.querySelector('.form_button_calc')
let resetButton = document.querySelector('.form_button_reset')

calcButton.addEventListener('click', clickHandler)
resetButton.addEventListener('click', clickReset)


function clickReset() {
    billInput.value = ''
    qualitySelect.value = ''
    peopleInput.value = ''
    renderResult('___', '___')
}

function clickHandler() {

    let bill = parseInt(billInput.value);
    let quality = parseInt(qualitySelect.value);
    let people = parseInt(peopleInput.value);


    let tips = calculateTips(bill, quality)
    let tipsForEach = tips / people
    let totalForEach = calculateTotal(bill, tips) / people
    renderResult(tipsForEach, totalForEach)

}

function calculateTips(summ, percet) {
    return summ * percet / 100
}

function calculateTotal(summ, tips) {
    return summ + tips
}

function renderResult(tips, total) {
    document.querySelector('.result_value_tips').innerText = tips + ' ₽'
    document.querySelector('.result_value_total').innerText = total + ' ₽'
}