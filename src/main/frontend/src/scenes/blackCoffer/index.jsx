import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Data = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "endYear", headerName: "END YEAR" },
    {
      field: "topic",
      headerName: "TOPICS",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "sector",
      headerName: "SECTOR",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "region",
      headerName: "REGION",
      flex: 1,
    },
    {
      field: "pestle",
      headerName: "PESTLE",
      flex: 1,
    },
    {
      field: "source",
      headerName: "SOURCE",
      flex: 1,
    },
    {
      field: "swot",
      headerName: "SWOT",
      flex: 1,
    },
    {
      field: "country",
      headerName: "COUNTRY",
      flex: 1,
    },
    {
      field: "city",
      headerName: "CITY",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="BLACKCOFFER DATA"
        subtitle="List of data for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Data;
