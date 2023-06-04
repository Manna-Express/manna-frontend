import { styled } from "@/stitches"




export const LoginNav = styled('div',{

    display:'flex',
    justifyContent: 'space-between',
    a:{
      color: '$green300',
      display:'inline-block',
      padding:'1rem',
    }
})

export const LoginContainer= styled('div',{
    '@media screen and (min-width: 900px)':{
        display:' flex',
        alignItems: 'center',
        height: '114vh',
        '&>div:nth-child(1)':{
          width: '45%',
        },
        '&>div:nth-child(2)':{
          width: '45%',
        }
      }
})



export const LoginContainerImg= styled('div',{
    display: 'none',
    '@media screen and (min-width: 700px)':{
    //   backgroundImage:linear-gradient(to bottom, #f7720557,black),url(${(props)=>props.image}); *
        'backgroundSize': 'cover',
        'backgroundPosition': 'left',
        'backgroundRepeat': 'no-repeat',
        
        display: 'block',
        width: '100%',
        height: '100%',
        // 'border':'1px solid red',
      '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }
    }
})


export const LoginContentContainer= styled('div',{
    padding: '1.7rem',
    maxWidth: '500px',
    margin: '0 auto',
    h2:{
      color: '#191a1b',
      padding: '1rem 0',
    },
    p:{
      padding:' 1rem 0',
      color:'#4b5563',
      textAlign: 'center',
    },
    span:{
      color:'$green300'
    },
  
   ' @media screen and (min-width: 900px)':{
      height: '100%',
      maxWidth: 'unset',
      padding: '2rem 0',
      button :{
        width: '70%',
        margin:'0 auto',
      }
    }
})
  