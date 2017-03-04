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