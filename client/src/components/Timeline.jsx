import React, { useState } from "react";
import Loading from "../components/Loading";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Timeline = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDetails = async () => {
    setEmployeeData(null);
    const body = { phone };
    console.log(body);
    setLoading(true);

    await axios
      .get(`${import.meta.env.VITE_APP_SERVER_URL}/api/employee/details`, {
        params: { phone: phone }, // or simply { phone } if the variable name matches
      })
      .then((res) => {
        if (res.data.status === "error") toast.error(res.data.message);
        else {
          setEmployeeData(res.data);
          console.log(`This is employee data ${JSON.stringify(res.data)}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="w-11/12">
      <div className="">
        <Toaster />
      </div>
      <div>
        <div className="max-h-screen p-6 bg-transparent flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-sm p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1">
                  <div className="lg:col-span-3">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-1">
                      <div className="flex items-end gap-5 justify-center">
                        <div className="md:col-span-5">
                          <label
                            htmlFor="full_name"
                            className="text-sm font-semibold text-gray-900"
                          >
                            Phone Number
                          </label>
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            //value=""
                          />
                        </div>
                        <button
                          onClick={handleDetails}
                          className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Check details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {employeeData ? (
        <div>
          {employeeData ? (
            <div className="w-10/12 mt-10 flex items-start justify-start">
              <ol className="border-l border-neutral-500">
                {employeeData.map((item, index) => (
                  <li key={index}>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500"></div>
                      <p className="text-sm text-gray-800">
                        {item.createdAt.slice(0, 10)}
                      </p>
                    </div>
                    <div className="mb-6 ml-4 mt-2">
                      <h4 className="mb-1.5 text-xl font-semibold">
                        {`Name: ${item.name}`}
                      </h4>
                      <h2 className="mb-1.5 text-xl">
                        {`Designation: ${item.designation}`}
                      </h2>
                      <h2 className="mb-1.5 text-xl">
                        {`Phone: ${item.phone}`}
                      </h2>
                      <h2 className="mb-1.5 text-xl">
                        {`BioID: ${item.bioID}`}
                      </h2>
                      <h2 className="mb-1.5 text-xl">
                        {`Residing Building: ${item.residingBuilding}`}
                      </h2>
                      <h2 className="mb-1.5 text-xl">
                        {`Room Number: ${item.room}`}
                      </h2>
                      <h2 className="mb-1.5 text-xl">
                        {`Paying for the month of: ${item.month}`}
                      </h2>
                      <h2 className="mb-1.5 text-xl">
                        {`Remarks: ${item.remarks}`}
                      </h2>
                      <h2 className="mb-1.5 text-xl">
                        {`Type: ${item.selection}`}
                      </h2>
                      <div className="mb-3 text-neutral-800">
                        {item.selection === "Permanent" ? (
                          <div>
                            <h2 className="mb-1.5 text-xl">
                              {`Electricity fees: ${item.extraData[0]}`}
                            </h2>
                          </div>
                        ) : (
                          <></>
                        )}

                        {item.selection != "Permanent" ? (
                          <div>
                            <h2 className="mb-1.5 text-xl">
                              {`Liscence fees: ${item.extraData[0]}`}
                            </h2>
                            <h2 className="mb-1.5 text-xl">
                              {`Electricity fees: ${item.extraData[1]}`}
                            </h2>
                            <h2 className="mb-1.5 text-xl">
                              {`Others: ${item.extraData[2]}`}
                            </h2>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div>{loading && <Loading />}</div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Timeline;
