import { Direction } from "../../../types/Direction";

export interface IShipPartProps {
  isBow: boolean;
  markAsHit: boolean;
  direction?: Direction;
  color?: string;
  onGotHit?: () => void;
  children?: React.ReactNode;
}
