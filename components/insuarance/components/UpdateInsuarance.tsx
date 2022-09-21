import React from "react";
import { v4 as uuid4 } from "uuid";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Input, Checkbox } from "@material-tailwind/react";

const UpdateInsuarance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <React.Fragment>
      <button
        onClick={openModal}
        className="bg-indigo-400/80 rounded-md px-3 h-10"
      >
        Update Insuarance
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
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
                  <Dialog.Title>Update Insuarance</Dialog.Title>
                  <div className="flex flex-col mt-5 text-white">
                    <Input
                      name="wovnumber"
                      label="W.O.V #"
                      style={{ color: "white" }}
                    />
                    <div className="grid grid-cols-2 my-5">
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>January</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>February</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>March</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>April</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>May</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>June</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>July</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>Augast</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox disabled color="gray" defaultChecked />
                        <span>September</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <span>October</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <span>November</span>
                      </div>
                      <div className="flex items-center">
                        <Checkbox />
                        <span>December</span>
                      </div>
                    </div>
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

export default UpdateInsuarance;
