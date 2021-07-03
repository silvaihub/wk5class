const naira = document.getElementById('naira');
naira.addEventListener('input',nairaConverter)
function nairaConverter(e)
{
    let nairaC = e.target.value;
    document.getElementById('dollar').value = nairaC/ 493;
    document.getElementById('pound').value = nairaC/ 710;
    document.getElementById('euro').value = nairaC/ 595;

}
