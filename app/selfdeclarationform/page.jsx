"use client";

import React, { useState } from "react";

export default function SelfDeclarationForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    relation: "",
    date: "",
    place: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const downloadPDF = () => {
    const printWindow = window.open("", "_blank");

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @media print {
          body { margin: 0; }
          .no-print { display: none !important; }
        }
        body {
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
          margin: 30px 40px;
          color: #000;
        }
        .header {
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .content {
          text-align: justify;
          margin-bottom: 40px;
        }
        .field {
          border-bottom: 1px dotted #000;
          min-width: 150px;
          display: inline-block;
          text-transform: capitalize;
          text-align: center;
            font-weight: bold;
        }
        .footer {
          margin-top: 60px;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .print-btn {
          background: #1e40af;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          margin: 10px;
        }
        .print-btn:hover {
          background: #1e3a8a;
        }
      </style>
    </head>
    <body>
      <div class="no-print">
        <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
        <button class="print-btn" onclick="window.close()" style="background: #dc2626;">❌ Close</button>
      </div>

      <div class="header">SELF DECLARATION FORM – STUDENT</div>

      <div class="content">
        I, <span class="field">${formData.studentName}</span> 
        S/O, D/O, W/O <span class="field">${formData.relation}</span>, 
        declare that the above information furnished by me is correct to the best of my knowledge and belief. 
        I further declare that I will repay the loan amount along with interest applicable within the schedule date. 
        I request you to send the loan amount to the college in which I am presently studying for which I have requested loan.
      </div>

      <div class="footer">
        <div>
          Date: <span class="field">${formData.date}</span><br/>
          Place: <span class="field">${formData.place}</span>
        </div>
        <div style="text-align:right;">
          Signature of Student
        </div>
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
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-lg font-bold text-center mb-6">
          SELF DECLARATION FORM – STUDENT
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Student Name:
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1 capitalize"
              placeholder="Enter student name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Relation (S/O, D/O, W/O):
            </label>
            <input
              type="text"
              name="relation"
              value={formData.relation}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1 capitalize"
              placeholder="Father/Mother/Guardian Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Place:</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1 capitalize"
              placeholder="Enter place"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={downloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
