export const getToastSettings = (message) => {
    return {
        message,
        duration: 2000,
        cssClass: 'toast-dialog',
        color: 'danger',
        keyboardClose: true,
    };
};

export const parseSearchFilter = (filter, searchFields) => {
    const filterKeyWords = filter.split(' ');
    const where = {};

    if (filter) {
        where['$or'] = [];
        searchFields.forEach(field => {
            filterKeyWords.forEach(element => {
                where['$or'].push({ [field]: { '$regex': `^${element}`, '$options' : 'i' } });
            });
        });
    }

    return where;
};
