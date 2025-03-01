export default function Home() {
  return (
    <div className='bg-red-200 h-screen w-full flex'>

      <section className='w-full h-full bg-white flex flex-col gap-10 p-12'>
        <div className='w-auto h-full flex flex-col px-64 py-20 justify-between'>
          <div className='flex flex-col gap-4'>
            <article className='flex gap-4 items-center'>
              <img src='/logo.svg' alt='logo' className='w-10' />
              <h1 className='text-3xl font-bold'>G A N E - A P P</h1>
            </article>
            <p className='text-3xl font-medium'>Welcome back!</p>
          </div>

          <div className='flex flex-col gap-4'>
            <button className='w-full flex items-center justify-center gap-2 border px-12 py-3 rounded-md border-gray-200'>
              <img src='/google.svg' alt='google' className='w-6' />
              <span> Continue with Google</span>
            </button>

            <div className='flex items-center gap-2'>
              <div className='w-full h-0.5 border border-gray-300'></div>
              <p className='w-full text-gray-400 text-sm text-center'>Or sing in with</p>
              <div className='w-full h-0.5 border border-gray-300'></div>
            </div>
          </div>

          <div>
            <form action=' ' className='flex flex-col'>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Work email *</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password *</label>
              </div>
              <button
                className='border border-gray-400 rounded-md py-2 mt-4'
              >
                <span className='text-gray-500 font-medium'>SING IN</span>
              </button>
            </form>
          </div>

          <div>
            <p className="text-sm text-gray-700">Don't have an account yet? <a href=" ">Start free trial</a></p>
          </div>

        </div>
      </section>

      <section className='w-full bg-gray-100 p-12'>
        logo
      </section>
    </div>
  );
}
