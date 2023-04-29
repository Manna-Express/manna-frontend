import { styled } from "@/stitches";





export const ResturantCardContianer = styled('div',{
    padding:'.5rem',
    'borderRadius':'5px',
    'border':'1px solid rgb(229, 231, 235)',
    maxWidth:'300px',
    'margin':'0 auto',
    'cursor':'pointer',
    'transition':'1s all ease-in-out',
    '&:hover':{
        boxShadow:' rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
        'border':'1px solid transparent',
    },
    img:{
        width:'100%',
        'height':'200px',
        'objectFit':'cover',
        'borderRadius':'10px'
    },
    'p.resturant_card_name':{
        'fontSize':'1.2rem',
        'color':'#000000'
    },
    '.resturantRatingContainer':{
        display:'flex'
    },
    '.resturantRatingContainer p':{
        'fontSize':'.9rem',
        'padding':'0 .2rem'
    },
    '.resturantCardEstimatedTimeBox':{
        'display':'flex',
        padding:'.8rem 0',
        'p':{
            'padding':'0 .4rem'
        },
        'svg':{
            'color':'$green100'
        },


    },
    '.list_of_offering':{
        'padding':'.4rem 0',
        'fontSize':'.8rem',
        'display':'flex',
        'flexWrap':'wrap',
        'justifyContent':'space-between',
        'alignItems':'center',
        'color':'$green100'
    }
})