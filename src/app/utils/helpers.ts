export const getToastSettings = (message) => {
    return {
        message,
        duration: 2000,
        cssClass: 'toast-dialog',
        color: 'danger',
        keyboardClose: true,
    };
};
