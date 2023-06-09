import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {OrderDetailCard,
  OrderdetailNavContainer,
  OrderdetailCardContainer,OrderDetailPaneContainer,
  OrderDetailTotalContainter
} from './OrderDetailPane.style'
import Table from '../../shared/Table/Table';
import { prop_columnsType } from '@/pages/sellerdashboard';
import Pane from '../Pane';
// import moment from 'moment'

const prop_columns:prop_columnsType[]=[
  {
    id:1,
    Header:'Product Name',
    accessor:'product_name'
  },
  {
    Header:'Quantity',
    accessor:'quantity'
  },
  {
    Header:'Amount',
    accessor:'amount'
  },{
    Header:'Buyer Phone',
    accessor:'buyer_phone'
  }

]
const user_props_columns:any = [
  {
    id:1,
    Header:'Product Name',
    accessor:'product_name'
  },
  {
    Header:'Quantity',
    accessor:'quantity'
  },
  {
    Header:'Amount',
    accessor:'amount'
  },{
    Header:'Shop Phone',
    accessor:'shopPhone_number'
  }

]

// type Prop ={
//     data: OrderHistoryType[]
//     is_shop?:boolean
// }
const status =[
  {value:'delivered',label:'Delivered',icon:''},
  {value:'order_processing',label:'Order Processing',icon:''},
  {value:'ready_to_dispatch',label:'ready To Dispatch',icon:''},
  {value:'order_dispatched',label:'Order Dispatch',icon:''},
]
const OrderDetailPane = (
  // {data,is_shop=false}:Prop
  ):React.ReactElement=>{
  const route = useRouter()
  const cards = [
    {label:'Order Number',value:'ww385tt42e'
    // data[0].paystack?data[0].paystack:''
  },
    {label:'Date',value:''
    // moment(data[0].created_at).format('MMMM d, YYYY')
    },
    {label:'Total',value:'nil'},
    {label:'Payment Method',value:'Payment_Gate_Way'},
  ]
  const handleStatusChange = ({value}:any)=>{
    if(window.confirm('Are Sure You want to change the status')){
      // if(data[0].paystack){
      //   dispatch(updateOrderHistoryStatus({'paystack':data[0].paystack,status:value,'shop_id':data[0].shop}))
      // }
    }
  }
  return (
    <Pane>
      <OrderdetailNavContainer>
        <div>
          <h3>Status:  </h3>
          <p>pending</p>
        </div>
        {/* {
          is_shop?
            <SelectBar  data={status} runAfterChange={handleStatusChange} />:''
      
        } */}
        <a href="" onClick={(e)=>{
          e.preventDefault()
          route.back()
        }}>Back to Home</a>
      </OrderdetailNavContainer>
      <br /><br />
      <OrderdetailCardContainer>
        {
          cards.map((data,index)=>(
            <OrderDetailCard key={index}>
              <h3><strong>{data.label}</strong></h3>
              <p>{data.value}</p>
            </OrderDetailCard>
          ))
        }
          
      </OrderdetailCardContainer>

      <br />
      <br />
      {/* <ProgressBar status={data[0].status}/> */}
      <br />

      <Table
        // prop_columns={is_shop? prop_columns:user_props_columns}
        prop_columns={prop_columns}
        custom_data={[]}
      />

      <br />
        
      <OrderDetailPaneContainer>

        <div>
          <h3>Total Amount</h3>
          <OrderDetailTotalContainter>
            <p>Item Amount</p>
            <p><span>:</ span> $
            {/* {data.reduce((prev:any,current:any)=>{
              return parseInt(current.amount)+prev
            },0) } */}
            0.00
            </p>
          </OrderDetailTotalContainter>
          <OrderDetailTotalContainter>
            <p>Shipping Charge</p>
            <p><span>:</span> $0.00</p>
          </OrderDetailTotalContainter>
          {/* <OrderDetailTotalContainter>
            <p>Iffiliate Charge </p>
            <p><span>:</span> ${data.reduce((prev:any,current:any)=>{
              return parseInt(current.iffiliate_earning)+prev
            },0)}</p>
          </OrderDetailTotalContainter> */}
          {/* 
          <OrderDetailTotalContainter>
            <p>Total </p>
            <p><span>:</span> $0.00</p>
          </OrderDetailTotalContainter> */}
        </div>

        <br />
        <br />
        <div>
          <h3>Order Details</h3>
          <OrderDetailTotalContainter>
            <p>Item(n)</p>
            <p><span>:</span> 
            {/* {data.length}  */}
            0 item</p>
          </OrderDetailTotalContainter>

          <OrderDetailTotalContainter>
            <p>Shipping Address </p>
            <p><span>:</span>
            Royal Avenue Benin Street
            {/* {data[0].buyer_shipping_address} */}
            </p>
          </OrderDetailTotalContainter>
          <OrderDetailTotalContainter>
            <p>Buy Phone  </p>
            <p><span>:</span>
            08162047348
            {/* {data[0].buyer_phone} */}
            </p>
          </OrderDetailTotalContainter>

        </div>
      </OrderDetailPaneContainer>
    </Pane>
  )
}

export default OrderDetailPane