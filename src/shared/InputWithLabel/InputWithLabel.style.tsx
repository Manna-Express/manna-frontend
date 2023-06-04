import { styled } from "@/stitches";



export const InputWithLabelContainer = styled('div',{
    // display:'flex',
    // 'alignItems':'center',
    'position':'relative',
    'borderRadius':'10px',
    label:{
      color: '#4b5563',
      fontWeight:'500',
      fontSize: '1rem',
    //   paddingBottom: '.6rem',
    display:'inline-block',
      padding:'.3rem 0',
    },
    'input,textarea':{
        width:'100%',
        display:'block',
        'padding':'.7rem 1.3rem',
        'borderRadius':'5px',
        'border':'1px solid #4b55636f',
        'outline':'none',
        // 'backgroundColor':'#f2f2f2',
    },
    'input:focus':{
        border:'2px solid $green300'
    },
    'svg':{
        position:'absolute',
        top:'30%',
        left:'7px',
        color:'$green200',
        cursor:'pointer'       
    },
        
})