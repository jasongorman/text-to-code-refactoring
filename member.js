function award(donor, points) {

    return {
        priorityPoints: () => {
            donor.priorityPoints += points;
        }
    }
}

module.exports = award;