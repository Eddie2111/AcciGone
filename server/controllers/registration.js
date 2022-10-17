const register = (carDetail)=>{
    const car = {
        driverName: carDetail.driverName.toString().slice(0,18),
        carNumber : carDetail.carNumber.toString().slice(0,21),
        carModel  : carDetail.carModel.toString().slice(0,20),
        licenseNumber: carDetail.licenseNumber.toString().slice(0,32)
    }
    return car;
    
}
module.exports = register;