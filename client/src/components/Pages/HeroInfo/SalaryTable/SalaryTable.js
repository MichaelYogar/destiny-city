import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CityContext } from "../../../../context/reducers/cityReducer";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const SalaryTable = () => {
  const classes = useStyles();
  const [{ city, salaries }, dispatchToCity] = useContext(CityContext);
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(salaries).length === 0) {
      history.push("/");
    }
  }, [salaries, history]);

  return (
    <Card>
      <CardContent>
        <h1>Salaries in {city}</h1>
      </CardContent>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Positions</TableCell>
                <TableCell align="right">25th Percentile</TableCell>
                <TableCell align="right">50th Percentile</TableCell>
                <TableCell align="right">75th Percentile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(salaries).length ? (
                salaries.data.map((salary) => (
                  <TableRow key={salary.job.title}>
                    <TableCell component="th" scope="row">
                      {salary.job.title}
                    </TableCell>
                    <TableCell align="right">
                      ${salary.salary_percentiles.percentile_25.toFixed(2)}
                    </TableCell>
                    <TableCell align="right">
                      ${salary.salary_percentiles.percentile_50.toFixed(2)}
                    </TableCell>
                    <TableCell align="right">
                      ${salary.salary_percentiles.percentile_75.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <div>Nothing</div>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
export default SalaryTable;
