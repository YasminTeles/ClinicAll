import { NowRequest, NowResponse } from '@vercel/node'

import db from "../database/connection"

export default class ConnectionsController {
    async index(request: NowRequest, response: NowResponse){
        const totalConnections = await db("connections").count("* as total")

        const { total } = totalConnections[0]

        return response.json({ total })
    }

    async create(request: NowRequest, response: NowResponse){
        const { user_id } = request.body

        await db("connections").insert({
            user_id
        })

        return response.status(201).send("")
    }
}
