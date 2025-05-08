import React from 'react'; 
import './Dashboard.css';
import {useNavigate} from 'react-router-dom';

function Dashboard(){

const navigate=useNavigate();

const handleDentist = () => {
  navigate('/Dentist')
} 
const handleCardiologist = () => {
  navigate('/Cardiologist');
}
const handleNeurologist = () => {
  navigate('/Neurologist');
}
const handlePsychiatrist=()=>{
  navigate('/Psychiatrist');
}
const handlePulmonologist = () => {
  navigate('/Pulmonologist')
} 
const handlePediatrician = () => {
  navigate('/Pediatrician')
} 


  return (
    <>
    <div className="overall-container">
      <div className="dashboard-container">
        <h1 className="heading-box1" onClick={handleDentist}>DENTIST</h1>
        <h1 className="heading-box2" onClick={handleCardiologist}>CARDIOLOGIST</h1>
        <h1 className="heading-box3" onClick={handleNeurologist}>NEUROLOGIST</h1>
        </div>
        <br/><br/><br/><br/>
      <div className="dashboard-container">
        <h1 className="heading-box1" onClick={handlePsychiatrist}>PSYCHIATRIST</h1>
        <h1 className="heading-box2" onClick={handlePulmonologist}>PULMONOLOGIST</h1>
        <h1 className="heading-box3" onClick={handlePediatrician}>PEDIATRICIAN</h1>
      </div>
      </div>
    </>
  );
}

export default Dashboard; 