/** @format */

import { FaArrowRight, FaCheck } from "react-icons/fa";
import PressEnter from "./shared/PressEnter";
import { useState } from "react";
import EmptyData from "./shared/EmptyData";
const FullAddress = () => {
  const [error, setError] = useState({});

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    const address2 = e.target.address2.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const zip = e.target.zip.value;
    const country = e.target.country.value;

    const fullAddress = { address, address2, city, state, zip, country };

    if (!address || !city || !state || !zip || !country) {
      setError({
        err: "Please fill this in",
        address,
        city,
        state,
        zip,
        country,
      });
    } else {
      setError({ err: null });
    }
    console.log(error);
  };

  return (
    <div className="center-section">
      <div className="md:w-3/5 mx-auto">
        <h2 className="text-2xl capitalize font-normal center gap-3">
          <span className="sub-title">
            7 <FaArrowRight className="text-sm" />
          </span>
          Full address*
        </h2>
        <form
          onSubmit={handleAddressSubmit}
          className="ml-4 space-y-6 pb-10 pt-4"
        >
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Address*</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              className="input input-bordered w-full "
            />
            {error?.err && !error?.address && (
              <div className="md:w-1/2 pt-2">
                <EmptyData message={error?.err} />
              </div>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Address line 2</span>
            </label>
            <input
              type="text"
              name="address2"
              placeholder="Your address"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">City/Town*</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="Your City"
              className="input input-bordered w-full "
            />
            {error?.err && !error?.city && (
              <div className="md:w-1/2 pt-2">
                <EmptyData message={error?.err} />
              </div>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">State/Region/Province*</span>
            </label>
            <input
              type="text"
              name="state"
              placeholder="Your State"
              className="input input-bordered w-full "
            />
            {error?.err && !error?.state && (
              <div className="md:w-1/2 pt-2">
                <EmptyData message={error?.err} />
              </div>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Zip/Post code *</span>
            </label>
            <input
              type="text"
              placeholder="12345"
              name="zip"
              className="input input-bordered w-full "
            />
            {error?.err && !error?.zip && (
              <div className="md:w-1/2 pt-2">
                <EmptyData message={error?.err} />
              </div>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Country*</span>
            </label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="input input-bordered w-full "
            />
            {error?.err && !error?.country && (
              <div className="md:w-1/2 pt-2">
                <EmptyData message={error?.err} />
              </div>
            )}
          </div>
          <div className="center gap-3">
            <button type="submit" className="ok-btn center gap-2">
              Ok <FaCheck />
            </button>
            <PressEnter />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FullAddress;
