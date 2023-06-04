import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout"
import Button from "@/shared/Button/Button"
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel"
import Pane from "@/shared/Pane"
import { NextPage } from "next"

const Changepassword:NextPage = ()=>{



    return(
      <DashboardLayout
        listOFLinks={[
          {label:'profile',route:''},
          {label:'Change Password',route:''},
          {label:'My Order',route:''},
          // {label:'Danloads',route:''},
          {label:'My WishLists',route:''},
          {label:'My Refunds',route:''},
          {label:'Logout',route:'/logout'},
        ]}
      >
        <Pane>
          <h3>Change Password</h3>
          <br />
          <br />
          <InputWithLabel label='Old Password' placeholder='***'/>
          <br />
          <br />
          <InputWithLabel label='New Password' placeholder='***'/>
          <br />
          <br />
          <InputWithLabel label='Confirm Password' placeholder='***'/>
          <br />
          <Button css={{'width':'90px','margin-left':'auto'}}>
            Save
          </Button>
        </Pane>
      </DashboardLayout>
    )
  }
  
  export default Changepassword