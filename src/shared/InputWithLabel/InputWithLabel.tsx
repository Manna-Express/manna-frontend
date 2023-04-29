import Box from "../Box"
import {BiSearchAlt} from 'react-icons/bi'
import { InputWithLabelContainer } from "./InputWithLabel.style"



const InputWithLabel = ()=>{

    return (
        <InputWithLabelContainer>
            <BiSearchAlt />
            <input type="text" placeholder="Search Manna Express.." />
        </InputWithLabelContainer>
    )
}

export default InputWithLabel