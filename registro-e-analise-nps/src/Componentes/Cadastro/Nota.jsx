//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import "../../Style/Nota.scss";

//react
import { React } from "react";

const Nota = () => {
  return (
    <div>
      <ToggleButtonGroup type="radio" name="options" defaultValue={10}>
        <ToggleButton id="tbg-radio-1" className="radio-button" value={1}>
          1
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" className="radio-button" value={2}>
          2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" className="radio-button" value={3}>
          3
        </ToggleButton>
        <ToggleButton id="tbg-radio-4" className="radio-button" value={4}>
          4
        </ToggleButton>
        <ToggleButton id="tbg-radio-5" className="radio-button" value={5}>
          5
        </ToggleButton>
        <ToggleButton id="tbg-radio-6" className="radio-button" value={6}>
          6
        </ToggleButton>
        <ToggleButton id="tbg-radio-7" className="radio-button" value={7}>
          7
        </ToggleButton>
        <ToggleButton id="tbg-radio-8" className="radio-button" value={8}>
          8
        </ToggleButton>
        <ToggleButton id="tbg-radio-9" className="radio-button" value={9}>
          9
        </ToggleButton>
        <ToggleButton id="tbg-radio-10" className="radio-button" value={10}>
          10
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
export default Nota;
