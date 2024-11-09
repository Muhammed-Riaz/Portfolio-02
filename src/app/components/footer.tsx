

function Footer() {
  return (


    <footer className="w-full mt-24 bg-[#f2f2f2]">

      {/* Parent */}
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-screen-lg mx-auto lg:gap-20">

        {/* Start Child 001 */}

        <div className="max-w-screen-xl mx-auto py-10 flex lg:flex-row flex-col justify-center items-center text-center ">
          <div className="lg:p-5">
            <svg className=" lg:w-24 w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M5.37 2.257a1.25 1.25 0 0 1 1.214-.054l3.378 1.69 2.133-1.313A1.25 1.25 0 0 1 14 3.644v7.326c0 .434-.225.837-.595 1.065l-2.775 1.708a1.25 1.25 0 0 1-1.214.053l-3.378-1.689-2.133 1.313A1.25 1.25 0 0 1 2 12.354V5.029c0-.434.225-.837.595-1.064L5.37 2.257ZM6 4a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 6 4Zm4.75 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-red-700">Address</h4>
            <p className="text-[blueviolet] text-lg font-mono">City Hyderabad</p>
          </div>
        </div>
        {/* End Child 001 */}

        {/* Start Child 002 */}
        <div className="max-w-screen-xl mx-auto p-5 flex lg:flex-row flex-col justify-center items-center text-center  ">
          <div className="p-5">
            <svg className="logos w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M7.25 11.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"></path>
              <path fillRule="evenodd" d="M6 1a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 6 15h4a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10 1H6Zm4 1.5h-.5V3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-red-700 mb-2">Phone</h4>
            <p className="text-[blueviolet] text-lg font-mono">03402800715</p>
            <p className="text-[blueviolet] text-lg font-mono">03133172244</p>
          </div>
        </div>
        {/* End Child 002 */}

        {/* Start Child 003 */}
        <div className="max-w-screen-xl mx-auto p-5 flex lg:flex-row flex-col justify-center items-center text-center ">
          <div className="logo p-5">
            <svg className="logos w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path>
            </svg>
          </div>
          <div className="text-[blueviolet]">
            <h4 className="text-2xl font-bold text-red-700">Send me Email</h4>
            <p className="text-lg font-mono">riazahmedzaur110@gmail.com</p>
          </div>
        </div>
        {/* End Child 003 */}
      </div>

      <hr className="mt-24  mx-auto max-w-[90%] border-2 border-red-500" />

      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-[90%] mx-auto text-gray-600">
        <div className="p-4">
          <h2 className="text-xl font-bold">Riaz-2024-25 | All Rights Reserved</h2>
        </div>

        <div className="flex justify-between items-center font-bold text-lg p-4">
          <div>Term & Condition</div>
          <div>Privacy Policy</div>
          <div>Sitemap</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
