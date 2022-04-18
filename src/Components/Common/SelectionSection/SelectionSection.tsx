import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
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
    showAllParameters && showAllParameters.showAllTrigger < options.length;

  const [showAll, setShowAll] = useState<boolean>(false);

  const selectionSectionStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    rowGap: ".75em",
  };
  const titleStyles: React.CSSProperties = {
    fontWeight: "500",
    alignSelf: "flex-start",
    fontSize: "12pt",
  };
  const optionsContainerStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    justifyItems: "start",
    rowGap: ".5em",
  };
  const radioContainerStyles: React.CSSProperties = {};
  const radioStyles: React.CSSProperties = {
    backgroundColor: "white",
  };
  const showMoreStyles: React.CSSProperties = {
    fontSize: "10pt",
    fontWeight: "500",
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: "1em",
  };
  const placeHolderStyles: React.CSSProperties = {
    fontWeight: "300",
    fontSize: "11pt",
  };
  const optionsStyles: React.CSSProperties = {
    fontWeight: "300",
  };
  const selectedOptionStyles: React.CSSProperties = {
    ...optionsStyles,
    fontWeight: "500",
  };

  const _renderRadios = (options: string[]) =>
    options.map((option) => (
      <div style={radioContainerStyles}>
        <input
          type="radio"
          id={option}
          name={title}
          value={option}
          onChange={(e) => setSelection(e.target.value)}
          checked={option === currentSelection}
          style={radioStyles}
        />
        <label
          style={
            option === currentSelection ? selectedOptionStyles : optionsStyles
          }
          htmlFor={option}
        >
          {option}
        </label>
      </div>
    ));

  const _renderOptions = () => {
    if (options.length === 0) {
      return <div style={placeHolderStyles}>{placeHolderMessage}</div>;
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
        <div onClick={() => setShowAll(true)} style={showMoreStyles}>
          <FontAwesomeIcon icon={faAngleDown} />
          <div>Show all {showAllParameters.showAllText}</div>
        </div>
      );
    }

    if (showAll && isShowAllThresholdMet) {
      showMoreButton = (
        <div onClick={() => setShowAll(false)} style={showMoreStyles}>
          <FontAwesomeIcon icon={faAngleUp} />
          <div>Show less {showAllParameters.showAllText}</div>
        </div>
      );
    }

    return showMoreButton;
  };

  return (
    <div style={selectionSectionStyles}>
      <div style={titleStyles}>{title}</div>
      <div style={optionsContainerStyles}>{_renderOptions()}</div>
      {_renderShowMoreButton()}
    </div>
  );
};

export default SelectionSection;
