let items = document.querySelectorAll('.item-num')
items.forEach(item => {
    item.innerHTML = 0
    let endValue = item.getAttribute('data-num')
    let increament = endValue / 20
    function changeNumber() {
        let value = +item.innerHTML
        if(value < endValue){
            value += Math.round(increament)
            item.innerHTML = value
            setTimeout(changeNumber , 100)
        }else {
            item.innerHTML = endValue
        }
    }
    changeNumber()
}) 