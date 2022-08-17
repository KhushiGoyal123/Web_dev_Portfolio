import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from "./Themes";
import { Develope } from './AllSvgs';

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 55vh;
  z-index: 2;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5em + 1vw);

  ${Main}:hover &{
    &>*{
      fill: ${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }

`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.2em + 1vw);

  ${Main}:hover &{
      color: ${props => props.theme.body};
  }

  strong{
    margin-bottom: 0.5rem;
    text-transform: uppercase;

  }
  ul,p{
    margin-left: 2rem;
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light"/>
          <PowerButton />
          <ParticleComponent theme="light"/>

            <Main>
              <Title>
                  <Develope width={35} height={35} />
                  FULL STACK WEB DEVELOPER (MERN)
              </Title>
              <Description>
                I love to create websites which is simple, clean but attractive and always with a spicy punch.
              </Description>
              <Description>
                <strong>Skills</strong>
                <ul>
                  <li>HTML, CSS, JavaScript and BootStrap</li>
                  <li>ReactJS</li>
                  <li>NodeJS and ExpressJS</li>
                  <li>MongoDB and Firebase</li>
                </ul>
              </Description>
              <Description>
                <strong>Tools</strong>
                <ul>
                  <li>VSCode</li>
                  <li>Git and GitHub</li>
                  <li>Netlify for deploying</li>
                </ul>
              </Description>
            </Main>

            <Main>
              <Title>
                  <Develope width={35} height={35} />
                  CLOUD COMPUTING & DEVOPS ENGINEER
              </Title>
              <Description>
                 Mixture of MERN stack with cloud is the perfect combo one can have.
              </Description>
              <Description>
                <strong>Skills</strong>
                <ul>
                  <li>Linux</li>
                  <li>Docker</li>
                  <li>DevOps</li>
                </ul>
              </Description>
              <Description>
                <strong>Tools</strong>
                <ul>
                  <li>AWS</li>
                  <li>Google Cloud</li>
                  <li>Virtual Box for Linux</li>
                </ul>
              </Description>
            </Main>
            <BigTitle text="SKILLS" top="78%" right="35%"/>
        </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage