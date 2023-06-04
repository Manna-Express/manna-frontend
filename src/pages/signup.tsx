import { LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from "@/pageSpecificStyles/login";
import InputWithLabel from "@/shared/InputWithLabel/InputWithLabel";
import { useRouter } from "next/router";
import loginimg from '@/assets/loginimg.jpg'
import Button from "@/shared/Button/Button";
const Signup= ()=>{
  
    // const {status,errMessage}= useAppSelector(selectSignUp);
    // const dispatch= useAppDispatch();
    const route = useRouter()
    // const { 
    //   register,setValue, 
    //   handleSubmit,control,
    //   formState: { errors },
    // } = useForm<signUpApiResponse>({ resolver: yupResolver(schema) });
  
    // const onSubmit: SubmitHandler<signUpApiResponse>=data=>{
    //   dispatch(signUpApi(data))
    // }
  
    // useEffect(()=>{
    //   if(status==='created'){
    //     notify('Account Created Please Check Your Mail for verification link','success')
    //     route.push('/signin')
    //   }
    //   if(status==='error'){
    //     notify(errMessage,'error')
    //   }
    // },[status])
    return (
      <LoginContainer>
        <LoginContainerImg
    //   backgroundImage:linear-gradient(to bottom, #f7720557,black),url(${(props)=>props.image}); *
css={{
    backgroundImage:`linear-gradient(to bottom, #05f7bb18,#072c23c0),url(${loginimg.src})`
}}
        //  image={LoginImage.src}
         >
          {/* <img src="" alt="" /> */}
        </LoginContainerImg>
        <LoginContentContainer>
          <LoginNav>
            <h2>Sign Up</h2>
            <div>
              <a href="" onClick={(e)=>route.push('/')}>Go Home</a>
              <a href="" onClick={(e)=>route.push('/signin')}>Sign in</a>
            </div>
          </LoginNav>        
          <form 
        //   onSubmit={handleSubmit(onSubmit)}
          >
            <InputWithLabel label='Email' 
            placeholder='Enter a valid email' 
            //   register={register('email')} 
            //   errorMessage={errors.email?.message}
            />
            <br />
            <InputWithLabel label='First Name' placeholder='Enter a First Name' 
            //   register={register('first_name')}
            //   errorMessage={errors.first_name?.message}
            />
            <br />
            <InputWithLabel label='Last Name' placeholder='Enter a Last Name' 
            //   register={register('last_name')}
            //   errorMessage={errors.last_name?.message}
            />
            <br />
            <InputWithLabel label='Phone Number' placeholder='080237832' 
            //   register={register('phone')}
            //   errorMessage={errors.phone?.message}
            />
            <br />
            <InputWithLabel label='Password' placeholder='*****' 
            //   register={register('password')} 
            //   errorMessage={errors.password?.message}
              type='password'
            />
            <br />
            <InputWithLabel label='Confirm Password' placeholder='*****'
            //   register={register('confirm_password')} 
            //   errorMessage={errors.confirm_password?.message}
            />
         
            <p>By signing up, you agree to our <span>terms</span> {' & '} <span>policy</span></p>
  
            <Button
            css={{'width':'100%'}}
            // isLoading={status==='pending'}
            >Register</Button>
          </form>
        </LoginContentContainer>
        <br />
        <br />
      </LoginContainer>
  
    )
  }
  
  export default Signup