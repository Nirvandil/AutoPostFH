var messageStrings = ['Здравствуйте. \nСейчас посмотрим.', 'Пожалуйста, в случае возникновения ' +
'проблем или если будет нужна наша помощь - обращайтесь.', 'Пароль пользователя root, который' +
' вы указали при создании тикета, не подходит. Укажите, пожалуйста, корректный (если вы его не ' +
'изменяли, он может быть найден в письме с доступами, ' +
'которое приходило вам после заказа сервера)'];
var messageInputForm = document.getElementsByName('message')[0];
var buttonAddMessage = document.querySelectorAll('input[value="Добавить"]')[0];
var buttonChangeMessage = document.querySelectorAll('input[value="Изменить"]')[0];
var hello = document.createElement('input');
var by = document.createElement('input');
var passIncorrect = document.createElement('input');
hello.type = 'button';
hello.value = 'Прив';
by.type = 'button';
by.value = 'Пока';
passIncorrect.type = 'button';
passIncorrect.value = 'Pass';
hello.addEventListener('click', function () {
    addReply(0);
});
by.addEventListener('click', function () {
    addReply(1);
});
passIncorrect.addEventListener('click', function () {
    addReply(2)
});
var message = document.getElementsByName('message')[0];
if (message) {
    var placeForButtons = message.parentElement.parentElement;
    placeForButtons.appendChild(hello);
    placeForButtons.appendChild(by);
    placeForButtons.appendChild(passIncorrect);
    message.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.keyCode == 13) {
            if (messageInputForm.value == '')
                alert("Нельзя отправить пустое сообщение!");
            else
                buttonAddMessage.click();
        }
    })
}
if (buttonChangeMessage) {
    message.addEventListener('keydown', function (event) {

    })
}
function addReply(string_num) {
    messageInputForm.value = messageStrings[string_num];
    buttonAddMessage.click();
}