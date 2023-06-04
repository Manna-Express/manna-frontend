import Box from "@/shared/Box"
import Button from "@/shared/Button/Button"
import GoBack from "@/shared/GoBack/GoBack"
import { ListOfOffering } from "@/shared/ResturantCard/ResturantCard.style"
import Foodim from '@/assets/foodim.jpg'
import {AiTwotoneStar} from 'react-icons/ai'

import {FiClock} from 'react-icons/fi'

const ShopDetailHeader = ()=>{


    return (
        <Box css={{'padding':'1rem'}}>
            <GoBack />
            <Box
            css={{
                'width':'100%',
                'backgroundImage':`linear-gradient(to bottom, #05f7bb18,#072c23c0),url(${Foodim.src})`,
                'backgroundSize': 'cover',
                'backgroundPosition': 'left',
                'backgroundRepeat':' no-repeat',
                'minHeight':'250px',
                'borderRadius':'5px',
                'position':'relative'
            }}
            >
                {/* <img src={Foodim.src} alt="" /> */}
                <Box className="timing"
                css={{
                    'display':'flex',
                    'alignItems':'center',
                    'justifyContent':'center',
                    'padding':'.4rem .9rem',
                    'backgroundColor':'#ebebeb',
                    'border':'1px solid $green300',
                    width:'150px',
                    'textAlign':'center',
                    'color':'$green300',
                    'position':'absolute',
                    'bottom':'10px',
                    'left':'10px',
                    'borderRadius':'5px',
                    // 'display':'inline-block',
                    'p':{'padding':'0 .4rem'}  
                }}
                >
                    {/* svg */}
                    <FiClock/>
                    <p>
                        27-28 mins
                    </p>
                </Box>
            </Box>
<br />
        <Box>
            <Box>
                <Box css={{'display':'flex','alignItems':'center','gap':'20px'}}>
                <h2>Meerahs cafe </h2>
                <p>  <AiTwotoneStar style={{'color':'black'}}/>{' '}3.8 <small className="light-span"> 
               
                
                (64)</small></p>    
                </Box>  
                <Box css={{'display':'flex','justifyContent':'space-between','padding':'1rem 0','alignItems':'center'}}>
                <ListOfOffering css={{'width':'150px','p':{'padding':'.1rem'},'@bp2':{
                    'width':'300px'
                }}}>
                <p>Burgers</p>
                <p>Fast food</p>
                <p>Breakfast & snacks</p>
                </ListOfOffering>  
                <Box>
                    <p><strong>Opening time</strong></p>
                <p> 09:00am - 09:00pm</p>
                </Box>
                </Box>
            </Box>  

            <Box css={{'backgroundColor':'$green50','border':'1px solid black',
            'borderRadius':'10px',
        'display':'flex',
        'padding':'.3rem',
        'justifyContent':'space-between',
        'button':{
            'width':'50%'
        },
        '& button:nth-child(1)':{
            'backgroundColor':'$green100'
        },
        '& button:nth-child(2)':{
            'backgroundColor':'$green50',
            'color':'$green200'
        },
        '@bp2':{
            'width':'300px'
        }
        }}>
                    <Button  css={{'padding':'.5rem'}} >Deliver Now</Button>
                    <Button css={{'padding':'.5rem'}}>Pick Up</Button>
            </Box>      
        </Box>      

            <br />
        
        <Box
        css={{
            // 'width':'1000px',
            'display':'flex',
            'justifyContent':'space-between',
            'overflow':'auto',
            'p':{
                'margin':'9px 10px',
                'padding':'.3rem .9rem' ,
                // 'border':'1px solid red',
                'cursor':'pointer',
                'borderRadius':'5px',
                // 'backgroundColor':'$green50',
                'color':'#a4aab5',
            '&.active':{
                'backgroundColor':'$green50',
                'color':'$green300',
            }
            }
        }}
        >
            <p className="active">ALL</p>
            <p>MEALS</p>
            <p>SHAWARMA</p>
            <p>BURGURS</p>
            <p>FINDERFOODS</p>
            {
                ['ALL','MEALS','SHAWARMA','BURGURS','FINDERFOODS','FINDERFOODS'].map((d,index)=>(
                    <p key={index}>{d}</p>
                ))
            }
        </Box>
        </Box>  
    )
}

export default ShopDetailHeader