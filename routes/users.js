
const express = require("express");
const router = express.Router();
const User = require("../models/User.js")//IMPORTANTE el nombre de MODELS Siempre va la primer letra en MAYÚSCULAS!




//operaciones CRUD (Create, Read, Update, Delete)

//crear usuario
router.post("/create", async(req, res) => {
    try {
        const user = await User.create(req.body);
     
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a user" });
    }
});

//obtener usuario
router.get("/read", async(req, res) => {
    try {
        const findUser = await User.find();
        res.status(201).send(findUser);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to read the user" });
    }
});

//obtener usuario x username
router.get("/read/:username", async(req, res) => {
    console.log(req.params.username)//me devuelve "hola" 
    try {
        const findUser = await User.findOne({username:req.params.username});
        console.log(findUser)
        res.status(201).send(findUser);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to read the user" });
    }
});

//actualizar datos usuario x username
router.put("/update/:username", async(req, res) => {
    try {
        const updateUser = await User.updateOne({username:req.params.username});
        res.status(201).send(updateUser);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to update the user" });
    }
});

//eliminar usuario
router.delete("/delete/:username", async(req, res) => {
    try {
        const deleteUser = await User.deleteOne({username:req.params.username});
        console.log(deleteUser)
        res.status(201).send({ message: `The username was deleted` });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to delete the user" });
    }
});

module.exports = router;