/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  Button,
  Link,
} from "@chakra-ui/react";
// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import dynamic from 'next/dynamic';
const SyntaxHighlighter = dynamic(
    () => import('react-syntax-highlighter').then((mod) => mod.Light),
    { loading: () => <div>Loading code...</div>,ssr: false }
  );
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
atomOneDark["hljs"] = {
  ...atomOneDark["hljs"],
  background: "#161B22",
  color: "white",
};
const Documentation: React.FC = () => {
  const codeSnippet = "x := 10;\ny := 20;\nz := x + y;\nPRINT(z);";
  const codeOutput = "30\nEnergy Consumed: 4\nCarbon Footprint: 0.3950000000000001";

  return (
    <Box p={8} backgroundColor="#2D3748" color="white">
      <a href="/ide">
        <Button
          leftIcon={<FaArrowLeft />}
          variant="ghost"
          colorScheme="whiteAlpha"
        >
          Back
        </Button>
      </a>
      <Heading as="h1" size="xl">
        EcoScript Programming Language
      </Heading>
      <Text mt={4}>
        EcoScript (.ecs) is a programming language built upon python designed
        with sustainability in mind. With the constant growth in computational
        technologies, energy consumption is escalating at an alarming rate.
        EcoScript takes a step towards understanding and optimizing the energy
        efficiency of code, aiming to contribute to global sustainable
        development.
      </Text>

      <Heading as="h2" size="lg" mt={8}>
        Why EcoScript?
      </Heading>
      <Text mt={4}>
        Computers use energy. With more and more processes being automated,
        energy consumption from computational activities is on the rise.
        EcoScript is designed to make developers conscious of the energy their
        code consumes, fostering a mindset of sustainability.
      </Text>

      <Heading as="h2" size="lg" mt={8}>
        How EcoScript Measures Energy
      </Heading>
      <Text mt={4}>
        Energy Tracking: The energy consumption values in EcoScript are assigned
        for illustration purposes. Basic operations, like addition or
        multiplication, are given arbitrary energy costs, which are then
        accumulated as the code executes.
      </Text>
      <Text mt={4}>
        Carbon Footprint Estimation: Similarly, the carbon footprint values are
        illustrative and assigned based on the tracked energy consumption. These
        values are not meant to reflect real-world carbon emissions but serve to
        visualize the connection between code execution and potential
        environmental impact.
      </Text>

      <Heading as="h2" size="lg" mt={8}>
        Under the Hood
      </Heading>
      <Text mt={4}>
        1. Lexer: It reads the code and identifies variables, operators, and
        other components.
      </Text>
      <Text>
        2. Parser: This processes the identified components, executing
        operations like calculations.
      </Text>
      <Text>
        3. Energy Tracking: Integrated within the parser, this feature tracks
        energy consumption as the code executes.
      </Text>
      <Text>
        4. Interpreter: EcoScript can be run interactively or from files,
        similar to many established programming languages.
      </Text>

      <Heading as="h2" size="lg" mt={8}>
        Why Python?
      </Heading>
      <Text mt={4}>
        EcoScript's foundation lies in Python, a widely-used programming
        language known for its readability and versatility. This makes the
        interpreter more accessible to developers and allows for seamless
        integration with existing Python libraries.
      </Text>
      <Text>
        1. Lexer: Built with the Sly library, the lexer identifies the various
        components in EcoScript, such as variables, operators, and control flow
        statements.
      </Text>
      <Text>
        2. Parser: Also utilizing Sly, the parser translates the components
        identified by the lexer into executable code. It's here that the energy
        tracking and carbon footprint calculations occur.
      </Text>

      <Heading as="h2" size="lg" mt={8}>
        Features
      </Heading>
      <List mt={4}>
        <ListItem>
        Arithmetic Operations: Supports basic arithmetic operations like addition, subtraction, multiplication, and division.
        </ListItem>
        <ListItem>
        Control Flow: Includes conditional statements like if, else, and loops like while.
        </ListItem>
        <ListItem>
        Energy Consumption: Calculates the energy consumed during code execution.
        </ListItem>
        <ListItem>
        Carbon Footprint: Estimates the carbon footprint associated with running the code.
        </ListItem>
      </List>

      <Heading as="h3" size="md" mt={8}>
        Syntax
      </Heading>
      <Divider mt={4} />
      <Text mt={4}>Variables</Text>
      <Box borderRadius="10px" overflow="hidden" mt="3">
        <SyntaxHighlighter language="python" style={atomOneDark}>
          {"x := 10;\ny := 20;"}
        </SyntaxHighlighter>
      </Box>

      <Text mt={4}>Arithmetic</Text>
      <Box borderRadius="10px" overflow="hidden" mt="3">
        <SyntaxHighlighter language="python" style={atomOneDark}>
          {"z := x + y;"}
        </SyntaxHighlighter>
      </Box>

      <Text mt={4}>Print Function</Text>
      <Box borderRadius="10px" overflow="hidden" mt="3">
        <SyntaxHighlighter language="python" style={atomOneDark}>
          {"PRINT(z);"}
        </SyntaxHighlighter>
      </Box>

      <Text mt={4}>Control Flow (work in progress)</Text>
      <Box borderRadius="10px" overflow="hidden" mt="3">
        <SyntaxHighlighter language="python" style={atomOneDark}>
          {"if (z > 10) {\n  PRINT(z);\n} else {\n  PRINT(x);\n}"}
        </SyntaxHighlighter>
      </Box>

      <Text mt={4}>Sample</Text>
    

      <Box mt={4} borderRadius="10px" boxShadow="0px 0px 15px rgba(0,0,0,0.1)">
        <Box borderRadius="10px" overflow="hidden" mt="3">
          <SyntaxHighlighter language="python" style={atomOneDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </Box>
        <Box
          backgroundColor="rgb(29, 31, 33)"
          padding={2}
          color="white"
          borderTop="1px solid #444"
          borderRadius="0 0 10px 10px"
        >
          <Text fontSize="sm">Output: {codeOutput}</Text>
        </Box>
      </Box>

      <Heading as="h2" size="lg" mt={8}>
        Local Installation{" "}
      </Heading>
      <Text mt={4}>
        <Box borderRadius="10px" overflow="hidden" mt="3">
          <SyntaxHighlighter language="python" style={atomOneDark}>
            {"git clone https://github.com/KaushalBarhate/Ecoscript"}
          </SyntaxHighlighter>
        </Box>
        <Box borderRadius="10px" overflow="hidden" mt="3">
          <SyntaxHighlighter language="python" style={atomOneDark}>
            {"cd Ecoscript-main"}
          </SyntaxHighlighter>
        </Box>
        <Box borderRadius="10px" overflow="hidden" mt="3">
          <SyntaxHighlighter language="python" style={atomOneDark}>
            {"python run_ecoscript.py example.ecs"}
          </SyntaxHighlighter>
        </Box>
      </Text>
    </Box>
  );
};

export default Documentation;
