import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Dropdown from "./Dropdown";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    designation: "",
    phone: "",
    bioID: "",
    residingBuilding: "",
    room: "",
    month: "",
    remarks:"",
    selection: "",
    extraData: [],
    reportNumber:"",
  });

  return (
    <div>
      <div className="">
        <Toaster />
      </div>
      <div className="max-h-screen p-6 bg-transparent flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1">
                <div className="lg:col-span-3">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-1">
                    <div className="md:col-span-5">
                      <label
                        htmlFor="full_name"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Full Name
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        //value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        htmlFor="designation"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Designation
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, designation: e.target.value })
                        }
                        type="text"
                        name="designation"
                        id="designation"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        //value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Phone Number
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, phone: e.target.value })
                        }
                        type="text"
                        name="phone"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="biometric"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Biometric ID
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, bioID: e.target.value })
                        }
                        type="text"
                        name="biometric"
                        id="biometric"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                        // placeholder=""
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label
                        htmlFor="residing_building"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Residing Building
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, residingBuilding: e.target.value })
                        }
                        type="text"
                        name="residing_building"
                        id="residing_building"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // placeholder=""
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="room"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Room Number
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, room: e.target.value })
                        }
                        type="text"
                        name="room"
                        id="room"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label
                        htmlFor="month"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Paying for the month
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, month: e.target.value })
                        }
                        type="text"
                        name="month"
                        id="month"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        htmlFor="full_name"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Remarks
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, remarks: e.target.value })
                        }
                        type="text"
                        name="remarks"
                        id="remarks"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        //value=""
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="flex items-center justify-between mt-5">
                        <Dropdown data={data} setData={setData} toast={toast} />
                        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
