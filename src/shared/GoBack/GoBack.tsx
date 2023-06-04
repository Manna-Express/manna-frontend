import { BsArrowLeftShort } from "react-icons/bs"
import { useRouter } from "next/router"
import Button from "../Button/Button"



const GoBack = ():React.ReactElement=>{
    const route = useRouter()

    return (
        <Button
                css={{
                    'backgroundColor':'transparent',color:'$green300',
                    // 'padding':'unset',
                '&:hover,&:focus':{
                    'backgroundColor':'transparent',color:'$green300',
                },
                'svg':{
                    // 'color':'$gray700',
                }}}
                leftIcon={<BsArrowLeftShort/>}
                onClick={e=>{
                    e.preventDefault()
                    // route.back()
                }}
                >
                    Go Back
                </Button>
    )
}
export default GoBack