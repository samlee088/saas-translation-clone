import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center p-10">
      <LoadingSpinner />
    </div>
  );
}

export default loading;
