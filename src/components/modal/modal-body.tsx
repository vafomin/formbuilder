import { Dialog, Transition } from "@headlessui/react";

type ModalBodyProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalBody: React.FC<ModalBodyProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition.Root show={isOpen}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span className="hidden align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
          >
            <div className="align-middle bg-white rounded-lg px-10 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:w-96 sm:px-10">
              <div>
                <div className="mt-3 sm:mt-5">{children}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalBody;
