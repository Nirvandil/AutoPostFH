var messageStrings = ['Здравствуйте. \nСейчас посмотрим.', 'Пожалуйста, в случае возникновения ' +
'проблем или если будет нужна наша помощь - обращайтесь.', 'Пароль пользователя root, который' +
' вы указали при создании тикета, не подходит. Предоставьте, пожалуйста, корректный (если вы его не изменяли, ' +
'он может быть найден в письме с доступами, которое приходило вам после заказа сервера)',
'Здравствуйте. На данный момент наблюдаются проблемы с сетью на уровне датацента. Над их устра' +
'нением уже работают. Приносим извинения за предоставленные неудобства'];
var messageInputForm = document.getElementsByName('message')[0];
var buttonAddMessage = document.querySelectorAll('input[value="Добавить"]')[0];
var buttonChangeMessage = document.querySelectorAll('input[value="Изменить"]')[0];
var hello = addButton('Прив', 0);
var by = addButton('Пока', 1);
var passIncorrect = addButton('Pass', 2);
var dcnet = addButton('dcnet', 3);
var message = document.getElementsByName('message')[0];
if (message) {
    var table  = document.getElementsByTagName('tbody')[4];
    var buttonsRow = document.createElement('tr');
    table.insertBefore(buttonsRow, table.rows[1]);
    var cellHello = document.createElement('td');
    var cellPass = document.createElement('td');
    var cellBy = document.createElement('td');
    var cellDcNet = document.createElement('td');
    if (document.body.scrollHeight > 1800) {
        //Next 7 lines - special for scrolling down
        var scrollButton = document.createElement('input');
        scrollButton.type = 'button';
        scrollButton.value = 'scroll down';
        scrollButton.addEventListener('click', function () {
            window.scrollTo(0, document.body.scrollHeight);
        });
        var tables = document.getElementsByTagName('table');
        tables[0].appendChild(scrollButton);
    }
    buttonsRow.appendChild(cellHello);
    buttonsRow.appendChild(cellPass);
    buttonsRow.appendChild(cellBy);
    buttonsRow.appendChild(cellDcNet);
    cellHello.appendChild(hello);
    cellPass.appendChild(passIncorrect);
    cellBy.appendChild(by);
    cellDcNet.appendChild(dcnet);
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
function addButton(name, answerNumber){
    var addedButton = document.createElement('input');
    addedButton.type='button';
    addedButton.value=name;
    addedButton.addEventListener('click', function(){
        addReply(answerNumber)
    });
    return addedButton;
}