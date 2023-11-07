import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import PDFDocument from "./PDF";

const Contractual = ({ data, setData }) => {
  const [moduleData, setmoduleData] = useState([]);

  const handlechange = (e, index) => {
    const newValue = e.target.value;
    const updatedData = [...moduleData];
    updatedData[index] = newValue;
    setmoduleData(updatedData);
    setData({ ...data, selection: "Contractual", extraData: updatedData });
    // console.log("handlechange called");
    // console.log(newValue);
  };

  const generatePDF = async (data) => {
    const body = data;
    console.log(body);
    // await axios
    //   .post(`${import.meta.env.VITE_APP_SERVER_URL}/api/employee/data`, body)
    //   .then((res) => {
    //     if (res.data.status === "error") toast.error(res.data.message);
    //     else {
    //       data.reportNumber = res.data.reportNumber;
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    import("@react-pdf/renderer").then((module) => {
      const { PDFViewer, PDFDownloadLink } = module;
      const { Document } = module.default;

      const PDFViewerComponent = () => (
        <PDFViewer className="w-full h-screen">
          <PDFDocument data={JSON.stringify(data)} />
        </PDFViewer>
      );

      render(
        <>
          <PDFViewerComponent />
        </>,
        document.getElementById("root")
      );
    });
  };

  return (
    <div className="flex w-full items-end justify-between">
      <div className="flex flex-col items-start justify-between gap-5">
        <div className="md:col-span-1 text-start">
          <label
            htmlFor="electricity_bill"
            className="text-sm font-semibold text-gray-900"
          >
            Liscence Fees
          </label>
          <input
            onChange={(e) => handlechange(e, 0)}
            type="text"
            name="zipcode"
            id="electricity_bill"
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            // placeholder=""
            // value=""
          />
        </div>

        <div className="md:col-span-1 text-start">
          <label
            htmlFor="electricity_bill"
            className="text-sm font-semibold text-gray-900"
          >
            Electricity fees
          </label>
          <input
            onChange={(e) => handlechange(e, 1)}
            type="text"
            name="zipcode"
            id="electricity_bill"
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            // placeholder=""
            // value=""
          />
        </div>

        <div className="md:col-span-1 text-start">
          <label
            htmlFor="electricity_bill"
            className="text-sm font-semibold text-gray-900"
          >
            Others
          </label>
          <input
            onChange={(e) => handlechange(e, 2)}
            type="text"
            name="zipcode"
            id="electricity_bill"
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            // placeholder=""
            // value=""
          />
        </div>
      </div>

      <button
        onClick={() => generatePDF(data)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Print
      </button>
    </div>
  );
};

export default Contractual;
