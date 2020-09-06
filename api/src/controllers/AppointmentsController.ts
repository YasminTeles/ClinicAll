import { NowRequest, NowResponse } from '@vercel/node'

import db from "../database/connection"
import convertHourToMinutes from "../utils/convertHourToMinutes"

export default class AppointmentsController {
    async index(request: NowRequest, response: NowResponse) {
        const filters = request.query

        const user = filters.user_id as string

        const appointments = await db("appointments")
            .where("appointments.user_id", "=", user)
            .join("users", "appointments.user_id", "=", "users.id")
            .join("doctors", "appointments.doctor_id", "=", "doctors.id")
            .select(['appointments.*', "users.*", "doctors.*"])

        return response.json(appointments)
    }

    async create(request: NowRequest, response: NowResponse) {
        const {
            user_id,
            doctor_id,
            date,
            time,
            speciality,
            price,
            annotations
        } = request.body

        const transaction = await db.transaction()

        try {

            await transaction("appointments").insert({
              date,
              time: convertHourToMinutes(time),
              speciality,
              price,
              annotations,
              user_id,
              doctor_id
            })

            await transaction.commit()

            return response.status(201).send("")

        } catch(error) {
            console.error(error)

            await transaction.rollback()

            return response.status(400).json({
                error: "Unexpected error while creating new class."
            })
        }
    }
}
