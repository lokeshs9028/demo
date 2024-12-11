import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart1 from "../../components/BarChart1";

const Bar1 = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart1 />
      </Box>
    </Box>
  );
};

export default Bar1;
