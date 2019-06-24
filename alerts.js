const nodemailer = require('nodemailer');

function send(email, transporter) {
    transporter.sendMail(email, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function newAlert(recipients) {
    return {
        about: (donatedVideo) => {
            return {
                from: 'alerts@myvideolibrary.com',
                to: recipients,
                subject: 'A new movie has been added to the library - ' + donatedVideo.title,
                text: 'Dear Member, Just to let you know that '
                    + donatedVideo.title +
                    '(' + donatedVideo.year +
                    ') has been added to the library and is now available to borrow'
            }
    }
};
}

function by(nodemailer) {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {  // use your gmail user name & password. You may need to set your account to allow less secure apps
            user: '###youremail###@gmail.com',
            pass: '###yourpassword###'
        }
    });
}

function toAll(members) {
    const recipients = members.map((member) => {
        return member.email;
    }).join(',');
    return recipients;
}

function alert(members) {
    return {
        about: (donatedVideo) => {
            send(newAlert(toAll(members)).
                about(donatedVideo), by(nodemailer));
        }
    }
}

module.exports = alert;