function groupById(arr) {
    return arr.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}
