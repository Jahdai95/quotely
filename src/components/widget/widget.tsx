import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchQuote from "../../containers/searchQuote/searchQuote";
import Title from "../title/title";

function Widget(): React.JSX.Element {
  return (
    <Box sx={{ padding: "20px", flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Title />
          <SearchQuote />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Widget;
