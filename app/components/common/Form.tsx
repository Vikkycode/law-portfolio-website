'use client'
import {useState} from 'react'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea';
import Button from './Button';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import style from '../../styles/global.module.css'



const Form = (props:any) => {
    const {children}=props;
  const [form,setForm] = useState({
    fullName:'',
    emailAddress:'',
    Subject:'',
    Message:''
  })
  
  const handleFormChange=(event:any)=>{
    const {name,value} = event.target;

    const updatedForm = {
        ...form,
        [name]:value
    }

    console.log('Form changed', updatedForm)

    setForm(updatedForm)
}
  
    return (
    <div className='flex flex-col lg:h-[528px] lg:-mt-40 lg:w-[620px]'>
        <div className='flex items-center gap-10 py-10'>
        <div className='px-4 lg:h-[40px] border-[1px] gap-[5px] text-[#787878] border-[#787878] rounded-[47px] flex items-center  justify-center'>
            <Button title="Send Message"/>
            <BsFillArrowRightCircleFill />
            </div>
            <div className={`${style.Button}`}>
            <Button title="Submit Feedback"/>
            <BsFillArrowRightCircleFill />
            </div>
        </div>
        <form action="">
            <FormInput 
            title="We will reach you as soon as you reach out to us"
            name="fullName"
            placeholder="Your name here"
            value={form.fullName}
            onChange={handleFormChange}
            />
            <FormInput 
            name="emailAddress"
            placeholder="Your email here"
            value={form.emailAddress}
            onChange={handleFormChange}
            />
            <FormInput 
            name="Subject"
            placeholder="Subject"
            value={form.Subject}
            onChange={handleFormChange}
            />
            <FormTextArea 
            name="Message"
            placeholder="Your message here"
            value={form.Message}
            onChange={handleFormChange}
            />  
        </form>
            <div className={`${style.Button}
            relative left-[16rem] lg:left-[34rem] py-2 w-[100px]`}>
            <Button title="Send"/>
            <BsFillArrowRightCircleFill />
            </div>
    </div>
  )
}

export default Form