import Box from "@/shared/Box"
import GeneralLayout from '@/layout/GeneralLayout/GeneralLayout'
import ShopDetailHeader from "@/pageSpecificStyles/shop/ShopDetailHeader/ShopDetailHeader"
import ShopImg from '@/assets/shop.png'


const ShopDiplayDetails = ()=>{


    return (
        <GeneralLayout>
            <ShopDetailHeader/>
                {/* <h2>Shop Display Details</h2> */}
                <br />
        <Box
        css={{'@bp2':{
            'display':'grid',
            'gridTemplateColumns':'1fr 1fr'
        },
        '@bp600':{
            'gridTemplateColumns':'repeat(3,1fr)',
            'maxHeight':'1000px',
            'margin':'0 auto'
        }
    }}
        >
        {
            [...new Array(20)].map((d,index)=>(
                <Box 
                key={index}
                css={{
                    'padding':'1rem',
                }}
               >
     <Box
                css={{
                    'display':'flex',
                    'border':'1px solid #a4aab5',
                    'minHeight':'150px',
                    'borderRadius':'5px',
                    'img':{
                        'width':'30%',
                        'objectFit':'cover'
                    },
                    'div':{
                        'width':'70%'
                    }
                }}
                >
                    <Box css={{
                        'display':'flex',
                        'flexDirection':'column',
                        'justifyContent':'space-between',
                        // 'alignItems':'center'
                        'padding':'.7rem 0',
                        'paddingLeft':'.8rem',
                        'small':{
                            'color':'Gray'
                        },
                        '.money':{
                            'color':'$green300',
                        }
                    }}>
                        <Box>
                            <p>Egg Fried</p>
                            <p ><small>Meerah{"'"}s Special Fried Rice</small></p>
                        </Box>
    
                        <p className="money"><strong>₦200</strong></p>
                    </Box>
                    <img src={ShopImg.src} alt="" />
                </Box>
               </Box>
            ))
          }
        </Box>
        </GeneralLayout>
    )
}
export default ShopDiplayDetails