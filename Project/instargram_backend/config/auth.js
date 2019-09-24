const jwt = require("express-jwt")

const getToken = req => {
    const { headers: { authorization } } = req

    if(authorization && authorization.split(" ")[0] === "Bearer") {
        return authorization.split(" ")[1]
    }
}

const auth = {
    require: jwt({
        secret: "kaname",
        userProperty: "payload",
        getToken: getToken
    }),
    optional: jwt({
        secret: "kaname",
        userProperty: "payload",
        getToken: getToken,
        credentialsRequired: false
    }),
}

module.exports = auth