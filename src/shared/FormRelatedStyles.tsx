import type * as Stitches from '@stitches/react';
// import { styled } from "../../../stitches.config";
import { styled } from "@/stitches";



export const ContentWithFormInput = styled('div',{
    color: '#4b5563',
    borderTop: '1px dotted #8989892d',
    borderBottom: '1px dotted #8989892d',  
    margin:'1rem 0',
  
    p:{
      fontSize: '.9rem',
      padding: '1rem 0',
    },
    '@media screen and (min-width: 800px)':{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > div:nth-child(1)':{
        width: '30%',
      },
      '& > div:nth-child(2)':{
        width:'60%',
      }
    }
})