function VideoLibrary(catalogue, members, {register, of}, award, alert) {

    return (donatedVideo, donor) => {
        // add donated video to catalogue
        // register one rental copy of the donated video
        // award the donor 10 priority points
        // alert members about the donated video

        add(donatedVideo).to(catalogue);
        register(1).rentalCopy(of(donatedVideo));
        award(donor, 10).priorityPoints();
        alert(members).about(donatedVideo);
    };
}

function add(donatedVideo) {

    return {
        to: (catalogue) => {
            catalogue.push(donatedVideo);
        }
    }
}

module.exports = VideoLibrary;