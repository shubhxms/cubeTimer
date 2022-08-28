import React, {useState, useEffect} from 'react'
import { ButtonGroup, Button, Text, BeatLoader } from '@chakra-ui/react';
import { useTimer } from 'use-timer';
import scrambler from './Scrambler'
import { useColorMode } from '@chakra-ui/color-mode';
import styles from '../styles/Home.module.css'



export default function Stopwatch() {
    const { time, start, pause, reset, status } = useTimer({interval:1});
    const [running, setRunning] = useState(false);
    const [timeSecs, setTimeSecs] = useState(0);
    const [scramble, setScramble] = useState('scramble')
    const [history, setHistory] = useState([])

    const { colorMode, toggleColorMode } = useColorMode()
    let color = (running ? "#00A36C" : (colorMode === 'light' ? "#89CFF0" : "#4682B4"))
// #A7C7E7

    useEffect(() => {
      setScramble(scrambler())
      let items = localStorage.getItem("cubeTimerStorage")
      if (items){
        setHistory(JSON.parse(items))  
      }else{
        localStorage.setItem("cubeTimerStorage", JSON.stringify(history))
      }
    }, [])


    function onStopClick(){
      pause()
      setRunning(false)
      setTimeSecs(time/1000)
      setHistory([...history, time])
      localStorage.setItem("cubeTimerStorage", JSON.stringify([...history, time]))
      dispatchEvent(new Event("storage"));
    }

    function onStartClick(){
      setRunning(true)
      reset()
      start()
    }

    function onResetClick(){
      setTimeSecs(0)
      setScramble(scrambler())
      reset()
    }




    return (
      <div className={styles.container} style={{textAlign: 'center', padding: '10vh 0'}}>
        <Text fontSize='3xl' style={{fontSize: '100x !important'}}>{scramble}</Text>
        {running 
          && 
          <Text
            fontSize='4xl' style={{fontSize: '100px', cursor:'pointer', backgroundColor: color}}
            onClick={onStopClick}
          >
            {time} ms
        </Text>}
        {!running && <Text fontSize='4xl' style={{fontSize: '100px', cursor:'pointer', backgroundColor: color}} onClick={onStartClick}>
          {timeSecs}s
        </Text>}
        <p>{status === 'RUNNING' ? 'Running' : 'Not running'}</p>
        <ButtonGroup gap='4'>
            {/* <Button colorScheme='green' variant='ghost' onClick={onStartClick}>start</Button> */}
            <Button 
              colorScheme='yellow'
              variant='solid' minW='30vw' size='lg' onClick={onResetClick}
              isLoading={running}
              // spinner={<BeatLoader size={8} color='white' />}
            >
              reset
            </Button>
            {/* <Button colorScheme='red' variant='ghost' onClick={onStopClick}>stop</Button> */}
            
        </ButtonGroup>
      </div>
    );
  }