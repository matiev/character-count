let txtArea = document.querySelector('textarea'),
    txtSpace = document.querySelector('.text-space'),
    txtNoSpace = document.querySelector('.txt-no-space');
    
window.addEventListener('DOMContentLoaded', count);
txtArea.addEventListener('input', count);

function count() {
  txtSpace.textContent = 'Количество символов с пробелами ' + txtArea.value.length;
  txtNoSpace.textContent = 'Количество символов без пробелов ' + txtArea.value.split('').filter(item => item != ' ').join('').length;
}