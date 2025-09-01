"use client";
import React, { useState } from "react";

export default function ParentDeclarationForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    relation: "",
    guardianOf: "",
    aadhaar: "",
    studentName: "",
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

      <div class="header">SELF DECLARATION FORM – PARENT/GUARDIAN</div>

      <div class="content">
        Mr. / Mrs. / Ms. <span class="field">${formData.parentName}</span> 
        Son / Wife / Daughter of <span class="field">${formData.guardianOf}</span>,
        I hereby declare that,
        <br/><br/>
        1. My Aadhaar No is <span class="field">${formData.aadhaar}</span><br/>
        2. My family income does not exceed Rs. 8 lakhs per annum from all sources.<br/>
        3. The loan amount availed by my Son/Daughter 
        <span class="field">${formData.studentName}</span> along with the interest applicable 
        will be repaid by me or my son/daughter/ward within scheduled date.
      </div>

      <div class="footer">
        <div>
          Date: <span class="field">${formData.date}</span><br/>
          Place: <span class="field">${formData.place}</span>
        </div>
        <div style="text-align:right;">
          Signature of Parent/Guardian
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
          SELF DECLARATION FORM – PARENT/GUARDIAN
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Parent/Guardian Name:
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1"
              placeholder="Enter parent/guardian name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Guardian Of (Father/Mother):
            </label>
            <input
              type="text"
              name="guardianOf"
              value={formData.guardianOf}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1"
              placeholder="Enter guardian's parent name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Aadhaar No:
            </label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1"
              placeholder="Enter Aadhaar number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Student (Son/Daughter) Name:
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1"
              placeholder="Enter student's name"
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
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none bg-transparent pb-1"
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
