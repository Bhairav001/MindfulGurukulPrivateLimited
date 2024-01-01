import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <>
    

<section class="bg-center bg-no-repeat bg-[url('https://www.pixelresort.com/wp-content/uploads/2022/09/Notes-HD-2-1.png')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Mindful gurukul</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Mindfull gurukul, Mumbai, Explore the education courses</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button onClick={()=>navigate("/createNote")} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            <button onClick={()=>navigate("/notes")} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </button>  
        </div>
    </div>
</section>







    <>
     <hr />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Your story starts with us.
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                    This way, you can spend more time developing your ideas and less time waiting for inspiration to arrive. This updated article features the best digital note-taking apps and tools for all types of operating systems and platforms.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      {/* <i className="fas fa-award"></i> */}
                      <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Notes</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    If you’re a writer, you need note-taking apps you can depend on. This way, you can spend more time developing your ideas and less time waiting for inspiration to arrive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      {/* <i className="fas fa-retweet"></i> */}
                      <img src="https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX" alt="" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Free Revisions
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.  You can categorize your notes using tags, and these tags make it easy to organize and find notes later on. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      {/* <i className="fas fa-fingerprint"></i> */}
                      <img src="https://www.pngfind.com/pngs/m/300-3005647_sticky-notes-app-development-mobile-app-hd-png.png" alt="" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Verified Notes
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    you make an effort to capture ideas every day. You also spend time recording your thoughts. But, you’re having trouble finding the best note-taking app.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  {/* <i className="fas fa-user-friends text-xl"></i> */}
                  <img src="https://media.wired.com/photos/657c8d4f0413b9ce5a005ad4/master/pass/Notes-App-Rave-Gear-Alamy-2E1T4XG.jpg" alt="" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves
                  to any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you're good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check writing kit with writers and authors!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    {/* <i className="fas fa-rocket text-xl"></i> */}
                    <img src="https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-1252318294-copy_465154_ctyymp.jpg" alt="" />
                  </div>
                  <h3 className="text-3xl font-semibold">
                    A growing company
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Here are our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-1-800x800.jpg").default}
                    src='https://avatars.githubusercontent.com/u/101566080?v=4'
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ramesh Mane
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-2-800x800.jpg").default}
                    src='https://avatars.githubusercontent.com/u/105972503?v=4'
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Bhairav Gotam
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-3-800x800.jpg").default}
                    src='https://codersudhir.github.io/static/media/dp.23e2591d6d9decad1e42.jpg'
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Sudhir Nandane
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-4-470x470.png").default}
                    src='https://media.licdn.com/dms/image/C5603AQH6YLJNpKYptw/profile-displayphoto-shrink_800_800/0/1645321274249?e=2147483647&v=beta&t=U_poGN-aEKqAlOmeSyEXxy5VmTAWYOPXKC4Xvm6uB78'
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Pratik Shukla
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  {/* <i className="fas fa-medal text-xl"></i> */}
                  <img src="https://media.istockphoto.com/id/476257654/photo/service-concept.jpg?s=612x612&w=0&k=20&c=VbMJE9r8gciKdLzeTrJtl2Jwxdl7-2weY409evciFqs=" alt="" />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48" style={{marginTop:"0px"}}>
              <div className="w-full lg:w-6/12 px-4"  style={{width:"100%"}}>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </>

    </>

  )
}

export default Homepage