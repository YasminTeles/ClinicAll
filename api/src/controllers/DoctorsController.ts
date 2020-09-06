import { NowRequest, NowResponse } from '@vercel/node'

import db from "../database/connection"

export default class DoctorsController {
    async index(request: NowRequest, response: NowResponse){
      const filters = request.query

      const type = filters.type as string
      let doctor

      if (type === "all"){
        doctor = await db("doctors")
          .select(['doctors.*'])
      }
      else{
        const name = filters.name as string
        doctor = await db("doctors")
          .where("doctors.name", "=", name)
          .select(['doctors.*'])
      }
      return response.json(doctor)
    }

    async create(request: NowRequest, response: NowResponse){
        const {
          name,
          avatar,
          speciality,
          price,
          ensurances
        } = request.body

        const transaction = await db.transaction()

        try {
          await transaction("doctors").insert({
              name,
              avatar,
              speciality,
              price,
              ensurances
          })

          await transaction.commit()

          return response.status(201).send("")

        } catch(error) {
          console.error(error)

          await transaction.rollback()

          return response.status(400).json({
              error: "Unexpected error while creating new user."
          })
      }
    }
}
