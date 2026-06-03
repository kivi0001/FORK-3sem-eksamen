"use client";

import Image from "next/image";

const tableCapacity = {
  small: 4,
  medium: 6,
  large: 8,
};

const TablesClient = ({
  reserved = [],
  setSelectedTable,
  selectedTable,
}) => {
  const tableImage = {
    small: { url: "/assets/table/table_1.webp" },
    medium: { url: "/assets/table/table_2.webp" },
    large: { url: "/assets/table/table_3.webp" },
  };

  const scrollToBookTableForm = () => {
    const formSection = document.querySelector(
      "#book-table-form",
    );
    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
      });
    }
    const tableInput = document.querySelector(
      "#tableNumber",
    );
    if (tableInput) {
      tableInput.focus();
    }
  };

  const tables = Array.from(
    { length: 15 },
    (_, i) => {
      const tableNumber = i + 1;
      if ([3, 8, 13].includes(tableNumber))
        return {
          number: tableNumber,
          size: "medium",
        };
      if ([5, 10, 15].includes(tableNumber))
        return {
          number: tableNumber,
          size: "large",
        };
      return {
        number: tableNumber,
        size: "small",
      };
    },
  );

  return (
    <section className="mt-medium">
      <h3 className="text-center mb-8 text-(length:--font-h3) font-(--font-weight-book-h2)">
        Please select a table in the section below
      </h3>
      <div className="flex flex-wrap gap-2 justify-evenly">
        <div className="flex gap-2 my-2">
          <div className="border border-gray-500 p-3"></div>
          <p className="text-(length:--font-p) font-home-p tracking-(--letter-spacing-home-track-h3)">
            Available
          </p>
        </div>
        <div className="flex gap-2 my-2">
          <div className="bg-red-950 p-3"></div>
          <p className="text-(length:--font-p) font-home-p tracking-(--letter-spacing-home-track-h3)">
            Reserved
          </p>
        </div>
        <div className="flex gap-2 my-2">
          <div className="bg-green-800 p-3"></div>
          <p className="text-(length:--font-p) font-home-p tracking-(--letter-spacing-home-track-h3)">
            Your choice
          </p>
        </div>
      </div>
      <div className="table-container my-medium">
        {tables.map((table) => (
          <div
            className="relative text-center cursor-pointer"
            key={table.number}
            onClick={() => {
              if (
                reserved.includes(
                  table.number.toString(),
                )
              ) {
                alert(
                  "This table is already booked. Please select an available table.",
                );
                return;
              }
              setSelectedTable({
                number: table.number,
                size: table.size,
                capacity:
                  tableCapacity[table.size],
              });
              scrollToBookTableForm();
            }}
            style={{
              backgroundColor:
                selectedTable?.number ===
                table.number
                  ? "oklch(44.8% 0.119 151.328)"
                  : "transparent",
            }}
          >
            <Image
              src={tableImage[table.size].url}
              alt={`Table ${table.number}`}
              width={300}
              height={200}
              id={table.number.toString()}
              className="table-img"
              style={{
                opacity: reserved.includes(
                  table.number.toString(),
                )
                  ? 0.3
                  : 1,
                background: reserved.includes(
                  table.number.toString(),
                )
                  ? "red"
                  : "none",
              }}
            />
            <p className="booking-number absolute font-bold text-(length:--font-table-p)">
              {table.number}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TablesClient;
