import express from "express"

import AppointmentsController from "./controllers/AppointmentsController"
import ConnectionsController from "./controllers/ConnectionsController"
import UsersController from "./controllers/UsersController"
import DoctorsController from "./controllers/DoctorsController"

const appointmentsController = new AppointmentsController()
const connectionsController = new ConnectionsController()
const usersController = new UsersController()
const doctorsController = new DoctorsController()

const routes = express.Router()

routes.get("/", (request, response) => {
    return response.json({ message: "I'm working!"})
})

routes.get("/userappointments", appointmentsController.index)
routes.post("/userappointments", appointmentsController.create)

routes.get("/doctors", doctorsController.index)
routes.post("/doctors", doctorsController.create)

routes.get("/user", usersController.index)
routes.post("/user", usersController.create)

routes.get("/connections", connectionsController.index)
routes.post("/connections", connectionsController.create)

export default routes
