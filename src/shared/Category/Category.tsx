import Box from "../Box"
import { CategoryContainer } from "./Category.style"


const Category = ({
    icon,title,color='pink'
}:{icon:any,title:string,color?:'pink'|'green'|'yellow'|'yellow2'})=>{
    return (
        <CategoryContainer  color={color}>
          {icon}
            <p>{title}</p> 
        </CategoryContainer>
    )
}

export default Category