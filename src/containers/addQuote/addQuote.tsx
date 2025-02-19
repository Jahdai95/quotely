import { useState } from "react";
import Modal from "../../components/modal/modal";
import { TextField } from "@mui/material";
import { addStorage } from "../../utils/storage";
import { useQuoteContext } from "../../providers/quotes.provider";

interface IDialogProps {
  open: boolean;
  handleClose: () => void;
}

function AddQuote(props: IDialogProps): React.JSX.Element {
  const { open, handleClose } = props;
  const [quote, setQuote] = useState("");
  const { updateStorageData } = useQuoteContext();

  const onSave = () => {
    addStorage(`${Date.now()}`, quote);
    updateStorageData();
    handleClose();
    setQuote("");
  };

  const onChange = (value: string) => {
    setQuote(value);
  };

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title="Agregar cita"
      onSave={onSave}
    >
      <TextField
        slotProps={{
          htmlInput: {
            "data-testid": "input-add-quote",
          },
        }}
        placeholder="Escribe tu cita aquí"
        variant="outlined"
        fullWidth
        multiline
        minRows={4}
        value={quote}
        onChange={(event) => onChange(event.target.value)}
      />
    </Modal>
  );
}
export default AddQuote;
