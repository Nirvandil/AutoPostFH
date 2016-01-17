
var messageStrings = ['Здравствуйте. \nСейчас посмотрим.', 'Пожалуйста, в случае возникновения ' +
'проблем - обращайтесь.'];
var messageInputForm = document.getElementsByName('message')[0];
var buttonAddMessage = document.querySelectorAll('input[value="Добавить"]')[0];
var hello = document.createElement('input');
hello.type = 'button';
hello.value = 'Прив';
hello.addEventListener('click', function() { addReply(0); } );
var by = document.createElement('input');
by.type = 'button';
by.value = 'Пока';
by.addEventListener('click', function() { addReply(1); } );
var message = document.getElementsByName('message')[0];
if (message) {
    var placeForButtons = message.parentElement.parentElement;
    placeForButtons.appendChild(hello);
    placeForButtons.appendChild(by);
    message.addEventListener('keydown', function (event){
        if (event.ctrlKey && event.keyCode == 13) {
            if (messageInputForm.value == '')
                alert("Нельзя отправить пустое сообщение!");
            else
                buttonAddMessage.click();
        }
    })
}
function addReply(string_num) {
    messageInputForm.value = messageStrings[string_num];
    buttonAddMessage.click();
}