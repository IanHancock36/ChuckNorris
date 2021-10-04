import { types, getSnapshot } from "mobx-state-tree"

const User = types.model({
    userID: types.optional(types.number, 1),
    userName: types.optional(types.string, "")
})

const Ian = User.create()