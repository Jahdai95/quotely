import { useState } from "react";
import { Box, TextField, IconButton, Tooltip } from "@mui/material";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import ListQuotes from "../listQuotes/listQuotes";

function SearchQuote(): React.JSX.Element {
  const [quouteToFind, setQuoteToFind] = useState("");

  const onChange = (value: string) => {
    setQuoteToFind(value);
  };

  return (
    <>
      <Box display={"flex"}>
        <TextField
          slotProps={{
            htmlInput: {
              "data-testid": "input-search-quote",
            },
          }}
          sx={{ margin: "4px" }}
          placeholder="Escribe para buscar una cita"
          variant="outlined"
          fullWidth
          value={quouteToFind}
          onChange={(event) => onChange(event.target.value)}
        />
        <Tooltip title="Limpiar" placement="bottom">
          <IconButton
            data-testid="button-clear-input"
            color="primary"
            onClick={() => setQuoteToFind("")}
          >
            <NotInterestedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <ListQuotes quotetoFind={quouteToFind} />
    </>
  );
}

export default SearchQuote;
