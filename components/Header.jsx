import React from 'react'
import { Heading, IconButton, SimpleGrid, ButtonGroup, Spacer } from '@chakra-ui/react'
import { MoonIcon, SunIcon, DeleteIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  let color = colorMode === 'Light' ? "#000000" : "#eaeaea"

  return (
    <div style={{ borderBottom : `1px solid ${color}`, justifyContent:'space-between'}}>
			<SimpleGrid columns={2}>
			<Heading> cubetimer </Heading>
				<ButtonGroup>					
					<Spacer />
					<IconButton 
						aria-label="Toggle Color Mode" onClick={toggleColorMode}
					>
							{ colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
					</IconButton>
				</ButtonGroup>
			</SimpleGrid>
    </div>
  )
}

export default Header