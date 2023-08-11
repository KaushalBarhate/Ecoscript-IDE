import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import axios from 'axios';

const TerminalController: React.FC = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the EcoScript Interactive Development Environment (IDE).</TerminalOutput>
  ]);

  const handleInput = async (terminalInput: string) => {
    const command = terminalInput.trim();
    if (command) {
      setTerminalLineData(prevData => [
        ...prevData,
        <TerminalOutput>{`> ${command}`}</TerminalOutput>
      ]);
      try {
        const response = await axios.post(
          'https://ecoscript-compiler.vercel.app/compile/',
          { code: command }
        );

        const output = response.data;
        setTerminalLineData(prevData => [
          ...prevData,
          <TerminalOutput>{output}</TerminalOutput>
        ]);
      } catch (error) {
        setTerminalLineData(prevData => [
          ...prevData,
          // @ts-ignore
          <TerminalOutput>Error executing command: {error.message}</TerminalOutput>
        ]);
      }
    }
  };

  return (
    <div className="container">
      <Terminal
        name="EcoScript IDE"
        colorMode={ColorMode.Dark}
        prompt=">"
        onInput={handleInput}
        height="500px"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
