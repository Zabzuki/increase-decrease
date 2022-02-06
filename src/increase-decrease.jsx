import { Button, Typography } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";

export default function IncreaseDecrease() {
  const [count, setCount] = React.useState(0);

  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "30% 0",
    },
  }));

  const styles = useStyles();

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleNull = () => {
    if (count > 0) {
      setCount(0);
    }
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Button
          onClick={handleIncrease}
          variant="outlined"
          style={{ margin: 10 }}
        >
          Increment
        </Button>
        <Button
          onClick={handleDecrease}
          variant="outlined"
          color="secondary"
          style={{ margin: 10 }}
        >
          Decrement
        </Button>
        <Button
          onClick={handleNull}
          variant="outlined"
          color="error"
          style={{ margin: 10 }}
        >
          Null
        </Button>
      </div>

      <Typography variant="h2" component="div" onChange={handleChange}>
        {count}
      </Typography>
    </div>
  );
}
