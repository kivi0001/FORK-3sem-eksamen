"use client";

const TableClick = ({
  children,
  tableNumber,
}) => {
  return (
    <div
      className="relative text-center cursor-pointer"
      onClick={() => {
        const selectedTable =
          document.querySelector("#tableNumber");
        if (selectedTable) {
          selectedTable.value = tableNumber;
        }
      }}
    >
      {children}
    </div>
  );
};

export default TableClick;
