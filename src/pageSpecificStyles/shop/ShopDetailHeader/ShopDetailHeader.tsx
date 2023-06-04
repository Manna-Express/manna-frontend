import Box from "@/shared/Box"
import Button from "@/shared/Button/Button"
import GoBack from "@/shared/GoBack/GoBack"
import { ListOfOffering } from "@/shared/ResturantCard/ResturantCard.style"




const ShopDetailHeader = ()=>{


    return (
        <Box css={{'padding':'1rem'}}>
            <GoBack />
            <Box>
                <img src="" alt="" />
                <Box className="timing">
                    {/* svg */}
                    <p>
                        27-28 mins
                    </p>
                </Box>
            </Box>

        <Box>
            <Box>
                <Box>
                <h2>Meerahs cafe </h2>
                <p>3.8 <small className="light-span"> (64)</small></p>    
                </Box>  
                <Box css={{'display':'flex','justifyContent':'space-between','padding':'1rem 0','alignItems':'center'}}>
                <ListOfOffering css={{'width':'150px','p':{'padding':'.1rem'}}}>
                <p>Burgers</p>
                <p>Fast food</p>
                <p>Breakfast & snacks</p>
                </ListOfOffering>  
                <p> 09:00am - 09:00pm</p>
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

        </Box>
    )
}

export default ShopDetailHeader