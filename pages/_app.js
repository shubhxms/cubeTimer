import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const config  = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )

}

export default MyApp
