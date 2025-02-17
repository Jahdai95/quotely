import { Card, CardContent, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface ICardItemProps {
  quote: string;
  handleDelete: () => void;
  id: string;
}

function CardItem(props: ICardItemProps): React.JSX.Element {
  const { quote, handleDelete, id } = props;

  return (
    <Card variant="outlined" key={id}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflowWrap: "anywhere",
        }}
      >
        <p className="quicksand-200">{quote}</p>
        <IconButton aria-label="delete" color="primary" onClick={handleDelete}>
          <ClearIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default CardItem;
