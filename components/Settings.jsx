import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

import styles from '../styles/Home.module.css'

function Settings() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <div className={styles.main} styles={{minWidth: '40vw', maxWidth: '40vw', minHeight: '30vw', maxHeight: '30vw'}} >
      <Button colorScheme='red' onClick={onOpen}>
        Clear all stored records?
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Clear all data?
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? This operation cannot be undone!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={() => {
                    localStorage.setItem("cubeTimerStorage", JSON.stringify([]))
                    dispatchEvent(new Event("storage"));
                    onClose()
                }}
               ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  )
}

export default Settings