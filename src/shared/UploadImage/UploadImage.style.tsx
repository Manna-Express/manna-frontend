import { styled } from "@/stitches";



export const UploadImageContainer  = styled('div',{
    border: '4px dotted #8989892d',
    padding:'2rem .5rem',
    /* min-height: 20vh; */
    position: 'relative',
    display: 'grid',
    div:{
      width: '100%',
      position: 'relative',
    },
    img:{
      width:'100%',
      borderRadius: '10px',
      height:'100%',
    },
    svg:{
      color:'${({theme})=>theme.main_color}',
      position: 'absolute',
      top:'0',
      right:'0',
      fontSize: '30px',
    },
    label:{
      display: 'block',
      position: 'absolute',
      top: '0',
      right: '0',
      fontSize: '1.4rem',
      cursor: 'pointer',
      color: 'black',
    }
})