var FriendBirthday = function () {};

FriendBirthday.prototype = {
    init: function () {},
    set: function (obj) {
        var defaultData = JSON.parse(LocalContractStorage.get('all'));
        var data = Object.prototype.toString.call(defaultData) == '[object Array]' ? defaultData : [];
        data.push({
            id: obj.id,
            name: obj.name,
            birthday: obj.birthday,
            month: obj.month,
            content: obj.content
        });
        if (data.length > 1) {
            LocalContractStorage.del('all');
        };
        LocalContractStorage.set('all', JSON.stringify(data));
    },
    get: function () {
        return LocalContractStorage.get('all');
    }
};

module.exports = FriendBirthday;
