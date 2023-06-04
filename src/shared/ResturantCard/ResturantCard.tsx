import Image from "next/image"
import { ListOfOffering, ResturantCardContianer } from "./ResturantCard.style"
import ShopImg from '@/assets/shop.png'
import Box from "../Box"
import {AiTwotoneStar} from 'react-icons/ai'
import {IoTimerOutline} from 'react-icons/io5'

const ResturantCard = ():React.ReactElement=>{
    return(
        <ResturantCardContianer>
            <Image  src={ShopImg} alt='resturant photo'/>
            <Box css={{'padding':'.7rem 0'}}>
                <Box css={{'display':'flex','justifyContent':'space-between'}}>
                    <p className="resturant_card_name">SoFresh-Gbagada</p>
                    <Box className="resturantRatingContainer">
                    <p > 
                        4.23
                    </p>
                        <AiTwotoneStar style={{'color':'yellow'}}/>
                    </Box>
                </Box>
                <Box className="resturantCardEstimatedTimeBox"
                >
                    <IoTimerOutline />
                    <p>22 - 23 mins</p>
                </Box>
                <ListOfOffering>
                    <p>Rice & Stew</p>
                    <p>FRUITS</p>
                    <p>SANDWICHES</p>
                </ListOfOffering>
            </Box>
        </ResturantCardContianer>
    )
}

export default ResturantCard