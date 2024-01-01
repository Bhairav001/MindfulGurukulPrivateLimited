import React from 'react';

const Register = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='lg:w-1/2 bg-gray-50 dark:bg-gray-900 flex items-center justify-center'>
        <img
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg'
          alt='Illustration'
          // className='max-w-full max-h-full'
        />  
      </div>
      <div className='lg:w-1/2 flex items-center justify-center'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <form className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Name (Alphabets only)
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  pattern="[A-Za-z]+"
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='John Doe'
                  required=''
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Email (Alphanumeric only)
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required=''
                />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Phone (Numbers only)
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  pattern="[0-9]*"
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='1234567890'
                  required=''
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Gender</label>
                <div className='flex items-center'>
                  <input type='radio' id='male' name='gender' value='male' className='mr-2' required='' />
                  <label htmlFor='male' className='text-sm font-medium text-gray-900 dark:text-white'>Male</label>
                </div>
                <div className='flex items-center'>
                  <input type='radio' id='female' name='gender' value='female' className='mr-2' required='' />
                  <label htmlFor='female' className='text-sm font-medium text-gray-900 dark:text-white'>Female</label>
                </div>
                <div className='flex items-center'>
                  <input type='radio' id='others' name='gender' value='others' className='mr-2' required='' />
                  <label htmlFor='others' className='text-sm font-medium text-gray-900 dark:text-white'>Others</label>
                </div>
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  How did you hear about this?
                </label>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      type='checkbox'
                      id='linkedin'
                      name='how_heard[]'
                      value='linkedin'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='linkedin' className='font-light text-gray-500 dark:text-gray-300'>
                      LinkedIn
                    </label>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      type='checkbox'
                      id='friends'
                      name='how_heard[]'
                      value='friends'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='friends' className='font-light text-gray-500 dark:text-gray-300'>
                      Friends
                    </label>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      type='checkbox'
                      id='job_portal'
                      name='how_heard[]'
                      value='job_portal'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='job_portal' className='font-light text-gray-500 dark:text-gray-300'>
                      Job Portal
                    </label>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      type='checkbox'
                      id='others'
                      name='how_heard[]'
                      value='others'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='others' className='font-light text-gray-500 dark:text-gray-300'>
                      Others
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor='city' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  City
                </label>
                <select
                  id='city'
                  name='city'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                >
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Pune'>Pune</option>
                  <option value='Ahmedabad'>Ahmedabad</option>
                </select>
              </div>
              <div>
                <label htmlFor='state' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  State
                </label>
                <input
                  type='text'
                  id='state'
                  name='state'
                  list='states'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Type or select from the list'
                  required=''
                />
                <datalist id='states'>
                  <option value='Gujarat' />
                  <option value='Maharashtra' />
                  <option value='Karnataka' />
                </datalist>
              </div>
              <button
                type='submit'
                className='flex m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
