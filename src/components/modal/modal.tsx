import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";

interface IDialogProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children: React.ReactNode;
  onSave: () => void;
}

function Modal(props: IDialogProps): React.JSX.Element {
  const { open, handleClose, children, title, onSave } = props;
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "right",
          padding: "0 20px 24px",
        }}
      >
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={onSave}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default Modal;
