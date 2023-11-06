import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Permanent from "./Permanent";
import Contractual from "./Contractual";
import PDF from "./PDF";
import PDFDocument from "./PDF";
import Outsourced from "./Outsourced";
import Trainee from "./Trainee";
import Student from "./Student";
import Others from "./Others";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const options = [
  "Permanent",
  "Contractual",
  "Outsourced",
  "Trainee",
  "Student",
  "Others",
];

const Dropdown = ({ data, setData, toast }) => {
  const [choice, setChoice] = useState("Staff Category");
  const [isSelected, setIsSelected] = useState(false);

  const handlechange = (e) => {
    setChoice(e.target.value);
    setIsSelected(true);
  };

  // useEffect(() => {
  //   console.log(choice);
  //   console.log(data)
  // }, [choice]);

  return (
    <div className="flex flex-col gap-5 items-start justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {choice}
            <ChevronDownIcon
              className="-mr-1 h-5 w-7 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {options.map((option, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      value={option}
                      onClick={handlechange}
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 w-full"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm w-full"
                      )}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {isSelected &&
        (choice === "Permanent" ? (
          <Permanent data={data} setData={setData} toast={toast} />
        ) : (
          <></>
        ))}

      {isSelected &&
        (choice === "Contractual" ? (
          <Contractual data={data} setData={setData} toast={toast} />
        ) : (
          <></>
        ))}
        
      {isSelected &&
        (choice === "Outsourced" ? (
          <Outsourced data={data} setData={setData} toast={toast} />
        ) : (
          <></>
        ))}

      {isSelected &&
        (choice === "Trainee" ? (
          <Trainee data={data} setData={setData} toast={toast} />
        ) : (
          <></>
        ))}

      {isSelected &&
        (choice === "Student" ? (
          <Student data={data} setData={setData} toast={toast} />
        ) : (
          <></>
        ))}

      {isSelected &&
        (choice === "Others" ? (
          <Others data={data} setData={setData} toast={toast} />
        ) : (
          <></>
        ))}
    </div>
  );
};

export default Dropdown;
