import { NowRequest, NowResponse } from '@vercel/node'

import db from "../database/connection"

export default class UsersController {
    async index(request: NowRequest, response: NowResponse){
      const filters = request.query

      const email = filters.email as string

      const user = await db("users")
            .where("users.email", "=", email)
            .select(['users.*'])

      return response.json(user)
    }

    async create(request: NowRequest, response: NowResponse){
        const {
          name,
          avatar,
          email,
          ensurances
        } = request.body

        const transaction = await db.transaction()

        try {
          await transaction("users").insert({
              name,
              avatar,
              email,
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
