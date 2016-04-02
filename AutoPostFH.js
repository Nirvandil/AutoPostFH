document.body.style.background = 'lightgrey';
var buttonAddMessage = document.querySelectorAll('input[value="Добавить"]') [0];
var message = document.getElementsByName('message') [0];
if (message) {
    var tables = document.getElementsByTagName('table');
    var orderText = ((document.getElementsByTagName('td') [7].textContent.search('Заказ')) >= 0)?document.getElementsByTagName('td')[7].textContent:document.getElementsByTagName('td')[6].textContent;
    var address = orderText.match(/([0-9]{1,3}[\.]){3}[0-9]{1,3}/);
    //aimRow - place (tr) where we'll place our new menu and buttons
    var aimRow = document.getElementsByTagName('tbody') [4].children[4];
    addToPanelButtons(address);
    addScrollDownButton();
    addMenuToPage(aimRow);
    addPostButtonToPage(aimRow);
    message.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.keyCode == 13) {
            if (message.value == '')
                alert('Нельзя добавить пустое сообщение!');
            else
                buttonAddMessage.click();
        }
    })
}
//Create Menu and Options
function createMenu()
{
    var dropDownMenu = document.createElement('select');
    dropDownMenu.setAttribute('id', 'dropDownMenu');
    var helloOption = document.createElement('option');
    var passOption = document.createElement('option');
    var byOption = document.createElement('option');
    var dcTroublesOption = document.createElement('option');
    helloOption.value = 'Здравствуйте. Сейчас посмотрим.';
    passOption.value = 'Пароль пользователя root, который вы указали при создании тикета, не подходит, укажите, пожалуйста, корректный. \n' +
        'Если вы его не изменяли, он может быть найден в письме, которое приходило вам после заказа сервера.';
    byOption.value = 'Пожалуйста, в случае возникновения проблем или если будет нужна наша помощь - обращайтесь.' ;
    dcTroublesOption.value = 'Здравствуйте. На данный момент имеются проблемы с сетью на уровне датацентра. Нади их устранением уже работают.\n' +
        'Приносим извинения за доставленные неудобства.' ;
    helloOption.text = 'Привет';
    passOption.text = 'Пароль';
    byOption.text = 'Пока';
    dcTroublesOption.text = 'Сеть';
    dropDownMenu.appendChild(helloOption);
    dropDownMenu.appendChild(passOption);
    dropDownMenu.appendChild(byOption);
    dropDownMenu.appendChild(dcTroublesOption);
    return dropDownMenu;
}
function postAnswer ()
{
    var menu = document.getElementById('dropDownMenu');
    message.value = menu.options[menu.selectedIndex].value;
    buttonAddMessage.click();
}
//Add Menu to page and button with listener to post
function addMenuToPage(aimRow)
{
    aimRow.appendChild(createMenu());
}
function addToPanelButtons(hasAddress)
{
    if (hasAddress){
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
}
function addScrollDownButton()
{
    if (document.body.scrollHeight > 1080) {
        //Next 7 lines - special for scrolling down
        var scrollButton = document.createElement('input');
        scrollButton.type = 'button';
        scrollButton.value = 'scroll down';
        scrollButton.addEventListener('click', function () {
            window.scrollTo(0, document.body.scrollHeight);
        });
        tables[0].appendChild(scrollButton);
    }
}
function addPostButtonToPage(aimRow)
{
    var addPost = document.createElement('input');
    addPost.type = 'button';
    addPost.value = 'Запостить';
    addPost.addEventListener('click', function(){
        postAnswer();
    });
    aimRow.appendChild(addPost);
}