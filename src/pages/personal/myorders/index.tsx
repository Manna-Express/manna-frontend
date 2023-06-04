import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";
import Pane from "@/shared/Pane";
import Table from "@/shared/Table/Table";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AiTwotoneEye } from "react-icons/ai";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";



const Myorders = ()=>{

    const route = useRouter();
    // const {notify} = useToast()
    const { shop } = route.query
    // const dispatch = useAppDispatch();
    // const {order_history_paystacks,order_historys,status} = useAppSelector(selectOrderHistory)
  
    const prop_columns=[
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
        Cell:(tableProps:any)=>(
          // this is were we do onClick to call the orderHistory Detail
          <AiTwotoneEye style={{'color':'#f77305'}} onClick={e=>{
           
            // dispatch(getOrderHistoryDetail({
            //   'shopID':'-1',
            //   paystack:tableProps.row.original.paystack,
            //   is_for_shop:false
            // }))
            route.push(`/personal/myorders/3`)
          }} />
        )
      },
    ] 
  
    // useEffect(()=>{
    //   dispatch(getorderHistoryList({'shopID':-1,is_for_shop:false,lookup:'?status=order_processing'}))
    // },[])
  
  
    return(
      <DashboardLayout
        listOFLinks={[
          {label:'profile',route:''},
          {label:'Change Password',route:''},
          {label:'My Order',route:''},
          {label:'Logout',route:'',extraFunc:(val)=>{
            window.localStorage.clear()
          }},
        ]}
      >
        {/* <Preloader loading={status=='pending'|| route.isReady===false} /> */}
  
  
        {/* <Table/> */}
        <Pane>
          <h1>Orders</h1>
          <br /><br />
  
          <Tabs onSelect={(index: number, lastIndex: number, event: Event)=>{
            //
            // if(index== 0){
            //   dispatch(getorderHistoryList({'shopID':-1,is_for_shop:false,lookup:'?status=order_processing'}))
            // }
            // if(index== 1){
            //   dispatch(getorderHistoryList({'shopID':-1,is_for_shop:false,lookup:'?status=ready_to_dispatch'}))
  
            // }
            // if(index== 2){
            //   dispatch(getorderHistoryList({'shopID':-1,is_for_shop:false,lookup:'?status=delivered'}))
            // }
          }}>
            <TabList>
              <Tab>Order Processing</Tab>
              <Tab>Ready To Dispatch</Tab>
              <Tab>Delivered</Tab>
            </TabList>
  
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
  
  export default Myorders