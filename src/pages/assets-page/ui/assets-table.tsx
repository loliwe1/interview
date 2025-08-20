import { TableComponent } from "./table-component";

export const AssetsTable = () => {
  return (
    <div className="Table-container">
      <h1> Assets Table</h1>

      <TableComponent data={[]} priceMap={{}}></TableComponent>
    </div>
  );
};
