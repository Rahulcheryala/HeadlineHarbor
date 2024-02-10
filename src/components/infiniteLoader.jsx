import React, { Component } from "react";
import { spinner } from "../assets/assets";

export class loader extends Component {
  render() {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-center items-center w-full my-4 ">
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
