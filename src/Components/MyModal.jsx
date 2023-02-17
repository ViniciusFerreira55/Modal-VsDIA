import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

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
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[873px] h-[660px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='flex justify-between p-2'>
                  <Dialog.Title
                    as="h3"
                    className="text-3xl leading-6 font-bold text-black p-2"
                  >
                    Novo Projeto de VsDIA
                  </Dialog.Title>
                  <div className=" text-white ">
                    <button
                      type="button"
                      className="w-[36px] h-[36px] bg-red-500 rounded-lg "
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                  </div>
                  <div className='p-2 border-b border-gray-500'></div>
                  <div className='p-6 pt-10 text-2xl font-bold placeholder:text-gray-500'>
                    <input placeholder='Nome do Projeto...' className='outline-none'></input>
                    </div>
                    <div className='pl-6 pb-4 text-base font-bold placeholder:text-gray-500'>
                    <input placeholder='Escreva aqui a descrição do projeto...' className='w-[600px] outline-none'></input>
                    </div>
                    <div className='p-6 pt-10 text-lg text-black pl-6'>
                    <div>
                        Colaboradores
                    </div>
                    <input placeholder='Digite o email dos colaboradores aqui...' className='outline-none w-96 h-8 bg-gray-100'></input>
                    </div>
                    <div className='p-6 pt-2 text-lg text-black pl-6'>
                    <div>
                        Área
                    </div>
                    <input placeholder='Selecione a área que este projeto será aplicado...' className='outline-none w-96 h-8 bg-gray-100'></input>
                    </div>
                    <div className='p-6 pt-2 text-lg text-black pl-6'>
                    <div>
                        Planner
                    </div>
                    <input placeholder='Selecione o planner pertecente a este projeto...' className='outline-none w-96 h-8 bg-gray-100'></input>
                    </div>
                    <div className='flex justify-end pt-12 pl-4'>
                        <div className='mr-12 text-lg text-black'>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>
                        <div className='text-lg bg-green-600 w[187px~] h-[45px] text-center text-white rounded-lg'>
                            <button onClick={closeModal}>Criar Projeto</button>
                        </div>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
