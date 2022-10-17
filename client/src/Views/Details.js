import "./App.css";
import Navbar from "./Components/Navbar"
import "../input.css"
import checkCookie from "../Middleware/checkCookie"
const Details = ()=>{
    checkCookie()
const carDetails = {
    activeFrom:"28-7-2022",
    engineStatus:"Active",
    lastRepairing:"12-5-2022",
}
return (
  <>

  <Navbar/>
<div className="background">
<div class="grid grid-cols-2 gap-15">

<div className="card">

<div className="detailCardHead">Car Detail</div>
<table class="table-fixed">
    <thead>
    </thead>
    <tbody>
        <tr>
        <td>Active from</td>
        <td> {carDetails.activeFrom}</td>

        </tr>
        <tr>
        <td>Engine Status</td>
        <td> {carDetails.engineStatus}</td>

        </tr>
        <tr>
        <td>Last repairing</td>
        <td> {carDetails.lastRepairing}</td>

        </tr>
    </tbody>
    </table>
</div>

<div className="card">
    <table class="table-fixed">
    <thead>
        <tr>
        <th>Song</th>
        <th>Artist</th>

        </tr>
    </thead>
    <tbody>
        <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>

        </tr>
        <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>

        </tr>
        <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>

        </tr>
    </tbody>
    </table>
</div>

</div>
</div>    
</>    
);

}
export default Details;

