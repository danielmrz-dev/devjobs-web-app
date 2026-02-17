import { useContext, useMemo, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import location from "../../assets/desktop/icon-location.svg";
import search from "../../assets/desktop/icon-search-white.svg";
import filter from "../../assets/mobile/icon-filter.svg";
import { JobsContext } from "../../contexts/jobs-context";
import { useJobs } from "../../hooks/useJobs";
import type { FilterForm } from "../../types/filter-form.interface";
import "./Filter.scss";

export const Filter = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { setJobs } = useContext(JobsContext);
  const { data: allJobs } = useJobs();
  const form = useForm<FilterForm>();
  const { register, watch, handleSubmit, reset, resetField } = form;
  const positionValue = watch("position") ?? "";
  const locationValue = watch("location") ?? "";
  const contractValue = watch("contract") ?? "";

  const locations = useMemo(() => {
    const locSet = new Set<string>();
    allJobs?.forEach((job) => locSet.add(job.location));
    return locSet;
  }, [allJobs]);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const onSubmitFilters = () => {
    const pos = positionValue.toString().trim();
    const loc = locationValue.toString().trim();
    const fullTimeOnly = contractValue ?? false;
    const source = allJobs ?? [];

    setJobs(() => {
      let filtered = source;

      if (pos.length > 0) {
        filtered = filtered.filter((job) =>
          job.position.toLowerCase().includes(pos.toLowerCase()),
        );
      }

      if (loc.length > 0) {
        filtered = filtered.filter((job) =>
          job.location.toLowerCase().includes(loc.toLowerCase()),
        );
      }

      if (fullTimeOnly) {
        filtered = filtered.filter((job) => job.contract === "Full Time");
      }

      return filtered;
    });
    modalRef.current?.close();
  };

  const onResetFilters = () => {
    resetField("location");
    resetField("position");
    resetField("contract");
    reset();
  };

  return (
    <FormProvider {...form}>
      <div>
        <form className="filter" onSubmit={handleSubmit(onSubmitFilters)}>
          <input
            type="text"
            className="filter__input"
            placeholder="Filter by title"
            {...register("position")}
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
              <select
                className="dialog__location-filter-input"
                aria-placeholder="Teste"
                {...register("location")}
              >
                <option
                  selected
                  disabled
                  className="dialog__location-filter-option"
                >
                  Select a country
                </option>
                {Array.from(locations).map((location) => {
                  return (
                    <option
                      value={location}
                      className="dialog__location-filter-option"
                    >
                      {location}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="dialog__divider"></div>
            <label htmlFor="contract" className="dialog__contract-label">
              <input
                type="checkbox"
                id="contract"
                className="dialog__contract-filter"
                {...register("contract")}
              />
              Full time only
            </label>
            <button className="dialog__button" onClick={onSubmitFilters}>
              Search
            </button>
          </div>
        </dialog>
      </div>
    </FormProvider>
  );
};
