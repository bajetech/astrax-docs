import React, { useState } from "react";
import { getNetwork } from "@bajetech/astrax-api";
import { PlaygroundInput } from "./basics/inputs";

export const GetNetworkDemo = () => {
  const [networkResult, setNetworkResult] = useState("");

  const btnHandler = async () => {
    let network;
    let error = "";

    try {
      network = await getNetwork();
    } catch (e) {
      error = e;
    }

    setNetworkResult(network || error);
  };

  return (
    <section>
      <div>
        What network is AstraX using?
        <PlaygroundInput readOnly value={networkResult} />
      </div>
      <button type="button" onClick={btnHandler}>
        Get Network
      </button>
    </section>
  );
};
