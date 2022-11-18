import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BtnBook(props) {
  const { id, message } = props;

  return (
    <button className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto">
      <Link to={`${id}`}>{message}</Link>
    </button>
  );
}
