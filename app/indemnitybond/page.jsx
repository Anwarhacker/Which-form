"use client";

import React, { useState } from "react";

export default function IndemnityBondForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    studentAddress: "",
    admissionYear: "",
    course: "",
    cetNumber: "",
    neetNumber: "",
    parentName: "",
    parentAge: "",
    parentAadhaar: "",
    parentAddress: "",
    loanAmount: "",
    loanAmountWords: "",
    witness1: "",
    witness2: "",
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
        .sub-header {
          text-align: right;
          font-size: 13px;
          margin-bottom: 10px;
        }
        .content {
          text-align: justify;
          margin-bottom: 40px;
        }
        .field {
          border-bottom: 1px dotted #000;
          min-width: 150px;
          display: inline-block;
          text-align: center;
          text-transform: capitalize;
          font-weight: bold;
        }
        .footer {
          margin-top: 60px;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .witness {
          margin-top: 40px;
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

      <div class="sub-header">Rs.50 Stamp Paper and Notary</div>
      <div class="header">INDEMNITY BOND (Agreement: I)</div>

      <div class="content">
        I, <span class="field">${formData.studentName}</span>, aged about 
        <span class="field">${formData.studentAge}</span> years residing at 
        <span class="field">${formData.studentAddress}</span>, seeking to get admission under KEA, 
        in the year <span class="field">${formData.admissionYear}</span>, for the course of 
        <span class="field">${formData.course}</span>, hereby agree to submit the Indemnity Bond and abide by the terms and conditions of KMDC to seek ARIVU education loan. <br/><br/>

        My CET number is <span class="field">${formData.cetNumber}</span>, NEET number is 
        <span class="field">${formData.neetNumber}</span>.<br/><br/>

        I, <span class="field">${formData.parentName}</span>, aged about 
        <span class="field">${formData.parentAge}</span> years, with Aadhaar number 
        <span class="field">${formData.parentAadhaar}</span>, residing at 
        <span class="field">${formData.parentAddress}</span>, am the parent/guardian to the beneficiary, herein referred as Guarantor / Indemnifier, and I hereby guarantee to repay the loan of Rs. 
        <span class="field">${formData.loanAmount}</span> /- (Rupees <span class="field">${formData.loanAmountWords}</span> Only) 
        if the student fails to do so (as per the terms and conditions mentioned by KMDC).<br/><br/>

        Whereas both the parties in bond jointly and severally made and executed this indemnity bond in favour of the Managing Director, Karnataka Minorities Development Corporation, 39-821, 2nd Floor, KMDC BHAVAN, Subedhar Chatra Road, Seshadripuram, Bengaluru – 560020. Hereinafter referred as “Corporation”.
      </div>

      <div class="witness">
        Witness:<br/><br/>
        1. <span class="field">${formData.witness1}</span><br/>
        2. <span class="field">${formData.witness2}</span>
      </div>

      <div class="footer">
        <div>(Candidate / Applicant)</div>
        <div>(Parent / Guardian)</div>
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
          INDEMNITY BOND (Agreement: I)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            placeholder="Student Name"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1 capitalize"
          />
          <input
            type="number"
            name="studentAge"
            value={formData.studentAge}
            onChange={handleInputChange}
            placeholder="Student Age"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="studentAddress"
            value={formData.studentAddress}
            onChange={handleInputChange}
            placeholder="Student Address"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1 col-span-2"
          />
          <input
            type="text"
            name="admissionYear"
            value={formData.admissionYear}
            onChange={handleInputChange}
            placeholder="Admission Year"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            placeholder="Course (BE/B.Arch/MBBS/BDS/AYUSH)"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="cetNumber"
            value={formData.cetNumber}
            onChange={handleInputChange}
            placeholder="CET Number"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="neetNumber"
            value={formData.neetNumber}
            onChange={handleInputChange}
            placeholder="NEET Number"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleInputChange}
            placeholder="Parent/Guardian Name"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="number"
            name="parentAge"
            value={formData.parentAge}
            onChange={handleInputChange}
            placeholder="Parent Age"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="parentAadhaar"
            value={formData.parentAadhaar}
            onChange={handleInputChange}
            placeholder="Parent Aadhaar No"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="parentAddress"
            value={formData.parentAddress}
            onChange={handleInputChange}
            placeholder="Parent Address"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1 col-span-2"
          />
          <input
            type="text"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleInputChange}
            placeholder="Loan Amount (Rs.)"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="loanAmountWords"
            value={formData.loanAmountWords}
            onChange={handleInputChange}
            placeholder="Loan Amount in Words"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="witness1"
            value={formData.witness1}
            onChange={handleInputChange}
            placeholder="Witness 1"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
          <input
            type="text"
            name="witness2"
            value={formData.witness2}
            onChange={handleInputChange}
            placeholder="Witness 2"
            className="border-b border-gray-400 focus:border-blue-500 outline-none pb-1"
          />
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
