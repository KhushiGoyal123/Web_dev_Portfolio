import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, YouTube, LinkedIn } from '../components/AllSvgs'
import { darkTheme }  from '../components/Themes';
import {motion} from "framer-motion";

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
     

    &>*:not(:last-child){
        margin: 0.2rem 0;
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};


`

const SocialIcons = (props) => {
  return (
    <Icons>
        <motion.div
            initial={{transform: "scale(0"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1, delay:1}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://github.com/KhushiGoyal123"}}>
                <Github width={22} height={22} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} color={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>

        {/* <motion.div
            initial={{transform: "scale(0"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1, delay:1.2}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://twitter.com/KhushiGoyal123"}}>
                <Twitter width={22} height={22} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} color={props.theme === "dark" ? darkTheme.text : darkTheme.body}  />
            </NavLink>
        </motion.div> */}

        <motion.div
            initial={{transform: "scale(0"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1, delay:1.4}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://facebook.com/KhushiGoyal"}}>
                <Facebook width={22} height={22} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} color={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>

        <motion.div
            initial={{transform: "scale(0"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1, delay:1.4}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.linkedin.com/in/khushi-goyal-644030211"}}>
                <LinkedIn width={22} height={22} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} color={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>

        <motion.div
            initial={{transform: "scale(0"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:"spring", duration:1, delay:1.6}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.youtube.com/channel/UCrvn3AZN2xg0k3oOAZAmMig"}}>
                <YouTube width={22} height={22} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} color={props.theme === "dark" ? darkTheme.text : darkTheme.body}  />
            </NavLink>
        </motion.div>
        
        {/* Linkedin */}

        <Line color={props.theme}
            initial={{
                height: 0,
            }}
            animate={{
                height: '8rem'
            }}
            transition={{
                 type: 'spring', duration: 2, delay: 0.8
            }}
        
        />
    </Icons>
  )
}

export default SocialIcons