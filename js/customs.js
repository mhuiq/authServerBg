function showHint(msg, type) {
    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom',
        theme: 'air'
    }
    Messenger().post({
        message: msg,
        type: type,
        showCloseButton: true
    });
}

function checkLogin(data) {
    var respObj = JSON.parse(data);
    if (respObj['isLogin'] != undefined && !respObj['isLogin']) {
        window.location.href = respObj['loginUrl'];
    }
}