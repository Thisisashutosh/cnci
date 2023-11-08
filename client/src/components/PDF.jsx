import React, { useState, useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 5,
  },
  companyInfo: {
    flexDirection: "row",
    textAlign: "right",
    marginBottom: 20,
  },
  companyInfo2: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  companyName: {
    fontSize: 12,
    textAlign: "right",
    fontWeight: "bold",
  },
  userData: {
    marginLeft: 30,
    padding: 5,
    width: "55%",
  },
  reportData: {
    marginLeft: 30,
    padding: 5,
    width: "30%",
  },
  dataSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  extraDataSection: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  data: {
    fontSize: 14,
    marginLeft: 10,
  },
  text: {
    fontSize: 12,
  },
  table: {
    display: "table",
    width: "auto",
    border: "2pt solid #000",
  },
  row: {
    flexDirection: "row",
    // borderBottom: "1pt solid #000",
  },
  cell: {
    flex: 1,
    padding: 10,
  },
});

const PDFDocument = ({ data }) => {
  const displayData = JSON.parse(data);
  const {
    name,
    designation,
    phone,
    bioID,
    residingBuilding,
    room,
    month,
    remarks,
    selection,
    extraData,
    reportNumber,
  } = {
    ...displayData,
  };
  const imageUrl = "../../logo.png";

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch(imageUrl)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        const bytes = new Uint8Array(arrayBuffer);
        const base64Image = btoa(String.fromCharCode(...bytes));
        setImageData(base64Image);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentDay = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${currentDay}-${currentMonth}-${currentYear}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Top Section: Company Information */}
        <View style={styles.section}>
          <View style={styles.companyInfo}>
            {/* Logo */}
            {imageData && (
              <Image src="../../logo.png" style={styles.logo} />
            )}

            {/* Company Name */}
            <View style={styles.companyInfo2}>
              <Text style={styles.companyName}>
                CHITTARANJAN NATIONAL CANCER INSTITUTE
              </Text>
              <Text style={styles.companyName}>
                An Autonomous Body under Ministry of Health & Family Welfare
                Govt. of India
              </Text>
              <Text style={styles.companyName}>
                Newtown, Action Area 1, Kolkata 700160
              </Text>
              <Text style={styles.companyName}>
                Email: cncinstkol@gmail.com, Website: www.cnci.org.in
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.reportData}>
          <View style={styles.dataSection}>
            <Text style={styles.heading}>Report No.:</Text>
            <Text style={styles.data}>{reportNumber}</Text>
          </View>
        </View>

        {/* ... (rest of your code) */}
        <View style={styles.userData}>
          <View style={styles.dataSection}>
            <Text style={styles.heading}>Name:</Text>
            <Text style={styles.data}>{name}</Text>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.heading}>Designation:</Text>
            <Text style={styles.data}>{designation}</Text>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.heading}>Phone Number:</Text>
            <Text style={styles.data}>{phone}</Text>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.heading}>BiometricID:</Text>
            <Text style={styles.data}>{bioID}</Text>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.heading}>Residing Building:</Text>
            <Text style={styles.data}>{residingBuilding}</Text>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.heading}>Room Number:</Text>
            <Text style={styles.data}>{room}</Text>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.heading}>Paying for the month of:</Text>
            <Text style={styles.data}>{month}</Text>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.heading}>Employee Type:</Text>
            <Text style={styles.data}>{selection}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text>Fees Breakdown:</Text>

          {selection === "Permanent" ? (
            <View style={styles.table}>
              <View style={{ ...styles.row, borderBottom: "1pt solid #000" }}>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Fee Type</Text>
                </View>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Amount</Text>
                </View>
                <View style={styles.cell}>
                  <Text>Remarks</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Electricity Fees</Text>
                </View>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>INR {extraData[0]}</Text>
                </View>
                <View style={{ ...styles.cell, borderBottom: 0 }}>
                  <Text>{remarks}</Text>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}

          {selection != "Permanent" ? (
            <View style={styles.table}>
              <View style={{ ...styles.row, borderBottom: "1pt solid #000" }}>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Fee Type</Text>
                </View>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Amount</Text>
                </View>
                <View style={styles.cell}>
                  <Text>Remarks</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Liscence Fees</Text>
                </View>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>INR {extraData[0]}</Text>
                </View>
                <View style={{ ...styles.cell, borderBottom: 0 }}>
                  <Text>{remarks}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Electricity Fees</Text>
                </View>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>INR {extraData[1]}</Text>
                </View>
                <View style={{ ...styles.cell, borderBottom: 0 }}>
                  <Text></Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>Others</Text>
                </View>
                <View style={{ ...styles.cell, borderRight: 2 }}>
                  <Text>INR {extraData[2]}</Text>
                </View>
                <View style={styles.cell}>
                  <Text></Text>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>

        <View style={styles.section}>
          <Text>Date: {formattedDate}</Text>
        </View>

        <View style={styles.section}>
          <Text>
            This is a computer generated bill, hence need no signature
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
