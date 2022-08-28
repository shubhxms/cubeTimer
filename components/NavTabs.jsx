import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Stat from './Stat'
import Stopwatch from './Stopwatch'
import Settings from './Settings'

function NavTabs() {


  return (
    <div>
        <Tabs 
            defaultIndex={1} isFitted
            colorScheme='gray'
        >
            <TabList>
                <Tab>history</Tab>
                <Tab>timer</Tab>
                <Tab>settings</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Stat />
                </TabPanel>
                <TabPanel>
                    <Stopwatch />
                </TabPanel>
                <TabPanel>
                    <Settings/>
                </TabPanel>
            </TabPanels>
            
            </Tabs>
    </div>
  )
}

export default NavTabs