import { styled } from "@/stitches"




export const OrderdetailNavContainer= styled('div',{
    display: 'flex',
    flexDirection: 'column-reverse',
      h3:{
          color:'#1f2937',
          fontSize: '1rem',
      },
      '&  > div:nth-child(1)':{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center',
      },
    
      '& p':{
        fontSize: '.8rem',
        color:' whitesmoke',
        backgroundColor: '$green300',
        padding:'.2rem .5rem',
        borderRadius: '10px',
      },
      '& a':{
        textAlign: 'center',
        padding: '.8rem',
        color: '${({theme})=>theme.main_color}',
        textDecoration: 'underline',
      },
      '@media screen and (min-width: 500px)':{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
       ' &  > div:nth-child(1)':{
          width: '200px',
        },
    
    
    
      }
})



export const OrderdetailCardContainer= styled('div',{
    '@media screen and (min-width: 800px )':{
        display: 'grid',
        'grid-template-columns': 'repeat(4,1fr)',
        gap: '10px',
    },
})

export const OrderDetailCard= styled('div',{
    border: '1px solid #e5e7eb',
    padding: '1rem',
    margin: '10px 0',
    borderRadius: '10px',
    'h3,p':{
     'color':'#1f2937',
      'font-size': '.9rem',      
   }


})  

export const OrderDetailPaneContainer= styled('div',{
    'max-width': '900px',
   ' & > div h3':{
      color: '#1f2937',
      padding:' 1rem 0',
    },
    '@media screen and (min-width: 800px)':{
      display: 'flex',
      'justify-content': 'space-between',
    },
})
  
  export const OrderDetailTotalContainter= styled('div',{
    display: 'flex',
    padding: '.8rem 0',
    
    'p:nth-child(1)':{
      color:'#1f2937',
    },
    'p:nth-child(2)':{
      marginLeft: '30px',
      color:'#656e7a',
    }
  })
    
  
