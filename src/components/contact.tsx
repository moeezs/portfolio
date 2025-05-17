import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import LoadingButton from './custom-ui/loading-button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import confetti from 'canvas-confetti'

const ContactPage = () => {
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    setButtonLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('access_key', apiKey as string);
// console.log('wait for confetti');
    // setTimeout(() => {
      
    //   handleConfetti();
    //   setButtonLoading(false);
    // }, 2000);
    
// console.log('wait for confetti');
    // setTimeout(() => {
      
    //   handleConfetti();
    //   setButtonLoading(false);
    // }, 2000);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      
      if (result.success) {
        console.log('Form submitted successfully:', result);
        handleConfetti();
        setButtonLoading(false);
        event.currentTarget.reset();
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        console.error('Error submitting form:', result);
        setButtonLoading(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setButtonLoading(false);
    }
  };

  function handleConfetti() {
    const end = Date.now() + 1 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  };

  return (
    <div id='contact'>
        <div className='flex flex-col align-middle justify-center'>
            <Card className='w-[90vw] md:w-[40vw] shadow-md shadow-slate-900/5'>

              <CardHeader className='text-center'>
                <h1 className='text-3xl md:text-5xl font-bold'>Reach Out :)</h1>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="w-full space-y-6 mx-auto">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name='name' 
                      placeholder="Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name='email' 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='w-full'>
                    <LoadingButton isLoading={buttonLoading} />
                  </div>
                </form>
              </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default ContactPage