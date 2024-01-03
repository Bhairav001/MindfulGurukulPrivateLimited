import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    howDidYouHear: [],
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : type === 'select-multiple' ? Array.from(options).filter(option => option.selected).map(option => option.value) : value,
     }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      console.log('Form submitted successfully',response);
      alert("Form submitted successfully")
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='lg:w-1/2 flex items-center justify-center'>
        <img
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg'
          alt='Illustration'
          className='max-w-full max-h-full'
        />
      </div>
      <div className='lg:w-1/2 flex items-center justify-center'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
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
                  placeholder='Bhairav'
                  required=''
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  pattern="[0-9]+"
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='1234567890'
                  required=''
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Gender</label>
                <div className='flex items-center'>
                  <input type='radio' id='male' name='gender' value='Male' className='mr-2' required='' onChange={handleChange} />
                  <label htmlFor='male' className='text-sm font-medium text-gray-900 dark:text-white'>Male</label>
                </div>
                <div className='flex items-center'>
                  <input type='radio' id='female' name='gender' value='Female' className='mr-2' required='' onChange={handleChange} />
                  <label htmlFor='female' className='text-sm font-medium text-gray-900 dark:text-white'>Female</label>
                </div>
                <div className='flex items-center'>
                  <input type='radio' id='others' name='gender' value='Others' className='mr-2' required='' onChange={handleChange} />
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
                      name='howDidYouHear'
                      value='LinkedIn'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      onChange={handleChange}
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
                      name='howDidYouHear'
                      value='Friends'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      onChange={handleChange}
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
                      name='howDidYouHear'
                      value='Job Portal'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      onChange={handleChange}
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
                      name='howDidYouHear'
                      value='Others'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                <datalist id='states'>
                  <option value='Gujarat' />
                  <option value='Maharashtra' />
                  <option value='Karnataka' />
                </datalist>
              </div>
              <button
                type='submit'
                className='w-full text-black bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
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
