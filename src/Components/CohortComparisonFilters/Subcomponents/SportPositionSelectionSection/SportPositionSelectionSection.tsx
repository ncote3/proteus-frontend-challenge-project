import React from "react";
import { Sport } from "../../../../types";
import SelectionSection from "../../../Common/SelectionSection/SelectionSection";
import "./styles.css";

interface Props {
  sportsList: Sport[];
  selectedSport: string;
  selectedPosition: string;
  updateSelectedSport: (sport: string) => void;
  updateSelectedPosition: (position: string) => void;
}

const SportPositionSelectionSection = (props: Props) => {
  const {
    sportsList,
    selectedSport,
    selectedPosition,
    updateSelectedSport,
    updateSelectedPosition,
  } = props;

  const _renderSportSelection = () => (
    <SelectionSection
      title="Sport"
      options={["All", ...sportsList.map((sport) => sport.name)]}
      currentSelection={selectedSport}
      setSelection={updateSelectedSport}
      showAllParameters={{
        showAllText: "sports",
        showAllTrigger: 12,
      }}
    />
  );

  const _renderPositionSelection = () => {
    const [currentSportObject] = sportsList.filter(
      (sport) => sport.name === selectedSport
    );

    return (
      <SelectionSection
        title="Position"
        options={currentSportObject?.positions || []}
        currentSelection={selectedPosition}
        setSelection={updateSelectedPosition}
        placeHolderMessage="Select a sport first"
      />
    );
  };

  return (
    <div className="sport_position_selection_section__container">
      {_renderSportSelection()}
      {_renderPositionSelection()}
    </div>
  );
};

export default SportPositionSelectionSection;
