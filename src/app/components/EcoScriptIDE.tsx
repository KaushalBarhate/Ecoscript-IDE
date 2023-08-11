/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState, useEffect } from "react";
import Terminal from "terminal-in-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python"; 
import "ace-builds/src-noconflict/theme-monokai";
import {
  Box,
  Button,
  Text,
  VStack,
  useColorModeValue,
  Heading,
  Spinner,
  Switch,
  FormControl,
  FormLabel,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import dynamic from 'next/dynamic';
// const SyntaxHighlighter = dynamic(
//     () => import('react-syntax-highlighter').then((mod) => mod.Light),
//     { loading: () => <div>Loading code...</div>,ssr: false }
//   );
// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AiOutlineClear } from "react-icons/ai";
const EcoScriptIDE: React.FC = () => {
  const [code, setCode] = useState<string>("#Example\nx:=20;\nPRINT(x*2/10);");
  const [output, setOutput] = useState<string>("");
  const [isTerminalLoaded, setTerminalLoaded] = useState<boolean>(false);
  const [isInteractiveMode, setInteractiveMode] = useState<boolean>(false);

  const handleRunCode = async () => {
    try {
      const response = await axios.post("https://ecoscript-compiler.vercel.app/compile/", {
        code,
      });
      setOutput(response.data);
      console.log(response.data);
      return response.data; // Return the output
    } catch (error) {
      console.error("An error occurred while compiling:", error);
      setOutput("error");
      return "Compilation error!";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalLoaded(true);
      setInteractiveMode(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const bgColor = useColorModeValue("#2D3748", "white");
  const textColor = useColorModeValue("white", "white");

  return (
    <Box bg={bgColor} minH="100vh" p={8}>
      <VStack spacing={4} p={4} rounded="lg">
        <Heading as="h1" size="xl" color={textColor}>
          EcoScript Programming Language
        </Heading>
        <Text fontSize="15px" as="i" color={textColor}>
          EcoScript (.ecs) is a python based programming language designed with
          sustainability in mind.
        </Text>

        <Center>
          <FormControl display="flex" alignItems="center" mb={4} mt={4}>
            <FormLabel htmlFor="interactive-mode" mb="0" color={textColor}>
              Interactive Mode
            </FormLabel>
            <Switch
              id="interactive-mode"
              onChange={() => setInteractiveMode(!isInteractiveMode)}
              isChecked={isInteractiveMode}
            />
          </FormControl>
        </Center>

        {isInteractiveMode ? (
          <>
            {isTerminalLoaded ? (
              <Box
                borderRadius="20px" // Add border radius here
                overflow="hidden"
                //   h="400px"
                resize="vertical"
                //   maxH="400px"
                //   minH="100px"
              >
                <Terminal
                  color="green"
                  backgroundColor="black"
                  barColor="black"
                  style={{ fontWeight: "bold", fontSize: "1em" }}
                  msg="Welcome to the EcoScript Interactive Development Environment (IDE)."
                  commandPassThrough={async (cmd: string, print: () => void) => {
                    const command = Array.isArray(cmd) ? cmd.join(" ") : cmd; // Convert the command array to a string

                    try {
                      const response = await axios.post(
                        "https://ecoscript-compiler.vercel.app/compile/",
                        {
                          code: command, // Fix the payload by using the proper key name
                        }
                      );

                      const output2 = response.data;
                      // @ts-ignore
                      print(output2); 
                      
                    } catch (error) {
                       // @ts-ignore
                      print(`Error executing command: ${error}`);
                    }
                  }}
                />
              </Box>
            ) : (
              <Spinner color="blue.500" />
            )}
          </>
        ) : (
          <>
            <AceEditor
              mode="python"
              theme="monokai"
              value={code}
              onChange={setCode}
              name="EcoScriptEditor"
              editorProps={{ $blockScrolling: true }}
            />
            <Center>
              <Button colorScheme="teal" onClick={handleRunCode} mr={6}>
                Run Code
              </Button>
              <AiOutlineClear
                color="white"
                size={24}
                onClick={() => {
                  setCode("");
                  setOutput("");
                }}
                style={{ cursor: "pointer" }}
              />
            </Center>
            {output.length > 0 ? (
              <>
                <Center mt={2}>
                  <Text color="white">Output:</Text>
                </Center>
                <Box
                  mt={2}
                  p={4}
                  backgroundColor="rgb(29, 31, 33)"
                  rounded="md"
                  maxW="100%"
                >
                  <Text color="white" whiteSpace="pre-wrap">
                    {output}
                  </Text>
                </Box>
              </>
            ) : null}
          </>
        )}
        {/* <Box width={["100%", "100%", "100%", "50%"]} mt={4}>
          <Center>
            <Heading as="h3" size="md" mt={4} color={textColor}>
              Tutorial:
            </Heading>
          </Center>
          <Box mt={4} borderRadius="10px">
            <Box borderRadius="10px" overflow="hidden" mt="3">
              <SyntaxHighlighter language="python" style={atomOneDark}>
              
                {"x := 10;\ny := 20;\nz := x + y;\nPRINT(z);"}
              </SyntaxHighlighter>
            </Box>

            <Box
              backgroundColor="rgb(29, 31, 33)"
              padding={2}
              color="white"
              borderTop="1px solid #444"
              borderRadius="0 0 10px 10px"
            >
              <Text fontSize="sm" whiteSpace="pre-wrap">
                {"30\nEnergy Consumed: 4\nCarbon Footprint: 0.3950000000000001"}
              </Text>
            </Box>
          </Box>
        </Box> */}

        <Text fontSize="lg" color={textColor} mt={10}>
          Learn more about EcoScript and its syntax in the{" "}
          <a
            href="/docs"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            documentation
          </a>
        </Text>
      </VStack>
    </Box>
  );
};

export default EcoScriptIDE;
