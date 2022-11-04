const express= require ('express');
const { undefinedError, AddCars, getAllCars, getCarById, editCar, deleteCar } = require('../controllers/cars');

const CarsRouter = express.Router();

//Request Methodes 
CarsRouter.get("/",undefinedError);
CarsRouter.post("/newarticle",AddCars);
CarsRouter.get("/getAll",getAllCars);
CarsRouter.get("/getarticle/:id",getCarById)
CarsRouter.put("/editarticle/:id",editCar)
CarsRouter.delete("/deletearticle/:id",deleteCar)

//Add new user

//Login 


module.exports=CarsRouter;