import Image from "next/image";

export default function VistageneralPage() {
  return (
    <section className='p-6 grid-cols-3 gap-6 grid bg-gray-100'>

      <div className='shadow-md rounded-xl bg-white border border-gray-200 p-4 h-96'>
        <article className="flex justify-between">
          <div>
            <h1>Martín Gonzáles</h1>
            <span className="text-sm text-gray-500">hace 9 días</span>
          </div>
          <button className="text-red-600 size-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
            </svg>
          </button>
        </article>

        <figure className="">
          <Image
            src="/appreciation.svg"
            alt="Apreciation"
            width={100}
            height={100}
          />
          <Image
            className="rounded-full"
            src="/profile.jpg"
            alt="imagen"
            width={80}
            height={80}
          />
        </figure>
      </div>

      <div className='shadow-md rounded-xl bg-white border border-gray-200 p-4 h-96 col-span-2'>
        post
      </div>

      <div className='shadow-md rounded-xl bg-white border border-gray-200 p-4 h-96 '>
        post
      </div>

      <div className='shadow-md rounded-xl bg-white border border-gray-200 p-4 h-96 '>
        post
      </div>

      <div className='shadow-md rounded-xl bg-white border border-gray-200 p-4 h-96 '>
        post
      </div>

    </section>
  )
}