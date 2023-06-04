import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";
import { NextPage } from "next";
import {AiFillCloseCircle} from 'react-icons/ai'
import {GoPencil} from 'react-icons/go'
import Table from '../../shared/Table/Table'
import Pane from "@/shared/Pane";
import { useMediaQuery } from "react-responsive";
import Button from "@/shared/Button/Button";
import { useRouter } from "next/router";
export type prop_columnsType ={Header:string,accessor?:string,Cell?:any,id?:any}



const Index:NextPage = ()=>{
    const isLaptop = useMediaQuery({ query: '(min-width: 700px)' });
  const route = useRouter()
    const prop_columns:prop_columnsType[] = [
        {
          Header:'Image ',
          accessor:'image_one',
          Cell: (tableProps:any)  => (
            <img src={tableProps.row.original.image_one} style={{'width':'70px'}} />
          )}
        ,{
          Header:'Name',
          accessor:'name',
        },{
          'Header':'Actual Price',
          'accessor':'actual_price'
        },{
          'Header':'Slashed Price',
          'accessor':'slashed_price'
        },
        {
          Header:'Edit',
          accessor:'slug',
          id:1,
          Cell :(tableProps:any)  =><GoPencil
            onClick={()=>{
            //
            // 
            }}
            style={{'color':'#f77305'}}/>
        },{
          Header:'Delete',
          id:3,
          accessor:'slug',
          Cell:(tableProps:any)=> <AiFillCloseCircle style={{'color':'red'}}
        //    onClick={e=>
        //     handleDelete(tableProps.row.original.slug)
        // }
        /> 
        }
      ]
    
    
    return (
        <DashboardLayout
        listOFLinks={[
            {label:'Product',route:`#`},
            {label:'Orders ',route:`#`},
            {label:'Wallet',route:`#`},
            {label:'Logout',route:'#'},
        ]}
        >
                <Pane>
        {/* {status=='pending'&&<h1>loading</h1>} */}
        {/* <button
        style={{'width':isLaptop?'20%':'80%'}} 
        onClick={(e)=>route.push(`/dashboard/shop/${shop}/create-product`)}
        >Create Product</button> */}
        <Button
        onClick={(e)=>route.push(`/sellerdashboard/1/create-product`)}

        // color='defualt'
        >
          Create Product
        </Button>
        <br />
        <br />
        <Table prop_columns={prop_columns}
          custom_data={[]}
        />
      </Pane>
        </DashboardLayout>
    )
}


export default Index