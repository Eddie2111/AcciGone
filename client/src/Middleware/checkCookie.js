const checkCookie = ()=>{
    if(localStorage.getItem("token")){
        window.location.href = "/login";
    }
}
export default checkCookie;