import { styled } from "@/stitches";



export const  CategoryContainer = styled('div',{
'padding':'1rem 0',
'borderRadius':'10px',

'min-height':'116px',
'min-width':'120px',
textAlign:'center',
cursor:'pointer',
'svg':{
    'fontSize':'3rem',
    // 'padding':'1rem 0',
    // 'display':'block',
},

'p':{
    'padding':'.7rem 0'
},

variants:{
    'color':{
        'pink':{
            'backgroundColor':'rgba(255, 170, 201, 0.25)',
            'border':'2px solid #FFAAC9',
        },
        'yellow':{
            'backgroundColor':'#fff8e4',
            'border':'2px solid rgb(255, 197, 1)',
        },
        'yellow2':{
            'backgroundColor':'rgb(255, 248, 228)',
            'border':'2px solid rgb(255, 197, 1)',
        },
        'green':{
            'backgroundColor':'rgb(218, 239, 227)',
            'border':'2px solid rgb(5, 170, 112)',
        },
    }
}

})