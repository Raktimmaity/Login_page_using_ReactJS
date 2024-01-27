import React from 'react'
function InputBox(){
    return(
        <div className="flex flex-col gap-5">
        <div className="flex justify-between gap-2 flex-col">
          <label className="font-bold text-[#0ab88c]" htmlFor="username">
            Username
          </label>
          <input
            className="border border-l-0 border-t-0 border-r-0 border-b-[#0ab88c] focus:outline-none outline-0 focus:border-green-500"
            type="text"
            name="password"
            id=""
          />
        </div>
        <div className="flex justify-between gap-2 flex-col">
          <label className="font-bold text-[#0ab88c]" htmlFor="username">
            Password
          </label>
          <input
            className="border border-l-0 border-t-0 border-r-0"
            type="password"
            name="password"
            id=""
          />
        </div>
      </div>
    )
};

export default InputBox;