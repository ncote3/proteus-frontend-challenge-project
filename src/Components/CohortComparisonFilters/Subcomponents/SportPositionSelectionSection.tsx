import React from "react";
import { Sport } from "../../../types";
import SelectionSection from "../../Common/SelectionSection/SelectionSection";

interface Props {
  sportsList: Sport[];
}

const SportPositionSelectionSection = (props: Props) => {
  const { sportsList } = props;

  const _renderSportSelection = () => (
    <SelectionSection
      selection={[]}
      setSelection={function (selection: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

  const _renderPositionSelection = () => (
    <SelectionSection
      selection={[]}
      setSelection={function (selection: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

  return (
    <div>
      {_renderSportSelection()}
      {_renderPositionSelection()}
    </div>
  );
};

export default SportPositionSelectionSection;
