import { useState } from "react";
import Button from "../components/Button/Button";
import { Box, Center } from "@chakra-ui/react";
import Input from "../components/Input/Input";
import AlertUi from "../components/Alert/Alert";
import "./index.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState(0);
  const [showErrorAlert, setErrorShowAlert] = useState(false);
  const [showSuccessAlert, setSuccessShowAlert] = useState("");

  const handleChange = (event:any) => {
    setErrorShowAlert(false);
    setSuccessShowAlert("");
    setValue(event.target.value);
  };

  const clickButton = (action:any) => {
    if (value == "" && action != "reset") {
      setErrorShowAlert(true);
      setSuccessShowAlert("");
      return;
    }
    if (action == "add") {
      setDisplayValue((number:any) => parseInt(number) + parseInt(value));
      setSuccessShowAlert("Number Added Succesfully");
      setValue("");
    } else if (action == "subb") {
      setDisplayValue((number:any) => parseInt(number) - parseInt(value));
      setSuccessShowAlert("Number Substracted succesfully");
      setValue("");
    } else if (action == "reset") {
      setDisplayValue(0);
      setSuccessShowAlert("Number reset successfull");
      setValue("");
    }
  };

  return (
    <>
      {showErrorAlert && (
        <AlertUi status="error" style="error">
          No number entered
        </AlertUi>
      )}
      {showSuccessAlert != "" && (
        <AlertUi status="success" style="success">
          {showSuccessAlert}
        </AlertUi>
      )}
      <Center fontSize="50px">{displayValue}</Center>
      <Input
        placeholder="Enter number"
        size="small"
        onChange={handleChange}
        type="number"
        value={value}
      />

      <Box display="flex">
        <Button variant="success" onClick={() => clickButton("add")}>
          Add
        </Button>
        <Button variant="danger" onClick={() => clickButton("subb")}>
          Substract
        </Button>
        <Button variant="primary" onClick={() => clickButton("reset")}>
          Reset
        </Button>
      </Box>
    </>
  );
}
