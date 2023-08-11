// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
  )
}