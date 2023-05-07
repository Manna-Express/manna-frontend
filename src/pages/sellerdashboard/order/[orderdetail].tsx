import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout';
import OrderDetailPane from '@/shared/OrderDetailPane/OrderDetailPane';
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';






const shopOrderDetails:NextPage = ()=>{
//   const { shop } = route.query
//   const { orderdetail } = route.query

//   useEffect(()=>{
//     if(typeof shop === 'string'&& typeof orderdetail==='string'){
//       if(order_historys.length==0){
//         dispatch(getOrderHistoryDetail({
//           'shopID':shop,
//           'paystack':orderdetail
//         }))
//       }

//     }
    
 
//   },[route.isReady])
  return (
  
    <DashboardLayout
      listOFLinks={[]}
      showDetail={true}
    >
      {/* <Preloader loading={status==='pending'||status==='updating'} /> */}
      {/* {
        order_historys.length!==0?
          <OrderDetailPane data={order_historys} is_shop={true}/>:''
      } */}
          <OrderDetailPane
        //    data={[]} is_shop={true}
           />

    </DashboardLayout>

  )
}

export default shopOrderDetails