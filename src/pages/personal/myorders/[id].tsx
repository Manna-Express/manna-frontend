import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout"
import OrderDetailPane from "@/shared/OrderDetailPane/OrderDetailPane"
import { useRouter } from "next/router"

const MyordersDetail = ()=>{
    // const {order_historys,status} = useAppSelector(selectOrderHistory)
    const route = useRouter()
    const   query_param = route.query
    // const dispatch = useAppDispatch()
    // useEffect(()=>{
    //   if(query_param.id){
    //     if (status!=='pending'){
    //       if(order_historys.length===0){
    //         dispatch(getOrderHistoryDetail({'is_for_shop':false,'shopID':'-0,','paystack':query_param.id.toString()}))
    //       }
    //     }else{
    //       //
    //     }
  
    //   }
  
    // },[route.isReady])
  
    return (
      <DashboardLayout
        showDetail={true}
        listOFLinks={[
          {label:'profile',route:''},
          {label:'Change Password',route:''},
          {label:'My Order',route:''},
          // {label:'Danloads',route:''},
        //   {label:'My WishLists',route:''},
        //   {label:'My Refunds',route:''},
          {label:'Logout',route:'/logout'},
        ]}
      >
        <OrderDetailPane
            />
        {/* {
          order_historys.length!=0?
            <OrderDetailPane
             data={order_historys} 
            is_shop={false}
            />
            :''
        } */}
        {/* <Preloader loading={status==='pending'}/> */}
      </DashboardLayout>
  
    )
  }
  
  export default MyordersDetail