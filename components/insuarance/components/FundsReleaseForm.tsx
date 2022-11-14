import { Input, Checkbox } from "@material-tailwind/react";

function FundsReleaseForm() {
  return (
    <div className='flex flex-col space-y-10'>
      <div className='flex flex-col mt-20'>
        <span className="text-blue-gray-500">Personal Details</span>
        <div className="grid grid-cols-4 gap-4 mt-5">
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >First Name</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Last Name</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Phone</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >City</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Street Address</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >N.O.K Fullname</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >N.O.K Phone</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Category</span>
        </div>
      </div>
      <div className='flex flex-col'>
        <span className="text-blue-gray-500">Beneficiaries</span>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Fullname</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >D.O.B</span>
          <div className="flex space-x-5">
            <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Relationship</span>
            <Checkbox />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Fullname</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >D.O.B</span>
          <div className="flex space-x-5">
            <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Relationship</span>
            <Checkbox />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Fullname</span>
          <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >D.O.B</span>
          <div className="flex space-x-5">
            <span className="flex border border-gray-300/20 bg-transparent w-full h-10 px-5 rounded-lg text-sm items-center" >Relationship</span>
            <Checkbox />
          </div>
        </div>
      </div>
      <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600">
        Release Funds
      </button>
    </div>
  )
}

export default FundsReleaseForm