const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "R#7pQ2zX",
    database: "sms"
})



const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = express();

router.use(function (req, res, next) {

    console.log('middleware working');
    next();


});





router.use(express.json());
router.use(cors()); // it prevents someone else if trying to access our domain or maybe api giving error to him
router.use(cookieParser()); // it prevents someone else if trying to access our domain or maybe api giving error to him
router.set("view engine", "ejs");

router.use(express.static('./public'));




router.post('/addStudent', function (req, res) {

    const e = "Select email from Students where email = ?";


    db.query(e, [req.body.email], (err, data) => {

        if (err) {
            res.status(500).json(err);

        }
        if (data.length) {
            return res.status(409).json("User already Exist!");

        }

        // encrypting the password which will be entered by user when registering using bcrypt

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);



        const q = "Insert into Students (student_id,student_name,section_id,degree,email,password,year) values(?)";

        const Values = [req.body.student_id, req.body.student_name, req.body.section_id,
        req.body.degree, req.body.email, hashedPassword, req.body.year
        ];

        db.query(q, [Values], (err, data) => {

            if (err) {
                res.status(500).json(err);

            }
            //else 
            return res.status(200).json("New Student has been added in database!");
        });

    }); 
});



router.get('/login', function (req, res) {
    console.log("Executing")
    const q = "SELECT * FROM Students WHERE email = ? and password = ?";
    db.query(q, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (result.length === 0) {
            // No user found with this email
            return res.status(404).json("User Does not Exist");
        }

        console.log(result);
        const checkPassword = req.body.password === result[0].password;
        if (!checkPassword) {
            // Entered password is wrong
            return res.status(400).json("Wrong Password!");
        }

        const token = jwt.sign({ id: result[0].id }, "secretKey");
        const { password, ...others } = result[0];

        res.cookie("accessToken", token, { httpOnly: true })
            .status(200)
            .json(others);
    });
});



router.post("/logout", (req,res)=>{

    res.clearCookie("accessToken",{
        secure: true,
        sameSite: "none"
    }).status(200).json("Logged out"); // we need axios to make api requests


})




router.post('/student/update',(req,res)=>{
    console.log(req.body);
    const queryData = req.body;
    const sqlQuery = `UPDATE Student SET ${queryData.column}="${queryData.updatedValue}" WHERE student_id="${queryData.student_id}";`
    console.log(sqlQuery)
    sqlConnection.query(sqlQuery,(err,row)=>{
        if (err) {
            res.render('basicError',{msg:err.message});
        
    }
        else {console.log('Updating data in Students table successful')
        res.redirect('/student')}
    })
    
})


router.post('/student/delete', (req,res)=>{
    const queryData = req.body;
    const sqlQuery = `DELETE FROM Student WHERE Student_ID="${queryData.student_id}"`
    sqlConnection.query(sqlQuery,(err,row)=>{
        if (err) throw err;
        else console.log('Deletion from Students table successful')
    })
        
    res.redirect('/Student');
    })

router.post('/student/search',(req,res)=>{
    const queryData = req.body;
    const sqlQuery = `SELECT * FROM Student WHERE ${queryData.column}="${queryData.searchValue}"`;
    sqlConnection.query(sqlQuery,(err,row)=>{
        if (err) throw err;
        else console.log('Searching data in Students table successful')
        res.render('student',{data:row})
    })


})

router.post('/student/insert',(req,res)=>{
        console.log(req.body);
        const queryData = req.body;
        const sqlQuery = `INSERT INTO Students(Student_id,first_name,last_name,address_1,address_2,student_phone,student_email,dept_id ) VALUES ("${queryData.student_id}","${queryData.fname}","${queryData.lname}","${queryData.tempaddress}","${queryData.permaddress}","${queryData.contact}","${queryData.email}","${queryData.Dep_ID}",);`
        sqlConnection.query(sqlQuery,(err,row)=>{
                    if (err) throw err;
                    else console.log('Students table Query insertion successful')
                })
        res.redirect('/student')
    })










// router.post('/login', function (req, res) {



//     const q = "Select * from Students where email = ?";

//     db.query(q, [req.body.email], (err, data) => {

//         if (err) {
//             res.status(500).json(err);

//         }
//         if (data.length === 0) {
//             // this means no user found with this email
//             return res.status(404).json("User Does not Exists");
//         }

//         const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

//         if (!checkPassword) {
//             // this means entered password is wrong
//             return res.status(404).json("Wrong Password!");
//         }
//         //else 
//         return res.status(200).json("New Student has been added in database!");




//     });


//     // encrypting the password which will be entered by user when registering using bcrypt

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(req.body.password, salt);


//     const token = jwt.sign({
//         id: data[0].id
//     }, "secretKey");

//     const {
//         password,
//         ...others
//     } = data[0];

//     res.cookie("accessToken", token, {
//         httpOnly: true,
//     }).status(200).json(others);


// db.query(q, [Values], (err, data) => {

//     if (err) {
//         res.status(500).json(err);

//     }
//     //else 
//     return res.status(200).json("New Student has been added in database!");
// });


// });











router.post("/profile", function (req, res) {


    res.render("class");

})



router.listen(5000);