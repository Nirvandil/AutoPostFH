// ==UserScript==
// @name        AutoPostAndColour
// @namespace   FriendHosting
// @include     https://friendhosting.net/admin_bar*
// @version     1
// @grant       none
// ==/UserScript==
document.body.style.background = 'lightgrey';
var messageStrings = [
    '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435. \n\u0421\u0435\u0439\u0447\u0430\u0441 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c.',
    '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u044f ' +
    '\u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0438\u043b\u0438 \u0435\u0441\u043b\u0438 \u0431\u0443\u0434\u0435\u0442 \u043d\u0443\u0436\u043d\u0430 \u043d\u0430\u0448\u0430 \u043f\u043e\u043c\u043e\u0449\u044c - \u043e\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c.',
    '\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f root, \u043a\u043e\u0442\u043e\u0440\u044b\u0439' +
    ' \u0432\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0438\u043a\u0435\u0442\u0430, \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442. \u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 (\u0435\u0441\u043b\u0438 \u0432\u044b \u0435\u0433\u043e \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u043b\u0438, ' +
    '\u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0430\u0439\u0434\u0435\u043d \u0432 \u043f\u0438\u0441\u044c\u043c\u0435 \u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u043b\u043e \u0432\u0430\u043c \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430)',
    '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435. \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0442\u044c\u044e \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0434\u0430\u0442\u0430\u0446\u0435\u043d\u0442\u0430. \u041d\u0430\u0434 \u0438\u0445 \u0443\u0441\u0442\u0440\u0430' +
    '\u043d\u0435\u043d\u0438\u0435\u043c \u0443\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442. \u041f\u0440\u0438\u043d\u043e\u0441\u0438\u043c \u0438\u0437\u0432\u0438\u043d\u0435\u043d\u0438\u044f \u0437\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0435\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430'
];
var messageInputForm = document.getElementsByName('message') [0];
var buttonAddMessage = document.querySelectorAll('input[value="\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"]') [0];
var buttonChangeMessage = document.querySelectorAll('input[value="\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"]') [0];
var hello = addButton('\u041f\u0440\u0438\u0432', 0);
var by = addButton('\u041f\u043e\u043a\u0430', 1);
var passIncorrect = addButton('Pass', 2);
var dcnet = addButton('dcnet', 3);
var message = document.getElementsByName('message') [0];
if (message) {
    var tables = document.getElementsByTagName('table');
    //\u041a\u043d\u043e\u043f\u043a\u0430 \u0432 \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f:
    var orderText = document.getElementsByTagName('td') [7].textContent;
    var address = orderText.match(/([0-9]{1,3}[\.]){3}[0-9]{1,3}/);

    if (address) {
        var toVesta = document.createElement('input');
        toVesta.type = 'button';
        toVesta.value = 'To VESTA';
        toVesta.addEventListener('click', function () {
                window.open("https://"+address[0]+":8083");
        });
        var toIsp = document.createElement('input');
        toIsp.type = 'button' ;
        toIsp.value = 'To ISP' ;
        toIsp.addEventListener('click', function(){
            window.open("https://"+address[0]+":1500/ispmgr");
        });
        tables[0].appendChild(toVesta);
        tables[0].appendChild(toIsp);
    }
    //\u041a\u043e\u043d\u0435\u0446 \u043a\u043d\u043e\u043f\u043a\u0438 \u0432 \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f
    var table = document.getElementsByTagName('tbody') [4];
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
                alert('\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435!');
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
function addButton(name, answerNumber) {
    var addedButton = document.createElement('input');
    addedButton.type = 'button';
    addedButton.value = name;
    addedButton.addEventListener('click', function () {
        addReply(answerNumber)
    });
    return addedButton;
}
