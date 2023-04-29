import { styled } from "@/stitches";



export const InputWithLabelContainer = styled('div',{
    display:'flex',
    'alignItems':'center',
    'position':'relative',
    'borderRadius':'10px',

    'input':{
        width:'100%',
        'padding':'.7rem 1.3rem',
        'borderRadius':'10px',
        'border':'1px solid transparent',
        'outline':'none',
        'backgroundColor':'#f2f2f2',
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