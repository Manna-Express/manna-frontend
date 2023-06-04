
import { NextPage } from 'next'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout'
import { ContentWithFormInput } from '@/shared/FormRelatedStyles'
import Pane from '@/shared/Pane'
import InputWithLabel from '@/shared/InputWithLabel/InputWithLabel'
import Button from '@/shared/Button/Button'
import UploadImage from '@/shared/UploadImage/UploadImage'





const CreateProduct:NextPage =()=>{
    // const dispatch  = useAppDispatch();
    // const {status,errMessage,category_list,upload_state} = useAppSelector(selectProduct);
    // const {notify} = useToast();
    const router = useRouter()
    const { shop } = router.query
  
    // const { 
    //   register,setValue, 
    //   handleSubmit,control,
    //   formState: { errors },watch
    // } = useForm<ProductCreateType>({ resolver: yupResolver(schema) });
    
    const [progress,setProgress] = useState(0)
    // const watchFields = watch(['out_of_stock'])
    // const onSubmit: SubmitHandler<ProductCreateType>=data=>{
    //   dispatch(productCreateApi({
    //     data,
    //     dispatch
    //   }))
    //   console.log({'submitedData':data})
    // }
  
    // useEffect(()=>{
    //   if(typeof shop === 'string'){
    //     setValue('shop',parseInt(shop))
    //   }
  
    //   if(category_list.length == 0 ){
    //     dispatch(getCategory(''))
    //   }
    // },[])
    // useEffect(()=>{
    //   if(status==='created'){
    //     notify('Created Succefully','success')
    //     router.push(`/dashboard/shop/${shop}/`)
    //   }
    //   if(status==='deleted'){
    //     notify(errMessage,'error')
    //   }
    //   if(status=='error'){
    //     notify(errMessage,'error')
    //   }
    // },[
    //     status
    // ])
    // console.log({'from error':errors})
    return (
      <DashboardLayout
        listOFLinks={[]}
        showDetail={true}
      >
        {/* <Preloader loading={status=='pending'} text={`Please Hold On ${upload_state!=0?upload_state:''}%`}/> */}
        <h1>Create Product</h1>
  
        <ContentWithFormInput>
          <div>
            <h3>Product Name</h3>
            <p>Add your product display name</p>
          </div>
  
          <Pane>
            <InputWithLabel label='Name' 
            //   register={register('name')}
            //   errorMessage={errors.name?.message}
            />
            <br />
            <InputWithLabel label='Description' 
            //   register={register('description')}
            //   errorMessage={errors.description?.message}
              isTextArea={true} />
  
          </Pane>
        </ContentWithFormInput>
  
        <ContentWithFormInput>
          <div>
            <h3>Product Pricing</h3>
            <p>Add your actual price</p>
          </div>
          <Pane>
           
            <InputWithLabel label='Actual Price'
            //   register={register('actual_price')}
            //   errorMessage={errors.actual_price?.message}
            //   isTextArea={true} 
              />
          </Pane>
        </ContentWithFormInput>
  
  
        <ContentWithFormInput>
          <div>
            <h3>Product Image</h3>
            <p>Upload your product Image from here
  
              <br /><strong>it must be four in number</strong>
            </p>
          </div>
          <Pane>
            {/* <UploadImage
              setValue={setValue}
              height={1080}
              width={1080}
              name='image_four'
            /> */}
            {/* <a href="">ss</a> */}
            <input type="file"  multiple  
            // {...register('image_one')} 
            />
          </Pane>
        </ContentWithFormInput>
        <br />
        <Button css={{'width':'30%','margin':'0 auto'}} 
        >Publish</Button>
        <br /><br /><br /><br />
      </DashboardLayout>
        
    )
  }
  
  export default CreateProduct