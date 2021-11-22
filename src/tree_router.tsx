import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Sample1, Sample2 } from "./components/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

export const TreeRouter = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Router>
          <Link to="/">
            <Button variant="contained" color="primary">
              Sample1
            </Button>
          </Link>
          <Link to="/nyumon/sample2">
            <Button variant="contained" color="primary">
              Sample2
            </Button>
          </Link>
          <Route exact path="/" component={Sample1} />
          <Route exact path="/nyumon/sample2" component={Sample2} />
        </Router>
      </div>
    </>
  );
};
