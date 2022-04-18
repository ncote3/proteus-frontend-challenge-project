import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { ShowAllParameters } from "../../../types";
import "./styles.css";

interface Props {
  options: string[];
  currentSelection: string;
  setSelection: (selection: string) => void;
  placeHolderMessage?: string;
  title: string;
  showAllParameters?: ShowAllParameters;
}

const SelectionSection = (props: Props) => {
  const {
    options,
    currentSelection,
    setSelection,
    placeHolderMessage,
    title,
    showAllParameters,
  } = props;

  const isShowAllThresholdMet =
    showAllParameters && showAllParameters.showAllTrigger < options.length;

  const [showAll, setShowAll] = useState<boolean>(false);

  const _renderRadios = (options: string[]) =>
    options.map((option) => (
      <div className="options__container" key={`div-${option}`}>
        <input
          type="radio"
          id={option}
          name={title}
          value={option}
          onChange={(e) => setSelection(e.target.value)}
          checked={option === currentSelection}
          className="radio__container"
        />
        <label
          className={
            option === currentSelection
              ? "options__element--selected"
              : "options__element"
          }
          htmlFor={option}
        >
          {option}
        </label>
      </div>
    ));

  const _renderOptions = () => {
    if (options.length === 0) {
      return <div className="placeholder">{placeHolderMessage}</div>;
    }

    if (isShowAllThresholdMet) {
      if (!showAll) {
        return _renderRadios(
          options.slice(0, showAllParameters.showAllTrigger)
        );
      }
    }

    return _renderRadios(options);
  };

  const _renderShowMoreButton = () => {
    let showMoreButton = <></>;

    if (!showAll && isShowAllThresholdMet) {
      showMoreButton = (
        <div onClick={() => setShowAll(true)} className="show_more">
          <FontAwesomeIcon icon={faAngleDown} />
          <div>Show all {showAllParameters.showAllText}</div>
        </div>
      );
    }

    if (showAll && isShowAllThresholdMet) {
      showMoreButton = (
        <div onClick={() => setShowAll(false)} className="show_more">
          <FontAwesomeIcon icon={faAngleUp} />
          <div>Show less {showAllParameters.showAllText}</div>
        </div>
      );
    }

    return showMoreButton;
  };

  return (
    <div className="selection_section">
      <div className="title">{title}</div>
      <div className="options__container">{_renderOptions()}</div>
      {_renderShowMoreButton()}
    </div>
  );
};

export default SelectionSection;
