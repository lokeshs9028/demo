import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geo Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geo;
