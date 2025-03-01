export default function Home() {
  return (
    <div className='bg-red-200 h-screen w-full flex'>

      <section className='w-full h-full bg-white flex flex-col gap-10 p-12'>
        <div className='w-auto h-full flex flex-col px-56 py-20 justify-between'>
          <div className='flex flex-col gap-4'>
            <article className='flex gap-4'>
              <img src='/logo.svg' alt='logo' className='w-12' />
              <h1 className='text-2xl font-semibold'>App Gane</h1>
            </article>
            <p className='text-lg font-medium'>Welcome back !</p>
          </div>

          <div>
            <button className='flex gap-2 border px-12 py-3 rounded-md border-gray-200'>
              <img src='/google.svg' alt='google' className='w-6' />
              Continue with Google
            </button>
          </div>

          <div>
            separator
          </div>

          <div>
            <form action=' ' className='flex flex-col'>
              <input type='text' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <a href=' '>Forgot password ?</a>
              <button>
                SING IN
              </button>
            </form>

            <div>
              <p>Don't have an account ? <a href=' '>Sign up</a></p>
            </div>

          </div>
        </div>
      </section>

      <section className='w-full bg-gray-200 p-12'>
        logo
      </section>
    </div>
  );
}
