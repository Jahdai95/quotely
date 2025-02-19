import { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddQuote from "../../containers/addQuote/addQuote";

function Title(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
    >
      <h1 className="fontSize-lg quicksand-200">Citando citas</h1>
      <Tooltip title="Agregar cita" placement="left">
        <IconButton
          data-testid="button-add-quote"
          color="primary"
          size="large"
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>

      <AddQuote open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}

export default Title;
