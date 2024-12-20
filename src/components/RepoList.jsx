import { useState } from "react";
import {
  ArrowPathIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import DatabaseIcon from "./DatabaseIcon"; // Import the custom DatabaseIcon

const repositories = [
  {
    name: "Personal Portfolio",
    visibility: "Public",
    language: "React",
    size: "2024 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "E-Commerce App",
    visibility: "Private",
    language: "Javascript",
    size: "4550 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "Blog Platform",
    visibility: "Public",
    language: "Python",
    size: "3512 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "Weather Dashboard",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1023 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "Landing Page",
    visibility: "Public",
    language: "Javascript",
    size: "1056 KB",
    updatedAt: "3 days ago",
  },
  {
    name: "Chat Application",
    visibility: "Private",
    language: "Java",
    size: "4011 KB",
    updatedAt: "7 days ago",
  },
  {
    name: "Crypto Tracker",
    visibility: "Public",
    language: "Swift",
    size: "2355 KB",
    updatedAt: "1 week ago",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RepositoryList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            Repositories
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            {repositories.length} total repositories
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex sm:items-center">
          <button
            type="button"
            className="mr-4 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <PlusIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
            Add Repository
          </button>
          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <ArrowPathIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
            Refresh All
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="Search Repositories"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <ul role="list" className="divide-y divide-gray-200">
                {filteredRepositories.map((repo) => (
                  <li
                    key={repo.name}
                    className="px-4 py-4 sm:px-6 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-between font-semibold">
                      <div className="truncate">
                        <div className="flex items-center space-x-3">
                          <h2 className="text-md font-medium text-gray-900">
                            {repo.name}
                          </h2>
                          <span
                            className={classNames(
                              repo.visibility === "Public"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800",
                              "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
                            )}
                          >
                            {repo.visibility}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center space-x-10 text-sm text-gray-500">
                          <span className="inline-flex items-center space-x-2">
                            <span>{repo.language}</span>
                            <span
                              className={classNames(
                                repo.language === "React"
                                  ? "bg-blue-400"
                                  : repo.language === "Javascript"
                                  ? "bg-yellow-400"
                                  : repo.language === "Python"
                                  ? "bg-green-400"
                                  : repo.language === "Swift"
                                  ? "bg-orange-400"
                                  : repo.language === "Java"
                                  ? "bg-red-400"
                                  : repo.language === "HTML/CSS"
                                  ? "bg-purple-400"
                                  : "bg-gray-400",
                                "flex-shrink-0 w-2 h-2 rounded-full"
                              )}
                            />
                          </span>
                          <span className="inline-flex items-center space-x-2">
                            <DatabaseIcon className="h-4 w-4 text-gray-500" />
                            <span>{repo.size}</span>
                          </span>
                          <span>Updated {repo.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
