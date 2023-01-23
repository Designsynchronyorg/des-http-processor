import React from "react";

const ProcessHttpMessage = ({ response, type }: any) => {
  // set message type
  type processedType = {
    type?: string;
    description?: any;
    data?: any;
    response?: any;
  };

  let processed: processedType = {};
  // if successfully
  if (type === "success") {
    // if(response)
    processed.type = "success";
    processed.description = response.data.message;
    // set data
    // if array
    if (Array.isArray(response.data.data)) {
      processed.data =
        response.data.data.length > 1
          ? response.data.data
          : response.data.data[0];
      // if object
    } else if (typeof response.data.data === "object") {
      if (response.data.data) {
        let keys = Object.keys(response.data.data);
        processed.data =
          keys.length > 1 ? response.data.data : response.data.data[keys[0]];
      }
      // else
    } else {
      processed.data = response.data.data;
    }
    // else
  } else {
    processed.type = "error";
    processed.description = response.data.message;
  }
  processed.response = response;

  return processed;
};

export default ProcessHttpMessage;
