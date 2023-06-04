import NavBar from "@/shared/NavBar/NavBar"


type GeneralLayoutProp= React.PropsWithChildren<{

}>
const GeneralLayout = ({children}:GeneralLayoutProp)=>{


    return (
        <div>
        <NavBar/>

            {children}
        </div>
    )
}

export default GeneralLayout