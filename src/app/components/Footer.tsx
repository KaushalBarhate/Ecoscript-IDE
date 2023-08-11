'use client'
import React from 'react';
import { Box, Text, Link,Center } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const repoLink = 'https://github.com/KaushalBarhate/Ecoscript'; 

  return (
    <Box backgroundColor="#2D3748" color="white" padding={4} >
        <Center>
      <Text display="inline" marginRight={8} as='i' >Made by <a href="https://www.linkedin.com/in/kaushalbarhate/" target='_blank'>Kaushal Barhate</a></Text>
          
      <Link href={repoLink} isExternal >
        <FaGithub size={24} />
      </Link>
            </Center>
    </Box>
  );
};

export default Footer;
