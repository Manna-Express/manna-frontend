import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { prop_columnsType } from '..';
import {AiTwotoneEye} from 'react-icons/ai'
import Table from '../../../shared/Table/Table';
import { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pane from "@/shared/Pane";
import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";

// import moment from 'moment';





const ShopOrder:NextPage = ()=>{
  const route = useRouter();
  const { shop } = route.query
  const prop_columns:prop_columnsType[]=[
    {
      Header:'Tracking Number',
      accessor:'paystack',
      id:13
    },

    
    {
      Header:'Order Date',
      accessor:'created_at',
      
    },
    {
      Header:'View Detail',
      accessor:'paystack',
      id:1,
    //   Cell:(tableProps:any)=>(
    //     <AiTwotoneEye style={{'color':'#f77305'}} />
    //   )
    },
  ] 


  useEffect(()=>{
    // if(typeof shop == 'string'){
    // }
  },[])

  return  (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:`#`},
        {label:'Orders ',route:`#`},
        {label:'Wallet',route:`#`},
        {label:'Logout',route:'/logout'},
      ]}
    >
    {/* //   <Preloader loading={status=='pending'|| route.isReady===false} /> */}
      <Pane>
        <h1>Shop Orders</h1>
        <br /><br />
      

        <Tabs onSelect={(index: number, lastIndex: number, event: Event)=>{
          //
          if(typeof shop == 'string'){
            if(index== 0){
            }
            if(index== 1){
           
            }
            if(index== 2){
            }
          }
        }}>
          <TabList>
            <Tab>Order Processing</Tab>
            <Tab>Ready To Dispatch</Tab>
            <Tab>Delivered</Tab>
          </TabList><br />

          <TabPanel>
            <Table prop_columns={prop_columns} custom_data={[]}/>

          </TabPanel>
          <TabPanel>
            <Table prop_columns={prop_columns} custom_data={[]}/>
          </TabPanel>
          <TabPanel>
            <Table prop_columns={prop_columns} custom_data={[]}/>
          </TabPanel>

          <TabPanel>
            <Table prop_columns={prop_columns} custom_data={[]}/>
          </TabPanel>

            
        </Tabs>
      
      </Pane>
    </DashboardLayout>
  )
}

export default ShopOrder