const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://formspree.io/f/xpzgelow" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='inline md:text-4xl text-3xl font-bold text-white border-b-4 border-[#FF5757]'>Contact</p>
                <p className='py-4 text-sm text-gray-300 md:text-lg'>{`// Submit the form below or email - `} <span className="underline"><a className='text-[#EAD196]' href="mailto:ihsanmarseno09@gmail.com">ihsanmarseno09@gmail.com</a></span></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button className='flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-[#FF5757] hover:border-[#FF5757]'>{`Let's Collaborate`}</button>
        </form>
    </div>
  )
}

export default Contact