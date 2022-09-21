import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Input, Option, Select } from "@material-tailwind/react";

const AddMember = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <React.Fragment>
      <button
        onClick={openModal}
        className="bg-indigo-400/80 rounded-md px-3 h-10"
      >
        Add Member
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            leaveTo="opacity-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveFrom="opacity-100"
            leave="ease-in duration-200"
            enter="ease-out duration-300"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                leave="ease-in duration-200"
                leaveTo="opacity-0 scale-95"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leaveFrom="opacity-100 scale-100"
              >
                <Dialog.Panel className="w-1/5 transform overflow-hidden rounded-xl bg-indigo-600 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title>Add New Member</Dialog.Title>
                  <div className="grid grid-cols-1 gap-4 mt-5">
                    <Input
                      name="firstname"
                      label="Firstname"
                      style={{ color: "white" }}
                    />
                    <Input label="Lastname" style={{ color: "white" }} />
                    <Input label="City" style={{ color: "white" }} />
                    <Input label="Phone" style={{ color: "white" }} />
                    <Select label="Category" style={{ color: "white" }}>
                      <Option>Gold</Option>
                      <Option>Bronze</Option>
                      <Option>Platinum</Option>
                    </Select>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default AddMember;
