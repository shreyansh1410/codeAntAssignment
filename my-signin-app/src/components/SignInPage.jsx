import { useState } from "react";
import StatsCard from "./StatsCard";

export default function SignInPage() {
  const [activeTab, setActiveTab] = useState("saas");

  return (
    <div className="min-h-screen flex flex-col justify-center md:flex-row bg-gray-50 font-sans">
      <div className="hidden md:flex w-full md:w-1/2 p-8 flex-col justify-center relative bg-white">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-16">
            <StatsCard />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 p-4">
          <img
            src="/placeholder.svg"
            alt="CodeAnt AI"
            className="w-32 h-32 md:w-48 md:h-48 opacity-30"
          />
        </div>
      </div>


      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:p-8">
        <div className="max-w-md mx-auto w-full flex flex-col">
          {/* White Background Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <div className="mb-4 flex items-center justify-center pt-4">
                <img
                  src="/placeholder.svg"
                  alt="CodeAnt AI"
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-lg font-semibold">CodeAnt AI</span>
              </div>
              <h2 className="text-2xl font-semibold">Welcome to CodeAnt AI</h2>
            </div>

            <div className="flex rounded-lg bg-gray-100 p-1 mb-8">
              <button
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "saas"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("saas")}
              >
                SAAS
              </button>
              <button
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "self-hosted"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("self-hosted")}
              >
                Self Hosted
              </button>
            </div>

            <div className="space-y-3">
              {activeTab === "saas" ? (
                <>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <img src="/github.svg" alt="" className="w-5 h-5 mr-3" />
                    Sign in with Github
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <img src="/bitbucket.svg" alt="" className="w-5 h-5 mr-3" />
                    Sign in with Bitbucket
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <img src="/azure.svg" alt="" className="w-5 h-5 mr-3" />
                    Sign in with Azure DevOps
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <img src="/gitlab.svg" alt="" className="w-5 h-5 mr-3" />
                    Sign in with GitLab
                  </button>
                </>
              ) : (
                <>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <img src="/gitlab.svg" alt="" className="w-5 h-5 mr-3" />
                    Self Hosted GitLab
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <img src="/key.svg" alt="" className="w-5 h-5 mr-3" />
                    Sign in with SSO
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    {/* <img src="" alt="" className="w-5 h-5 mr-3" /> */}
                    <div className="w-5 h-5 mr-3"></div>
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    {/* <img src="" alt="" className="w-5 h-5 mr-3" /> */}
                    <div className="w-5 h-6 mr-3"></div>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              By signing up you agree to the{" "}
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
