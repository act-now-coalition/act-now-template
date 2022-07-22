import { Box, Container } from "@mui/material";
import { LegendThreshold } from "@actnowcoalition/ui-components";

interface Item {
  value: number;
  label: string;
  color: string;
}

const width = 300;
const height = 40;
const barHeight = 20;

const items: Item[] = [
  { value: 10, label: "10", color: "#90BE6D" },
  { value: 20, label: "20", color: "#F9C74F" },
  { value: 30, label: "30", color: "#F8961E" },
  { value: 40, label: "40", color: "#E16420" },
  { value: 50, label: "50", color: "#A10003" },
];

const getItemValue = (item: Item) => item.value;
const getItemColor = (item: Item) => item.color;
const getItemLabel = (item: Item) => item.label;

const Homepage: React.FC = () => {
  return (
    <Container>
      Homepage
      <Box>
        <svg width={width} height={height}>
          <LegendThreshold
            items={items}
            width={width}
            height={height}
            barHeight={barHeight}
            borderRadius={barHeight / 2}
            getItemValue={getItemValue}
            getItemColor={getItemColor}
            getItemLabel={getItemLabel}
          />
        </svg>
      </Box>
    </Container>
  );
};

export default Homepage;
