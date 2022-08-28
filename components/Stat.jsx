import React, {useState, useEffect} from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2';
import styles from '../styles/Home.module.css'
   

function Stat() {


  let [times, setTimes] = useState([])

  useEffect(() => {
    syncLocalStorage()
    window.addEventListener('storage', () => {
      syncLocalStorage()
    })
  }, [])

  const syncLocalStorage = () => {
    setTimes(JSON.parse(localStorage.getItem("cubeTimerStorage"))) //: null
  }

    let solves = []

    
    for (let i = 0; i < times.length; i++){
      solves.push(i+1)
    }

    for (let ele in solves){
        ele /= 1000
    }

    let data = {
      labels: solves,
      datasets: [{
        label: 'cubing time',
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: times
          }]
        }
    let options= {
      responsive:true,
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 0}}],
      }}



  return (
    <div className={styles.container}>
        <Chart
          type = "line"
          data = {data}
          options = {options}  
        />
    </div>
  )
}

export default Stat