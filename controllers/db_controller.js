const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'kts'
// });

const con = mysql.createConnection({
    host: 'localhost',
    user: 'kids2sch_root',
    password: '~Patient123',
    database: 'kids2sch_kts2'
});



con.connect(function (err) {
    if (err) throw err;
});

//GET user by ID field			
module.exports.getUserById = (id) => {
    const query = "SELECT * FROM users WHERE id = '" + id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};


//GET All Users
module.exports.getAllUsers = () => {
    const query = "SELECT users.user_id, users.fname, users.lname, users.email FROM users WHERE is_active = '1';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET kid by ID field			
module.exports.getKidById = (id) => {
    const query = "SELECT * FROM kids WHERE id = '" + id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET kid by ID field			
module.exports.getTaskById = (id) => {
    const query = "SELECT * FROM notify WHERE id = '" + id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};


//GET user by email field
module.exports.getUserByEmail = (email) => {
    const query = "SELECT * FROM users WHERE email = '" + email + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET kid by email field
module.exports.getKidByEmail = (email) => {
    const query = "SELECT * FROM kids WHERE email = '" + email + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET user by user_id field
module.exports.getUserByUserId = (user_id) => {
    const query = "SELECT * FROM users WHERE user_id = '" + user_id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET user by kid_id field
module.exports.getUserByUserId = (user_id) => {
    const query = "SELECT * FROM kids WHERE kid_id = '" + user_id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET NUMBER OF ADMIS
module.exports.getCountAdmins = () => {
    const query = "SELECT COUNT(*) AS total FROM users WHERE is_admin = 1;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET count for sponsors
module.exports.getCountSponsors = () => {
    const query = "SELECT COUNT(*) AS total FROM users WHERE is_sponsor = 1;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET count for envoys
module.exports.getCountEnvoys = () => {
    const query = "SELECT COUNT(*) AS total FROM users WHERE is_envoy = 1;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET count for kids
module.exports.getCountKids = () => {
    const query = "SELECT COUNT(*) AS total FROM kids WHERE is_kid = 1;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET count for envoy kids
module.exports.getCountEnvoyKids = (user_id) => {
    const query = "SELECT COUNT(*) AS total FROM kids WHERE created_by = '" + user_id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET COUNT FOR ENVOY ACTIVE KIDS
module.exports.getCountEnvoyActiveKids = (user_id) => {
    const query = "SELECT COUNT(*) AS total FROM kids WHERE created_by = '" + user_id + "' and is_active = 1;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET COUNT FOR ENVOY InACTIVE KIDS
module.exports.getCountEnvoyInactiveKids = (user_id) => {
    const query = "SELECT COUNT(*) AS total FROM kids WHERE created_by = '" + user_id + "' and is_active = 0;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET count for envoys kts
module.exports.getCountEnvoyKTS = (user_id) => {
    const query = "SELECT COUNT(case when gender = 'Male' then 1 end) as male, COUNT(case when gender = 'Female' then 1 end) as female, COUNT(*) AS total FROM kids WHERE created_by = '" + user_id + "' and category = 'Kids to School';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET count for envoys ktsp
module.exports.getCountEnvoyKTSP = (user_id) => {
    const query = "SELECT COUNT(case when gender = 'Male' then 1 end) as male, COUNT(case when gender = 'Female' then 1 end) as female, COUNT(*) AS total FROM kids WHERE created_by = '" + user_id + "' and category = 'Kids to Sports';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET count for envoys kta
module.exports.getCountEnvoyKTA = (user_id) => {
    const query = "SELECT COUNT(case when gender = 'Male' then 1 end) as male, COUNT(case when gender = 'Female' then 1 end) as female, COUNT(*) AS total FROM kids WHERE created_by = '" + user_id + "' and category = 'Kids to Arts';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET count for envoys ktt
module.exports.getCountEnvoyKTT = (user_id) => {
    const query = "SELECT COUNT(case when gender = 'Male' then 1 end) as male, COUNT(case when gender = 'Female' then 1 end) as female, COUNT(*) AS total FROM kids WHERE created_by = '" + user_id + "' and category = 'Kids to Tech';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//UPDATE USER LAST LOGIN
module.exports.updateLastLogin = (id, last_login) => {
    const query = "UPDATE users SET last_login = '" + last_login + "'WHERE id = '" + id + "';";

    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET Admins
module.exports.getAdministrators = () => {
    const query = "SELECT * FROM users WHERE is_admin = 1;";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET Last Id
module.exports.getLastId = () => {
    const query = "SELECT * FROM users ORDER BY id DESC LIMIT 1;";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET kid last Id 
module.exports.getKidLastId = () => {
    const query = "SELECT * FROM kids ORDER BY id DESC LIMIT 1;";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//INSERT new Admin Profile
module.exports.insertAdminProfile = (user_id, fname, lname, dob, age, gender, country, state, email, telephone, user_type, title, profile_photo, is_active, password, is_admin) => {
    const query = "INSERT INTO users (`user_id`, `fname`, `lname`, `dob`, `age`, `gender`, `country`, `state`, `email`, `telephone`, `user_type`, `title`, `profile_photo`, `is_active`, `password`, `is_admin`) VALUES ('" + user_id + "', '" + fname + "', '" + lname + "', '" + dob + "', '" + age + "', '" + gender + "', '" + country + "', '" + state + "', '" + email + "', '" + telephone + "', '" + user_type + "', '" + title + "', '" + profile_photo + "', '" + is_active + "', '" + password + "', '" + is_admin + "');";
    //console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//UPDATE User Status
module.exports.updateUserStatus = (id, status) => {
    const query = "UPDATE users SET `is_active` = '" + status + "' WHERE id = '" + id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//UPDATE Task Status
module.exports.updateTaskStatus = (id, status, d_done) => {
    const query = "UPDATE notify SET `is_complete` = '" + status + "', date_done = '" + d_done + "' WHERE id = '" + id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//UPDATE MESSGE STATUS
module.exports.updateMessageStatus = (id) => {
    const query = "UPDATE messages SET `seen` = '1' WHERE id = '" + id + "';";
    console.log(query)
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//UPDATE Kid Status
module.exports.updateKidStatus = (id, status) => {
    const query = "UPDATE kids SET `is_active` = '" + status + "' WHERE id = '" + id + "';";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//UPDATE Admin Profile
module.exports.updateAdminProfile = (id, fname, lname, dob, age, gender, country, state, email, telephone, user_type, title, profile_photo, password, editor, time) => {
    const query = "UPDATE users SET `fname` = '" + fname + "', `lname` = '" + lname + "', `dob` = '" + dob + "', `age` = '" + age + "',`gender` = '" + gender + "', `country` = '" + country + "', `state` = '" + state + "', `email` = '" + email + "', `telephone` = '" + telephone + "', `user_type` = '" + user_type + "', `title`  = '" + title + "', `profile_photo` =  '" + profile_photo + "', `password` = '" + password + "', `editted_by` = '" + editor + "', `last_editted` = '" + time + "' WHERE `id` = '" + id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//DELETE User Profile
module.exports.deleteUserProfile = (id) => {
    const query = "DELETE FROM users WHERE id = '" + id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//DELETE user task
module.exports.deleteUserTask = (id) => {
    const query = "DELETE FROM notify WHERE id = '" + id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//DELETE Kid Profile
module.exports.deleteKidProfile = (id) => {
    const query = "DELETE FROM kids WHERE id = '" + id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET Sponsors
module.exports.getSponsors = () => {
    const query = "SELECT * FROM users WHERE is_sponsor = 1;";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//INSERT new Sponsor Profile
module.exports.insertSponsorProfile = (user_id, fname, lname, dob, age, gender, country, state, email, telephone, user_type, title, proffession, profile_photo, is_active, password, is_sponsor) => {
    const query = "INSERT INTO users (`user_id`, `fname`, `lname`, `dob`, `age`, `gender`, `country`, `state`, `email`, `telephone`, `user_type`, `title`, `proffession`, `profile_photo`, `is_active`, `password`, `is_sponsor`) VALUES ('" + user_id + "', '" + fname + "', '" + lname + "', '" + dob + "', '" + age + "', '" + gender + "', '" + country + "', '" + state + "', '" + email + "', '" + telephone + "', '" + user_type + "', '" + title + "', '" + proffession + "', '" + profile_photo + "', '" + is_active + "', '" + password + "', '" + is_sponsor + "');";
    //console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//UPDATE User Profile
module.exports.updateUserProfile = (id, fname, lname, dob, age, gender, country, state, email, telephone, user_type, title, proffession, profile_photo, password, editor, time) => {
    const query = "UPDATE users SET `fname` = '" + fname + "', `lname` = '" + lname + "', `dob` = '" + dob + "', `age` = '" + age + "',`gender` = '" + gender + "', `country` = '" + country + "', `state` = '" + state + "', `email` = '" + email + "', `telephone` = '" + telephone + "', `user_type` = '" + user_type + "', `title`  = '" + title + "', `proffession`  = '" + proffession + "', `profile_photo` =  '" + profile_photo + "', `password` = '" + password + "', `editted_by` = '" + editor + "', `last_editted` = '" + time + "' WHERE `id` = '" + id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
}

//GET Envoys
module.exports.getEnvoys = () => {
    const query = "SELECT * FROM users WHERE is_envoy = 1;";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//INSERT new Envoy Profile
module.exports.insertEnvoyProfile = (user_id, fname, lname, dob, age, gender, country, state, email, telephone, user_type, title, proffession, profile_photo, is_active, password, is_envoy) => {
    const query = "INSERT INTO users (`user_id`, `fname`, `lname`, `dob`, `age`, `gender`, `country`, `state`, `email`, `telephone`, `user_type`, `title`, `proffession`, `profile_photo`, `is_active`, `password`, `is_envoy`) VALUES ('" + user_id + "', '" + fname + "', '" + lname + "', '" + dob + "', '" + age + "', '" + gender + "', '" + country + "', '" + state + "', '" + email + "', '" + telephone + "', '" + user_type + "', '" + title + "', '" + proffession + "', '" + profile_photo + "', '" + is_active + "', '" + password + "', '" + is_envoy + "');";
    //console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET Kids
module.exports.getKids = () => {
    const query = "SELECT * FROM kids WHERE is_kid = 1;";
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//GET Envoy Kids
module.exports.getEnvoyKids = (id) => {
    const query = "SELECT * FROM kids WHERE created_by = '" + id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//INSERT new kid profile
module.exports.insertKidProfile = (uid, category, fname, lname, mname, dob, age, gender, country, s_o, s_r, lga, email, tely, sname, saddress, los, cl, sfees, sother, pname, ptitle, pemail, ptel, story, goal, bc, pp, author) => {
    const query = "INSERT INTO kids (`kid_id`,`category`, `fname`, `lname`, `mname`, `dob`, `age`, `gender`, `country`, `state_o`, `state_r`, `lga`, `email`, `telephone`, `address`, `school_name`, `los`, `class`, `school_address`, `other_school_details`, `school_fees`, `parent_title`, `parent_name`, `parent_email`, `parent_telephone`, `story`, `goal`, `bc`, `profile_photo`, `is_active`, `is_kid`, `created_by`) VALUES('" + uid + "', '" + category + "', '" + fname + "', '" + lname + "', '" + mname + "', '" + dob + "', '" + age + "', '" + gender + "', '" + country + "', '" + s_o + "', '" + s_r + "', '" + lga + "', '" + email + "', '" + tely + "', '', '" + sname + "', '" + los + "', '" + cl + "', '" + saddress + "', '" + sother + "', '" + sfees + "', '" + ptitle + "', '" + pname + "', '" + pemail + "', '" + ptel + "', '" + story + "', '" + goal + "', '" + bc + "', '" + pp + "', '1', '1','" + author + "'); ";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//UPDATE Kid Profile
module.exports.updateKidProfile = (id, category, fname, lname, mname, dob, age, gender, country, s_o, s_r, lga, email, tely, sname, saddress, los, cl, sfees, sother, pname, ptitle, pemail, ptel, story, goal, bc, pp, editor, time) => {
    const query = "UPDATE kids SET `category` = '" + category + "', `fname` = '" + fname + "', `lname` = '" + lname + "', `mname` = '" + mname + "', `dob` = '" + dob + "', `age` = '" + age + "',`gender` = '" + gender + "', `country` = '" + country + "', `state_o` = '" + s_o + "', `state_r` = '" + s_r + "', `lga` = '" + lga + "',`email` = '" + email + "', `telephone` = '" + tely + "',  `address`= '', `school_name` = '" + sname + "', `los`=  '" + los + "', `class` = '" + cl + "', `school_address` = '" + saddress + "', `other_school_details` = '" + sother + "', `school_fees` = '" + sfees + "', `parent_title` = '" + ptitle + "', `parent_name` = '" + pname + "', `parent_email` = '" + pemail + "', `parent_telephone` = '" + ptel + "', `story` = '" + story + "', `goal` = '" + goal + "', `bc` = '" + bc + "', `profile_photo` = '" + pp + "', `editted_by` = '" + editor + "', `last_edit` = '" + time + "' WHERE`id` = '" + id + "'; ";
    // console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//get envoy tasks
module.exports.getEnvoyTasks = (id) => {
    const query = "SELECT * FROM notify WHERE category = 'task' AND receiver = '" + id + "' ORDER BY is_complete ASC;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//INSERT new task
module.exports.createNewNotification = (sender, receiver, topic, message, category, d_created, d_done, d_due) => {
    const query = "INSERT INTO notify (`sender`, `receiver`, `message_topic`, `message`, `category`, `date_created`, `date_done`, `due_date`, `is_complete`) VALUES('" + sender + "', '" + receiver + "', '" + topic + "', '" + message + "', '" + category + "', '" + d_created + "', '" + d_done + "', '" + d_due + "', '0');";
    //console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });

};


//UPDATE TASK
module.exports.updateNotification = (topic, message, d_due, id) => {
    const query = "UPDATE notify SET `message_topic`= '" + topic + "', `message`= '" + message + "', `due_date` = '" + d_due + "' WHERE id = '" + id + "' ;";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });

};


//add notification 
module.exports.addNoty = (user_id, msg, cat, count) => {
    const query = " INSERT INTO messages (`user_id`, `msg`, `category`, `count`) VALUES('" + user_id + "', '" + msg + "', '" + cat + "',  '" + count + "');";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};


//update notification
module.exports.updateNoty = (id, msg, count, cat) => {
    const query = " UPDATE messages SET `msg`= '" + msg + "', `count` = '" + count + "' WHERE user_id = '" + id + "' AND category = '" + cat + "'";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};


//GET notification created task count
module.exports.getNotifyMECount = (user_id) => {
    const query = "SELECT COUNT(*) AS total notify WHERE category = 'task' AND receiver = '" + user_id + "' AND sender = '" + user_id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};


//Get notifications
module.exports.getNotys = (id) => {
    const query = "SELECT * FROM messages WHERE user_id = '" + id + "' AND seen = '0'";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//get existing message category 
module.exports.notyExist = (id, cat) => {
    const query = "SELECT * FROM messages WHERE user_id = '" + id + "' AND category = '" + cat + "' AND seen = '0'";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};


//get chats
module.exports.getContacts = (id) => {
    const query = `SELECT * FROM 
                    (SELECT notify.id, notify.receiver, notify.sender, 
                    rec_users.user_id AS rec_user_id, rec_users.fname AS rec_fname, rec_users.lname AS rec_lname, rec_users.email AS rec_email, rec_users.profile_photo AS rec_pp, 
                    send_users.user_id AS send_user_id, send_users.fname AS send_fname, send_users.lname AS send_lname, send_users.email AS send_email, send_users.profile_photo AS send_pp, 
                    notify.message_topic, notify.message, notify.category, notify.date_created 
                    FROM notify 
                    INNER JOIN users rec_users ON notify.receiver = rec_users.user_id 
                    INNER JOIN users send_users ON notify.sender = send_users.user_id) 
                    AS contacts 
                    WHERE category = "chat" AND (sender = '` + id + `' OR receiver = '` + id + `');`
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};


// if chat exist
module.exports.getChat = (id) => {
    const query = "SELECT * FROM notify WHERE id = '" + id + "' AND category = 'chat';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};

//update chat
module.exports.updateChat = (chat, id) => {
    const query = "UPDATE notify SET message = '" + chat + "' where id = '" + id + "';";
    console.log(query);
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result);
            }

        });
    });
};




