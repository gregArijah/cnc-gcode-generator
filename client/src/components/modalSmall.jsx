import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function MyModal({ isOpen, onClose, children }) {

   
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10"
          onClose={onClose}
        >
          <div className=" px-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block justify-center items-center w-min p-6 my-8 text-left text-white align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl border"  >
                 {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  }
  