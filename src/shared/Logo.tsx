import {MdFastfood } from 'react-icons/md'
import Box from './Box'



const Logo =()=>{

    return (
        <Box css={{'backgroundColor':'$green300','color':'#ffc501','fontSize':'1rem',
        'borderRadius':'5px',
        'height':'40px',
        'width':'40px',
        'display':'flex','alignItems':'center','justifyContent':'center'
        }}>
            <MdFastfood />
        </Box >
    )
}
export default Logo