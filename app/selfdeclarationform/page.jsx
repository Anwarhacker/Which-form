"use client";

import React from "react";

export default function VTUResultPage() {
  const studentInfo = {
    usn: "3DG22CS011",
    name: "ANWARPATEL",
    semester: "6",
  };

  const subjects = [
    {
      code: "BCS601",
      name: "CLOUD COMPUTING",
      internal: 37,
      external: 23,
      total: 60,
    },
    {
      code: "BCS602",
      name: "MACHINE LEARNING",
      internal: 34,
      external: 31,
      total: 65,
    },
    {
      code: "BCS685",
      name: "PROJECT PHASE I",
      internal: 96,
      external: 0,
      total: 96,
    },
    {
      code: "BCSL606",
      name: "MACHINE LEARNING LAB",
      internal: 38,
      external: 41,
      total: 79,
    },
    {
      code: "BNSK658",
      name: "NATIONAL SERVICE SCHEME",
      internal: 91,
      external: 0,
      total: 91,
    },
    {
      code: "BIKS609",
      name: "INDIAN KNOWLEDGE SYSTEM",
      internal: 73,
      external: 0,
      total: 73,
    },
    {
      code: "BAI654D",
      name: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE",
      internal: 40,
      external: 44,
      total: 84,
    },
    { code: "BCSL657D", name: "DEVOPS", internal: 39, external: 45, total: 84 },
    {
      code: "BCS613D",
      name: "ADVANCED JAVA",
      internal: 37,
      external: 33,
      total: 70,
    },
  ];

  // Auto calculate result (P/F based on total >= 35)
  const getResult = (total) => (total >= 35 ? "P" : "F");

  const downloadPDF = () => {
    const printWindow = window.open("", "_blank");

    const tableRows = subjects
      .map(
        (s) => `
        <tr>
          <td>${s.code}</td>
          <td>${s.name}</td>
          <td>${s.internal}</td>
          <td>${s.external}</td>
          <td>${s.total}</td>
          <td>${getResult(s.total)}</td>
        </tr>
      `
      )
      .join("");

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 30px; }
          h1, h2, h3 { text-align: center; margin: 5px 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th, td { border: 1px solid #000; padding: 6px; text-align: center; font-size: 12px; }
          th { background: #f0f0f0; }
          .no-print { margin-bottom: 10px; text-align: center; }
          .btn { background: #1e40af; color: white; padding: 8px 16px; border-radius: 5px; cursor: pointer; border: none; }
          .btn:hover { background: #1e3a8a; }
          .footer { margin-top: 20px; font-size: 11px; line-height: 1.5; }
          .note { margin-top: 10px; font-size: 11px; }
          .sign { margin-top: 20px; text-align: right; font-weight: bold; }
        </style>
      </head>
      <body>
        <div style="text-align:center; margin-bottom:10px;">
          <img src="/vtu-logo.png" alt="VTU Logo" style="height:90px; width:90px;"/>
        </div>

        <h1>📘 VTU Result 2025</h1>
        <h2>ವಿ.ವಿ. ಪದವಿ / ಸ್ನಾತಕೋತ್ತರ ಪದವಿ ಪರೀಕ್ಷೆಯ ತಾತ್ಕಾಲಿಕ ಫಲಿತಾಂಶ ಜೂನ್ / ಜುಲೈ-೨೦೨೫</h2>
        <h3>VTU PROVISIONAL RESULTS OF UG / PG June / July-2025 EXAMINATION</h3>

        <p><strong>University Seat Number:</strong> ${studentInfo.usn}</p>
        <p><strong>Student Name:</strong> ${studentInfo.name}</p>
        <p><strong>Semester:</strong> ${studentInfo.semester}</p>

        <table>
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Subject Name</th>
              <th>Internal</th>
              <th>External</th>
              <th>Total</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>

        <div class="footer">
          <p><strong>📄 Nomenclature / Abbreviations:</strong></p>
          <p>P → PASS &nbsp;&nbsp; F → FAIL &nbsp;&nbsp; A → ABSENT &nbsp;&nbsp; W → WITHHELD &nbsp;&nbsp; X, NE → NOT ELIGIBLE</p>
        </div>

        <div class="note">
          <p><strong>Note:</strong></p>
          <p>1) Results of some subjects of some students are not appearing due to reasons such as,</p>
          <p>&nbsp;&nbsp;a) CIE not Available</p>
          <p>&nbsp;&nbsp;b) SEE not Available</p>
          <p>because of technical reasons etc, however they will be updated shortly.</p>
          <p>2) Withheld results to be announced later.</p>
        </div>

        <div class="sign">
          ಕುಲಸಚಿವರು (ಮೌಲ್ಯಮಾಪನ)<br/>
          REGISTRAR (EVALUATION)<br/>
          ಸಹಿ/- Sd/-
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 text-black">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header with Logo */}
        <div className="text-center mb-6">
          <img
            src="/vtu-logo.png"
            alt="VTU Logo"
            className="h-20 w-20 mx-auto mb-2"
          />
          <h1 className="text-2xl font-bold">📘 VTU Result 2025</h1>
          <h2 className="text-base text-gray-700">
            ವಿ.ವಿ. ಪದವಿ / ಸ್ನಾತಕೋತ್ತರ ಪದವಿ ಪರೀಕ್ಷೆಯ ತಾತ್ಕಾಲಿಕ ಫಲಿತಾಂಶ ಜೂನ್ /
            ಜುಲೈ-೨೦೨೫
          </h2>
          <h3 className="text-base">
            VTU PROVISIONAL RESULTS OF UG / PG June / July-2025 EXAMINATION
          </h3>
        </div>

        {/* Student Info */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <p>
            <strong>University Seat Number:</strong> {studentInfo.usn}
          </p>
          <p>
            <strong>Student Name:</strong> {studentInfo.name}
          </p>
          <p>
            <strong>Semester:</strong> {studentInfo.semester}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-2">Subject Code</th>
                <th className="border p-2">Subject Name</th>
                <th className="border p-2">Internal</th>
                <th className="border p-2">External</th>
                <th className="border p-2">Total</th>
                <th className="border p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((s, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border p-2 text-center">{s.code}</td>
                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2 text-center">{s.internal}</td>
                  <td className="border p-2 text-center">{s.external}</td>
                  <td className="border p-2 text-center font-bold">
                    {s.total}
                  </td>
                  <td
                    className={`border p-2 text-center font-semibold ${
                      getResult(s.total) === "P"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {getResult(s.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-xs text-gray-700">
          <p>
            <strong>📄 Nomenclature / Abbreviations:</strong>
          </p>
          <p>
            P → PASS &nbsp;&nbsp; F → FAIL &nbsp;&nbsp; A → ABSENT &nbsp;&nbsp;
            W → WITHHELD &nbsp;&nbsp; X, NE → NOT ELIGIBLE
          </p>

          <div className="mt-4">
            <p>
              <strong>Note:</strong>
            </p>
            <p>
              1) Results of some subjects of some students are not appearing due
              to reasons such as,
            </p>
            <p>&nbsp;&nbsp;a) CIE not Available</p>
            <p>&nbsp;&nbsp;b) SEE not Available</p>
            <p>
              because of technical reasons etc, however they will be updated
              shortly.
            </p>
            <p>2) Withheld results to be announced later.</p>
          </div>

          <div className="mt-6 text-right font-semibold">
            ಕುಲಸಚಿವರು (ಮೌಲ್ಯಮಾಪನ) <br />
            REGISTRAR (EVALUATION) <br />
            ಸಹಿ/- Sd/-
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-6">
          <button
            onClick={downloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
