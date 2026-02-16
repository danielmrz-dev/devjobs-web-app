import { useRef } from "react";
import { useForm } from "react-hook-form";
import location from "../../assets/desktop/icon-location.svg";
import search from "../../assets/desktop/icon-search-white.svg";
import filter from "../../assets/mobile/icon-filter.svg";
import "./Filter.scss";

export const Filter = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const form = useForm();

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div>
      <form className="filter" {...form}>
        <input
          type="text"
          className="filter__input"
          placeholder="Filter by title"
        />
        <button
          className="filter__filter-btn"
          type="button"
          onClick={openModal}
        >
          <img src={filter} alt="" />
        </button>
        <button className="filter__search-btn" type="submit">
          <img src={search} alt="" />
        </button>
      </form>

      <dialog className="dialog" ref={modalRef}>
        <div className="dialog__container">
          <div className="dialog__location-filter">
            <img
              src={location}
              alt=""
              className="dialog__location-filter-icon"
            />
            <input
              type="text"
              placeholder="Filter by location"
              className="dialog__location-filter-input"
            />
          </div>
          <div className="dialog__divider"></div>
          <label htmlFor="contract" className="dialog__contract-label">
            <input
              type="checkbox"
              name="contract"
              id="contract"
              className="dialog__contract-filter"
            />
            Full time only
          </label>
          <button className="dialog__button" onClick={closeModal}>
            Search
          </button>
        </div>
      </dialog>
    </div>
  );
};
