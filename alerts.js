function alert(members) {
    const nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {  // use your gmail user name & password. You may need to set your account to allow less secure apps
            user: '###youremail###@gmail.com',
            pass: '###yourpassword###'
        }
    });

    const recipients = members.map((member) => {
        return member.email;
    }).join(',');

    return {
        about: (donatedVideo) => {
            const email = {
                from: 'alerts@myvideolibrary.com',
                to: recipients,
                subject: 'A new movie has been added to the library - ' + donatedVideo.title,
                text: 'Dear Member, Just to let you know that '
                    + donatedVideo.title +
                    '(' + donatedVideo.year +
                    ') has been added to the library and is now available to borrow'
            };

            console.log(email);

            transporter.sendMail(email, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    }
}

module.exports = alert;