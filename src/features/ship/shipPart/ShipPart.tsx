import { CSSProperties } from "react";
import { IShipPartProps } from "./IShipPartProps";
import styles from "./ShipPart.module.css";

export const ShipPart: React.FC<IShipPartProps> = (props) => {
  const cssStyles = {
    "--shipPartColor": props.color ?? "black",
  } as CSSProperties;

  const getDirection = () =>{
    if(props.isBow){
        
    }
  }

  return (
    <div className={`${styles.shipPart} ${getDirection()}`} style={cssStyles}>
      {props.children}
    </div>
  );
};
