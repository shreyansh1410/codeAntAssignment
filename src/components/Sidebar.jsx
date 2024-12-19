import {
  HomeIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
  PhoneIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Repositories", href: "#", icon: HomeIcon, current: true },
  { name: "AI Code Review", href: "#", icon: CodeBracketIcon, current: false },
  { name: "Cloud Security", href: "#", icon: ShieldCheckIcon, current: false },
  {
    name: "How to Use",
    href: "#",
    icon: QuestionMarkCircleIcon,
    current: false,
  },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
  { name: "Support", href: "#", icon: PhoneIcon, current: false },
  { name: "Logout", href: "#", icon: ArrowLeftOnRectangleIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <nav className="flex flex-1 flex-col">
      <div className="flex flex-shrink-0 items-center px-4 py-5">
        <img className="h-8 w-auto" src="/placeholder.svg" alt="CodeAnt AI" />
        <span className="ml-3 text-xl font-semibold">CodeAnt AI</span>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-blue-600"
                          : "text-gray-400 group-hover:text-blue-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
