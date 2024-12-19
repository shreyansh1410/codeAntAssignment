import { useState } from "react";
import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/outline";

const repositories = [
  {
    name: "design-system",
    language: "React",
    size: "7320 KB",
    visibility: "Public",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    language: "Javascript",
    size: "5871 KB",
    visibility: "Private",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    visibility: "Private",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    visibility: "Public",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    visibility: "Private",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    visibility: "Public",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    visibility: "Private",
    updatedAt: "7 days ago",
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
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <PlusIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
            Add Repository
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ArrowPathIcon className="inline-block w-5 h-5 mr-2 -mt-1" />
                Refresh All
              </button>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                    <div className="flex items-center justify-between">
                      <div className="truncate">
                        <div className="flex items-center space-x-3">
                          <h2 className="text-sm font-medium text-gray-900">
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
                        <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500">
                          <span className="inline-flex items-center space-x-2">
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
                                  : repo.language === "PHP"
                                  ? "bg-indigo-400"
                                  : "bg-gray-400",
                                "flex-shrink-0 w-2 h-2 rounded-full"
                              )}
                            />
                            <span>{repo.language}</span>
                          </span>
                          <span>{repo.size}</span>
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
