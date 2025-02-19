import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General_info from './components/General_info';
import Edu_exp from './components/Edu_exp';
import School from './components/School';
import Prac_exp from './components/Prac_exp';
import Work from './components/Work';

function App() {
  const [eduList, setEduList] = useState([]);
  const [workList, setWorkList] = useState([]);

  function addSchool(school) {
    setEduList(prev => {
      return [...prev,  school];
    })
  }

  function addWork(work) {
    setWorkList(prev => {
      return [...prev, work];
    })
  }

  function delSchool(id) {
    setEduList((prev) => {
      return prev.filter((el, index) => {
        return index !== id;
      })
    })
  }

  function delWork(id) {
    setWorkList((prev) => {
      return prev.filter((el, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
    
      <h1>Resume/CV</h1>
      <h2>Enter general information about yourself</h2>
      <General_info />
      <div>
      <h2>Enter information about your education</h2>
      <Edu_exp onAdd={addSchool}/>
      </div>
      <div className="container">
      {eduList.map((el, index) => {
        return <School onDelete={delSchool} name={el.schoolName} title={el.titleStudy} date={el.dateStudy} key={index} id={index} />
      })}
      </div>
      <div>
      <h2>Enter information about your working experience</h2>
      <Prac_exp onAdd={addWork}/>
      </div>
      <div className="container">
      {workList.map((el, index) => {
        return <Work onDelete={delWork} name={el.compName} title={el.posTitle} resp={el.jobResp}  date={el.dateFromUntil} key={index} id={index} />
      })}
      </div>
    </>
  )
}

export default App
