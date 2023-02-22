import { Dialog, Transition, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Pencil from '../assets/mdi_pencil-outline.svg'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const areas = [
  { name: 'GS' },
  { name: 'PS' },
  { name: 'PT' },
  { name: 'ETS' },
  { name: 'Bisb' },
]

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)
  const [selected, setSelected] = useState(areas[0])

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
                  <div className='p-6 pt-10 text-2xl font-bold placeholder:text-gray-500 flex'>
                    <input placeholder='Nome do Projeto...' className='outline-none' maxLength={23}></input> <img className="w-[21px] h-[21px] self-center" src={Pencil}></img>
                    </div>
                    <div className='pl-6 pb-4 text-base font-bold placeholder:text-gray-500'>
                    <input placeholder='Escreva aqui a descrição do projeto...' className='w-[50rem] outline-none'></input>
                    </div>
                    <div className='p-6 pt-10 text-lg text-black pl-6'>
                    <div>
                        Colaboradores
                    </div>
                    <input placeholder='Digite o email dos colaboradores aqui...' className='outline-none p-4 w-[50rem] h-[3rem] bg-gray-100 rounded'></input>
                    </div>
                    <div className='p-6 pt-2 text-lg text-black pl-6'>
                    <div>
                        Área
                    </div>
                    <div className="top-16 w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className=" relative w-[50rem] h-[3rem] cursor-default rounded bg-gray-100 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {areas.map((area, areaIdx) => (
                <Listbox.Option
                  key={areaIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={area}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {area.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
                    {/* <input placeholder='Selecione a área que este projeto será aplicado...' className='outline-none w-[50rem] h-[3rem] bg-gray-100'></input> */}
                    </div>
                    <div className='p-6 pt-2 text-lg text-black pl-6'>
                    <div>
                        Planner
                    </div>
                    <input placeholder='Selecione o planner pertecente a este projeto...' className='p-4 outline-none w-[50rem] h-[3rem] bg-gray-100 rounded'></input>
                    </div>
                    <div className='flex justify-end pl-4'>
                        <div className='mr-12 text-lg text-black'>
                            <button onClick={closeModal} className='pt-2'>Cancelar</button>
                        </div>
                        <div className='text-lg bg-green-600 w-[187px] h-[45px] text-center text-white rounded-lg'>
                            <button onClick={closeModal} className='pt-2'>Criar Projeto</button>
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
