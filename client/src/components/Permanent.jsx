import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import PDFDocument from "./PDF";

const Permanent = ({ data, setData, toast }) => {
  const [moduleData, setmoduleData] = useState();

  const handlechange = (e) => {
    const newValue = e.target.value;
    const arrayData = newValue.split(",");
    setmoduleData(newValue);
    setData({ ...data, selection: "Permanent", extraData: arrayData });
    // console.log("handlechange called");
  };

  const generatePDF = async (data) => {
    const body = data;
    console.log(body);
    // await axios
    //   .post(`${import.meta.env.VITE_APP_SERVER_URL}/api/employee/data`, body)
    //   .then((res) => {
    //     if (res.data.status === "error") toast.error(res.data.message);
    //     else {
    //       toast.success(res.data.message);
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
      <div className="md:col-span-1 text-start">
        <label
          htmlFor="electricity_bill"
          className="text-sm font-semibold text-gray-900"
        >
          Electricity bill
        </label>
        <input
          onChange={handlechange}
          type="text"
          name="electricity_bill"
          id="electricity_bill"
          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        />
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

export default Permanent;
