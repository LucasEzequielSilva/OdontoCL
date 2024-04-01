import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function Example() {
  let { pathname } = useLocation();

  const navigation = [
    { name: "Inicio", href: "/", current: pathname == "/" },
    { name: "Cursos", href: "/cursos", current: pathname == "/cursos"},
    { name: "Nosotros", href: "/nosotros", current: pathname == "/nosotros"},
    { name: "Contacto", href: "https://wa.link/6870cn", current: pathname == "https://wa.link/6870cn" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="header">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-[80px]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden z-10">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-[#1376f8] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                <div className="flex flex-shrink-0 items-center relative flex-1 justify-center sm:justify-start ">
                  <p>ODONTO CL</p>
                <div className="hidden sm:ml-6 sm:block md:left-1/2 md:absolute md:-translate-x-1/2">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-[#1376f8] text-white"
                            : "text-gray-800 hover:bg-[#1376f8] hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={index}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#1376f8] text-white"
                      : "text-gray-800 hover:bg-[#1376f8] hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
