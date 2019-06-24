function register(copies) {
    return {
        rentalCopy: (addCopies) => {
            addCopies(copies);
        }
    }
}

function of(donatedVideo) {
    return (copies) => {
        donatedVideo.copies += copies;
    };
}

module.exports = {register, of};