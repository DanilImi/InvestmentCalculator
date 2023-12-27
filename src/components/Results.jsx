import { calculateInvestmentResults } from "../util/investment";

export const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  console.log("Results  resultsData:", resultsData);
  return <div>Results...</div>;
};
