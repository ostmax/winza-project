function openModal() {
    document.getElementById("authModal").style.display = "block";
}

function closeModal() {
    document.getElementById("authModal").style.display = "none";
}

function participateInRaffle() {
    // Проверяем, авторизован ли пользователь
    const username = localStorage.getItem("username");
    
    if (!username) {
        // Если пользователь не авторизован, открываем окно регистрации
        openModal();
    } else {
        // Если авторизован, продолжаем участвовать в розыгрыше
        alert("Вы можете участвовать в розыгрыше!");
        // Здесь можно добавить дополнительную логику для участия в розыгрыше
    }
}

function authenticate() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Простейшая проверка данных
    if (username === "1111" && email === "1111@mail.ru" && password === "1111") {
        // Сохранение имени пользователя в локальное хранилище для использования на dashboard
        localStorage.setItem("username", username);
        // Перенаправление на страницу dashboard.html
        window.location.href = "dashboard.html";
    } else {
        alert("Неправильные учетные данные. Пожалуйста, попробуйте еще раз.");
    }
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    const modal = document.getElementById("authModal");
    if (event.target === modal) {
        closeModal();
    }
}
