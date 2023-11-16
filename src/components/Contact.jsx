const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/8ce1bed1-b946-4e45-a04c-fe5a21b6f254" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold text-gray-300 border-b-4 border-[#FF5757]'>Contact</p>
                <p className='py-4 text-gray-300'>{`// Submit the form below or email - ihsanmarseno09@gmail.com`}</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-[#FF5757] hover:border-[#FF5757]'>{`Let's Collaborate`}</button>
        </form>
    </div>
  )
}

export default Contact