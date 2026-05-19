"use client";

const TableClick = ({
  children,
  tableNumber,
  reserved,
}) => {
  return (
    <div
      className="relative text-center cursor-pointer"
      /* AI HELPED WITH THIS SYNTAX: */
      onClick={() => {
        if (reserved.includes(tableNumber)) {
          alert("This table is already booked.");
          return;
        }
        const selectedTable =
          document.querySelector("#tableNumber");
        if (selectedTable) {
          selectedTable.value = tableNumber;
        }
      }}
      /* ************************** */
    >
      {children}
    </div>
  );
};

export default TableClick;
