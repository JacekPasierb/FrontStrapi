import React from "react";
interface TittleProps {
  tittle: string;
}
const TitleSection: React.FC<TittleProps> = ({ tittle }) => {
  return (
    <div>
      <h3 className="text-center ">{tittle}</h3>
      <div className="row justify-content-center">
        <div className="col-1">
          <hr className="orangeColor" />
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
