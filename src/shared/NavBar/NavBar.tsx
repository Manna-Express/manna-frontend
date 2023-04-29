import Box from "../Box"
import Logo from "../Logo"
import {BiUserCircle} from 'react-icons/bi'
import { NavBarContainer } from "./NavBar.style"
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import { useMediaQuery } from 'react-responsive'



const NavBar = ()=>{
    const isLaptop = useMediaQuery({
        query: '(min-width: 600px)'
      })
    return (
        <NavBarContainer>
            <Logo />
            <Box
            css={{
                '@bp600':{
                    display:'flex',
                    // 'border':'1px solid red',
                    'width':'400px',
                    'justifyContent':'space-between',
                    'alignItems':'center',
                    '& div:nth-child(1)':{
                        'width':'90%'
                    }
                }
            }}
            >
            {
                isLaptop?
            <Box>
                <InputWithLabel />
            </Box>:''
            }
            <Box css={{'color':'white','backgroundColor':'$green300','fontSize':'1.7rem',
            'height':'35px','width':'35px','borderRadius':'50%',
        'display':'flex','alignItems':'center','justifyContent':'center',
        '@bp600':{
            'height':'45px','width':'45px',
        }
            }}>
                <BiUserCircle />
            </Box>
            </Box>
        </NavBarContainer>
        // InputWithLabel
    )
}

export default NavBar