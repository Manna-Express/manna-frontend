import { styled } from "@/stitches"

export type DashboardLayoutContainerType ={
  showDetail?:boolean
}
// <DashboardLayoutContainerType>
export const DashboardLayoutContainer = styled('div',{
    'backgroundColor': '#f3f4f6',
    minHeight: '90vh',
    padding: '2rem .5rem',
'@media screen  and (min-width: 700px)':{
    padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',

 

},

    'variants':{
        showDetail:{
            true:{
                '@media screen  and (min-width: 700px)':{
                    '& >div:nth-child(1)':{
                        display: 'none',
                    },
                    '& >div:nth-child(2)':{
                        width: '90%',
                        margin: '0 auto',
                    },
                },
            },
            false:{

            }
        }
    }
})

export const DashboardNav = styled('div',{
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem 0',
  
    li:{
    },
    a:{
      padding:' 1rem 2.5rem',
      color: '#1f2937',
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
    },
    'a::after':{
      content: "",
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '.12rem',
      backgroundColor:'transparent',
      height: '0',
      transition: '.2s all ease-in-out',
    },
    'a:hover::after':{
  
      backgroundColor:' $green300',
      height: '70%',
    },
  
    '@media screen  and (min-width: 700px)':{
    width: '20%',
    }
})
 
export const DashboardMain = styled('div',{
 
'@media screen  and (min-width: 700px)':{
    width: '70%',
  }   
})

export const DashboardNavFooter = styled('div',{

})