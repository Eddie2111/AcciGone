const signup_duplicateID = {
    status:400,
    message:"The car number is already registered.",
    reason: "Duplicate number recieved",
    route:"/login"
}
const network_error = {
    status:404,
    message:"network error",
    route:"/register"
}

module.exports = {
    signup_duplicateID, network_error
};