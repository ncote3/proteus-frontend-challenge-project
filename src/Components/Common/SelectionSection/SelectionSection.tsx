import React, { useState } from "react";
import { ShowAllParameters } from "../../../types";

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
    showAllParameters && showAllParameters.showAllTrigger > options.length;

  const [showAll, setShowAll] = useState<boolean>(false);

  const _renderRadios = (options: string[]) =>
    options.map((option) => (
      <div>
        <input
          type="radio"
          id={option}
          name={title}
          value={option}
          onChange={(e) => setSelection(e.target.value)}
          checked={option === currentSelection}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ));

  const _renderOptions = () => {
    if (options.length === 0) {
      return <div>{placeHolderMessage}</div>;
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
        <div onClick={() => setShowAll(true)}>
          Show all {showAllParameters.showAllText}
        </div>
      );
    }

    if (showAll && isShowAllThresholdMet) {
      showMoreButton = (
        <div onClick={() => setShowAll(false)}>
          Show less {showAllParameters.showAllText}
        </div>
      );
    }

    return showMoreButton;
  };

  return (
    <div>
      <div>{title}</div>
      {_renderOptions()}
      {_renderShowMoreButton()}
    </div>
  );
};

export default SelectionSection;
