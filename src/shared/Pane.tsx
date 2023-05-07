import { styled } from "@stitches/react";



export default styled('div',{
    borderRadius:'10px',
    backgroundColor: 'white',
    overflowX: 'scroll',
    width: '99%',
    padding: '.9rem',

    '@media screen  and (min-width: 500px)':{
    padding: '1.5rem 2rem',
    }

})