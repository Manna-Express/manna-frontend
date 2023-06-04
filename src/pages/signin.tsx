import { LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from "@/pageSpecificStyles/login";
import Button from "@/shared/Button/Button";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import { useRouter } from "next/router";
import chicken from '@/assets/chicken.jpg'



const Signin= ()=>{
    // const {notify} = useToast();
    // const {status,errMessage}= useAppSelector(selectSignIn);
    // const dispatch= useAppDispatch();
    const router = useRouter()
  
    // const isLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  
    // const { 
    //   register,setValue, 
    //   handleSubmit,control,
    //   formState: { errors },
    // } = useForm<sigininApiPropType>({ resolver: yupResolver(schema) });
  
    // const onSubmit: SubmitHandler<sigininApiPropType>=data=>{
    //   dispatch(sigininApi(data))
    // }
  
    // useEffect(()=>{
    //   if(status==='success'){
    //     notify('Login Successfull','success')
    //     dispatch(setSignInIdle({}))
    //     dispatch(removeCartLocally(2))
    //     let iffiliateLocalcart:any = window.localStorage.getItem('iffiliate_cart')
    //     if(iffiliateLocalcart){
    //       //this means this user has been logged in before
    //       //we need to Register LocalCart to the database
    //       iffiliateLocalcart= JSON.parse(iffiliateLocalcart)
    //       const clean_data = iffiliateLocalcart.map((d:any)=>{
    //         return {
    //           'product_id':d.product.id,
    //           quantity:d.quantity
    //         }
    //       })
    //       // dispatch(bulkCreateOrderApi(clean_data as bulkCreateOrderApiProp[]))
    //       window.localStorage.removeItem('iffiliate_cart')
    //     }
    //     router.push('/')
    //   }
    //   if(status==='error'){
    //     notify(errMessage,'error')
    //   }
    // },[status])
  
    return (
      <LoginContainer>
        <LoginContainerImg 
css={{
    backgroundImage:`linear-gradient(to bottom, #05f7bb18,#072c23c0),url(${chicken.src})`
}}
        >
          {/* <img src="" alt="" /> */}
        </LoginContainerImg>
        <LoginContentContainer
          // style={{'height':'unset'}}
        >
          <br /><br />
          <br /><br />
          <br /><br />
          <LoginNav>
            <h2>Sign In</h2>
            <div>
              <a onClick={()=>router.push('/')}>Go Home</a>
              <a onClick={()=>router.push('/signup')}>Sign Up</a>
            </div>
          </LoginNav>   
          <form 
            // onSubmit={handleSubmit(onSubmit)}
          >
            <InputWithLabel label='Email'
             placeholder='Enter a valid email' 
            //   register={register('email')} 
            //   errorMessage={errors.email?.message}
            />
            <br />
            <InputWithLabel label='Password' 
            placeholder='*****' 
            //   register={register('password')} 
            //   errorMessage={errors.password?.message}
              type={'password'}
          
            />
            <a href="" style={{'padding':'.6rem 0','display':'block','textAlign':'right','color':'#f77305'}} onClick={(e)=>{
              e.preventDefault()
            //   router.push('/mailing/SendResetPasswordmail/')
            }}> Recover Password</a>
            <br />
            <Button
            css={{'width':'100%'}}

            //   isLoading={status==='pending'}
            >Sign In</Button>
          </form>
        </LoginContentContainer>
        <br />
        <br />
      </LoginContainer>
  
    )
  }
  
  export default Signin