
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout';
import Pane from '@/shared/Pane';
import Wallet from '@/shared/Wallet/wallet';
import { Transaction, TransactionInfo, TransactionName, TransactionsContainer } from '@/shared/TransactionStyle/transaction.style';



const WalletPage:NextPage = ()=>{
//   const { shop } = route.query
  const [modalIsOpen,setModalIsOpen] = useState(false)
  
//   useEffect(()=>{

//     if(shop){
//       if(typeof shop === 'string'){

//       }
//     }
//   },[route.isReady])
//   useEffect(()=>{
//     if(message){
//       notify(message,'success')
//       dispatch(clean_stateWallet({}))
//     }
//     if(errMessage){
//       notify(errMessage,'error')
//       dispatch(clean_stateWallet({}))
//     }
//   },[message])

  const ifStyles = (variant:string)=>{
    if(variant == 'success'){
      return 'green'
    }

    if(variant == 'failed'){
      return 'red'
    }
    if(variant == 'reversed'){
      return 'gray'
    }
    if(variant == 'pending'){
      return '#f77305'
    }
  }
  return (
    <DashboardLayout
      listOFLinks={[
        {label:'Product',route:`#`},
        {label:'Orders ',route:`#`},
        {label:'Wallet',route:`#`},
        {label:'Logout',route:'/logout'},
      ]}
    >
      {/* <Preloader loading={(wallet_status=='pending'||list_of_wallet_transactionStatus=='pending')}/> */}
      
      {/* <Wallet amount={wallet?wallet:0.00}/> */}
      <Wallet amount={0.00}/>
      <br />
      <button>
      Withdraw
      </button>
      {/* <Button 
        onClick={e=>setModalIsOpen(true)}
        styleType={'pry'} style={{'width':'200px'}}>
        Withdraw
      </Button> */}
      <br />
      <br />
      <Pane>
        {/* <select name="" id="">
          <option value="">success</option>
          <option value="">failed</option>
          <option value="">reversed</option>
          <option value="">pending</option>
        </select> */}
        <TransactionsContainer>
          {/* {
            list_of_wallet_transaction.map((data,index)=>(
              <div key={index}>
                <Transaction>
                  <TransactionName>
                    <h3>
                      {data.shop.name}
                    </h3>
                    <small ><p style={{'backgroundColor':ifStyles(data.transfer_state)}}>{data.transfer_state}</p></small>
                  </TransactionName>

                  <TransactionInfo>
                    <p><strong>₦ {data.amount}</strong></p>
                    <p><small>Oct 03, 2022</small></p>
                  </TransactionInfo>
                </Transaction>
                <br />

              </div>
            ))
          } */}
            <div >
                <Transaction>
                  {/* icon */}
                  <TransactionName>
                    <h3>
                        Ola Funds Store
                      {/* {data.shop.name} */}
                    </h3>
                    <small ><p 
                    style={{'backgroundColor':'green'}}
                    >
                        Success
                        {/* {data.transfer_state} */}
                        </p></small>
                  </TransactionName>

                  <TransactionInfo>
                    <p><strong>₦ 1000
                        {/* {data.amount} */}
                        </strong></p>
                    <p><small>Oct 03, 2022</small></p>
                  </TransactionInfo>
                </Transaction>
                <br />

              </div>
        </TransactionsContainer>
      </Pane>

      {/* <CustomModal
        element={
          <RequestWithdraw/>
        }
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      /> */}
    </DashboardLayout>
  )
}

export default WalletPage