import emailjs from '@emailjs/browser';
import { useState } from 'react';
import toast from 'react-hot-toast';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const[errors, setErrors] = useState({});
  const[isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value 
    });
  }

  const validate =() => {
    let errors = {};
    if(!formData.name) errors.name = 'Name is required';
    if(!formData.email) {
      errors.email = 'Email is required';
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if(!formData.message) errors.message = 'Message is required';
    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }else{
      setErrors({});
      setIsSending(true);
    }

    emailjs
      .send(
        'service_32ogy89',
        'template_0pq54ar',
        formData,
        'ySbfhYZC2uPWKP_IC'
      ).then(() => {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        }).catch((err) => {
          console.error('FAILED', err);
          toast.error('Failed to send message. Please try again later.');
        }).finally(() => {
          setIsSending(false);
        });
      })
  }

  return (
    <div className='p-4 lg:w:3/4' id='contact'>
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>Let&apos;s Connect</h2>
      <motion.form 
         initial={{opacity: 0}}
         whileInView={{opacity: 1}}
         transition={{duration: 0.8, delay: 0.7}}
        onSubmit={handleSubmit}>
        <div className='mb-4 flex space-x-4'>
          <div className='lg:w-1/2'>
            <input type='text' id='name' 
              name='name' 
              value={formData.name} 
              onChange={handleChange} 
              placeholder='Name' 
              className='mb-8 rounded-lg w-full appearance-none border border-stone-50/30 bg-transparent px-3 py-2
              text-sm focus:border-stone-400 focus:outline-none'/>
              {errors.name && (
                <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                  className='text-sm text-rose-800'>{errors.name}</motion.p>
              )} 
          </div>
          <div className='lg:w-1/2'>
            <input type='email' id='email' 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              placeholder='Email' 
              className='mb-8 rounded-lg w-full appearance-none border border-stone-50/30 bg-transparent px-3 py-2
              text-sm focus:border-stone-400 focus:outline-none'/>
              {errors.email && (
                <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}} className='text-sm text-rose-800'>{errors.email}</motion.p>
              )} 
          </div>
        </div>
        <div className='mb-4'>
            <textarea type='textarea' id='message' 
              name='message' 
              value={formData.message} 
              onChange={handleChange} 
              placeholder='Message' 
              rows='6'
              className='mb-8 rounded-lg w-full appearance-none border border-stone-50/30 bg-transparent px-3 py-2
              text-sm focus:border-stone-400 focus:outline-none'/>
              {errors.message && (
                <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}} className='text-sm text-rose-800'>{errors.message}</motion.p>
              )} 
          </div>
          <button type='submit' className={`mb-8 w-full rounded border-stone-50/30 px-4 py-2 font-semibold hover:bg-stone-300 bg-stone-200 text-sm text-stone-900 
            ${isSending ? 'cursor-not-allowed opacity-50':''}`}
            disabled={isSending}
            >
              <div className='flex items-center justify-center gap-2'>
                {isSending ? 'Sending...' : 'Send'}
                <SendIcon/>
              </div>
            </button>
      </motion.form>      
    </div>
  )
}

export default ContactForm