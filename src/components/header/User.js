import React from "react"

import { useAuth0 } from "@auth0/auth0-react"
import Avatar from "@material-ui/core/Avatar"

function User() {
  const { user } = useAuth0()

  return (
    <Avatar src={user.picture} alt={user.name} />
  )
}

export default User
