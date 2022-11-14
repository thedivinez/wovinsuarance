import React from 'react'
import { Input, Option, Select } from "@material-tailwind/react";

const AddMemberForm = () => {
  return (
    <div className='flex flex-col space-y-10'>
      <div className='flex flex-col mt-20'>
        <span>Personal Details</span>
        <div className="grid grid-cols-4 gap-4 mt-5">
          <Input name="firstname" label="Firstname" style={{ color: "white" }} />
          <Input label="Lastname" style={{ color: "white" }} />
          <Input label="City" style={{ color: "white" }} />
          <Input label="Phone" style={{ color: "white" }} />
          <Input label="N.O.K Name" style={{ color: "white" }} />
          <Input label="N.O.K Last Name" style={{ color: "white" }} />
          <Input label="N.O.K Phone" style={{ color: "white" }} />
          <Select label="Category" style={{ color: "white" }}>
            <Option>Gold</Option>
            <Option>Bronze</Option>
            <Option>Platinum</Option>
          </Select>
        </div>
      </div>
      <div className='flex flex-col'>
        <span>Beneficiaries</span>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Input label="Full name" style={{ color: "white" }} /><Select label="Relationship" style={{ color: "white" }}>
            <Option>Gold</Option>
            <Option>Bronze</Option>
            <Option>Platinum</Option>
          </Select>
          <Input label="Age" style={{ color: "white" }} />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Input label="Full name" style={{ color: "white" }} />
          <Select label="Relationship" style={{ color: "white" }}>
            <Option>Gold</Option>
            <Option>Bronze</Option>
            <Option>Platinum</Option>
          </Select>
          <Input label="Age" style={{ color: "white" }} />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Input label="Full name" style={{ color: "white" }} />
          <Select label="Relationship" style={{ color: "white" }}>
            <Option>Gold</Option>
            <Option>Bronze</Option>
            <Option>Platinum</Option>
          </Select>
          <Input label="Age" style={{ color: "white" }} />
        </div>
      </div>
      <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600">
        Submit
      </button>
    </div>
  )
}

export default AddMemberForm