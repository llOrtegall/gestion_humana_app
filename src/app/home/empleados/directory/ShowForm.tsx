'use client';

import { useState } from "react";

export const ShowFormButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm
    );
  }

  return (
    <>
      <button
        onClick={handleShowForm}
        className='flex items-center gap-2 text-blue-400 text-lg hover:text-blue-500 hover:underline hover:cursor-pointer'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-8'>
          <path fillRule='evenodd' d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z' clipRule='evenodd' />
        </svg>
        <p>AÑADIR EMPLEADO</p>
      </button>
    </>
  )
}