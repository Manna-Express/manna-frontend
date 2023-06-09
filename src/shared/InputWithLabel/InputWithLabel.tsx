import Box from "../Box"
import {BiSearchAlt} from 'react-icons/bi'
import { InputWithLabelContainer } from "./InputWithLabel.style"
import {AiFillEye} from 'react-icons/ai';
import {BsEyeSlashFill} from 'react-icons/bs'
import { useState } from 'react';






type Prop ={
    label?:string;
    placeholder?:string;
    isTextArea?:boolean;
    register?:any;
    errorMessage?:string;
    type?:'password'|'text';
  }
  const InputWithLabel = ({ type='text',errorMessage,label,placeholder='',isTextArea=false,register}:Prop):React.ReactElement=>{
  
    const [show,setShow] = useState(false)
    const RenderIcon = ()=>{
      return (
        <>
          {
            show?
              <BsEyeSlashFill onClick={(e)=> setShow(false)}/>
              :
              <AiFillEye onClick={(e)=> setShow(true)}/>
          }
        </>
      )
    }
    const decideType =():string=>{
      if(type=='password'){
        return show?'text':'password'
      }
      return 'text'
    }
    return (
      <InputWithLabelContainer>
        <label htmlFor={label}>{label}</label> 
        {type==='password'&&<RenderIcon/>}
        {
          isTextArea?
            <textarea name="label" id={label} placeholder={label}  cols={30} rows={5} {...register}></textarea>
            :
  
            <input type={decideType()}  id={label} placeholder={placeholder} {...register}/>
        }
        {
          errorMessage?
            <small style={{'color':'crimson'}}>{errorMessage}</small>
            :''
        }
      </InputWithLabelContainer>
    )
  }
  


  export default InputWithLabel