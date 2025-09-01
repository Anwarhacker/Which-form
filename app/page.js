"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-10 text-center max-w-md w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            VTU Forms Portal
          </h1>
          <p className="text-gray-600">
            Access your examination and declaration forms
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/vtuexamform")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            📝 VTU Exam Form
          </button>

          <button
            onClick={() => router.push("/selfdeclarationform")}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            ✍️ Self Declaration Form
          </button>

          <button
            onClick={() => router.push("/parentdeclaration")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            👨‍👩‍👧‍👦 Parent Declaration Form
          </button>
          <button
            onClick={() => router.push("/indemnitybond")}
            className="w-full bg-pink-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            indemnity Bond Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
