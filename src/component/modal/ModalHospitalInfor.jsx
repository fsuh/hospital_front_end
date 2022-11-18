import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { close_modal } from "../../redux/reducer/modalReducer";
import BtnBook from "../button/BtnBook";

export default function ModalHospitalInfor() {
  const { modal, infor } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  return (
    modal && (
      <div className="absolute h-screen w-full z-50">
        <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-lg" role="alert">
          <div className="items-center sm:flex">
            <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 text-white">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <p className="mt-3 text-lg font-medium sm:mt-0 sm:ml-3">Information : {infor.hospitalName}</p>
          </div>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
          </p>
          <div className="mt-6 sm:flex">
            <BtnBook id={infor.id} message={"Booking"}></BtnBook>
            <button
              className="mt-3 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:ml-3 sm:w-auto"
              onClick={() => {
                dispatch(close_modal());
              }}
            >
              close
            </button>
          </div>
        </div>
      </div>
    )
  );
}
