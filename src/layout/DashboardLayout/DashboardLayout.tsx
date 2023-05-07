import { useMediaQuery } from 'react-responsive'
import {
  DashboardLayoutContainer,
  DashboardNav,DashboardNavFooter,
  DashboardMain

}  from './DashboardLayoutStyle'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NavBar from '@/shared/NavBar/NavBar';


type Prop = React.PropsWithChildren<{
listOFLinks:{
  label:string;
  route:string;
  extraFunc?:(value:any)=>void
}[],
showDetail?:boolean

}>

const DashboardLayout = ({children ,listOFLinks,showDetail=false}:Prop):React.ReactElement=>{

  const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  const route = useRouter()

  return (
    <>
    
    <NavBar />
      <DashboardLayoutContainer showDetail={showDetail}>
        {
          isLaptop?
            <DashboardNav>
              <ul>
                {
                  listOFLinks.map((data,index:number)=>(
                    <li key={index}><a onClick={()=>{
                      if(data.extraFunc){
                        data.extraFunc(data)
                      }
                      route.push(data.route)
                    }}>{data.label}</a></li>
                  ))
                }
              </ul>
            </DashboardNav>
            :
            ''
        }

        <DashboardMain>
          {
            children
          }
        </DashboardMain>
      </DashboardLayoutContainer>

    </>
  )
}

export default DashboardLayout