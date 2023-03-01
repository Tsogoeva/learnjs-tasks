function getAverageAge(users) {
    let ageSum = users.reduce((acc, user) => acc + user.age, 0);
    return ageSum / users.length;
}
