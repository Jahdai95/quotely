import { Box, Alert } from "@mui/material";
import { useQuoteContext } from "../../providers/quotes.provider";
import CardItem from "../../components/cardItem/cardItem";
import { deleteItem } from "../../utils/storage";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

interface IListQuotesProps {
  quotetoFind: string;
}

function ListQuotes(props: IListQuotesProps): React.JSX.Element {
  const { quotetoFind } = props;
  const { quotesData, updateStorageData } = useQuoteContext();

  const filteredQuotes = quotesData.filter((item) => {
    return item.value.toLowerCase().includes(quotetoFind.toLowerCase());
  });

  const quotesToRender =
    filteredQuotes.length > 0 ? filteredQuotes : quotesData;

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={2}
      marginTop={2}
    >
      {quotesToRender.map((item) => {
        return (
          <CardItem
            id={item.key}
            key={item.key}
            quote={item.value}
            handleDelete={() => {
              deleteItem(item.key);
              updateStorageData();
            }}
          />
        );
      })}
      {quotesToRender.length === 0 && (
        <Alert icon={<PriorityHighIcon />} severity="info">
          <p className="quicksand-200">
            No hay citas para mostrar agregá alguna 😜
          </p>
        </Alert>
      )}
    </Box>
  );
}
export default ListQuotes;
