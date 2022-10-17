import "../App.css";
function Navbar() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
return (
    <>
    <a href="/" className='acciGone'>AcciGone</a>
  <div className='nav'>
    <li className='navlink logout'><p onClick={logout} href="/">Logout</p></li>
    <li className='navlink'><a href="/about">About</a></li>
    <li className='navlink'><a href="/settings">Settings</a></li>
    <li className='navlink'><a href="/details">Details</a></li>
    <li className='navlink'><a href="/home">Home</a></li>
  </div>
  </>
)
}
export default Navbar;