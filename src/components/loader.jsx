import React, { Component } from "react";
import { spinner } from "../assets/images/images";

export class loader extends Component {
  render() {
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={spinner}
            alt="..."
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
      </div>
    );
  }
}

export default loader;
