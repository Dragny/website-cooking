// script.js

// Находим кнопку и текстовый элемент по их ID
const button = document.getElementById('showTextButton');
const displayText = document.getElementById('displayText');

// Добавляем обработчик событий на кнопку
button.addEventListener('click', function () {
    // Проверяем текущее состояние видимости текста
    if (displayText.style.display === 'none' || displayText.style.display === '') {
        // Отображаем текст
        displayText.style.display = 'block';
    } else {
        // Скрываем текст
        displayText.style.display = 'none';
    }
});
