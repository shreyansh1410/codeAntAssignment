import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "./components/Sidebar";
import RepositoryList from "./components/RepoList";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <Sidebar />
      </div>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CodeAnt AI</span>
              <img
                className="h-8 w-auto"
                src="/placeholder.svg"
                alt="CodeAnt AI"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <Sidebar />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <div className="border-b border-gray-200 bg-white px-4 py-6 sm:px-6 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/placeholder.svg"
                alt="CodeAnt AI"
              />
              <span className="ml-3 text-xl font-semibold">CodeAnt AI</span>
            </div>
            <button
              type="button"
              className="-mr-3 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto bg-white px-4 py-6 sm:px-6">
          <RepositoryList />
        </main>
      </div>
    </div>
  );
}

export default App;
