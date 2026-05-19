import Image from "next/image";
import { ReservationsFetch } from "./ReservationsFetch";

const Tables = async ({ eventId }) => {
  /* AI HELPED WITH THIS */
  const reserved = await ReservationsFetch({
    eventId,
  });
  /*  ****************** */
  return (
    <section>
      <div className="table-container mb-(--spacing-large)">
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 1"
            width={300}
            height={200}
            id="1"
            className="table-img"
            style={{
              opacity: reserved.includes("1")
                ? 0.3
                : 1,
              background: reserved.includes("1")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            1
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 2"
            id="2"
            width={400}
            height={200}
            style={{
              opacity: reserved.includes("2")
                ? 0.3
                : 1,
              background: reserved.includes("2")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            2
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_2.png"
            alt="Table 3"
            id="3"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("3")
                ? 0.3
                : 1,
              background: reserved.includes("3")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            3
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 4"
            id="4"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("4")
                ? 0.3
                : 1,
              background: reserved.includes("4")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            4
          </p>
        </div>
        <div className="relative">
          <Image
            src="/assets/table/table_3.png"
            alt="Table 5"
            id="5"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("5")
                ? 0.3
                : 1,
              background: reserved.includes("5")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute  text-center text-(length:--font-table-p)">
            5
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 6"
            id="6"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("6")
                ? 0.3
                : 1,
              background: reserved.includes("6")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            6
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 7"
            id="7"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("7")
                ? 0.3
                : 1,
              background: reserved.includes("7")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            7
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_2.png"
            alt="Table 8"
            id="8"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("8")
                ? 0.3
                : 1,
              background: reserved.includes("8")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            8
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 9"
            id="9"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("9")
                ? 0.3
                : 1,
              background: reserved.includes("9")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            9
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_3.png"
            alt="Table 10"
            id="10"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("10")
                ? 0.3
                : 1,
              background: reserved.includes("10")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            10
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 11"
            id="11"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("11")
                ? 0.3
                : 1,
              background: reserved.includes("11")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            11
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 12"
            id="12"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("12")
                ? 0.3
                : 1,
              background: reserved.includes("12")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            12
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_2.png"
            alt="Table 13"
            id="13"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("13")
                ? 0.3
                : 1,
              background: reserved.includes("13")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            13
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_1.png"
            alt="Table 14"
            id="14"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("14")
                ? 0.3
                : 1,
              background: reserved.includes("14")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            14
          </p>
        </div>
        <div className="relative text-center">
          <Image
            src="/assets/table/table_3.png"
            alt="Table 15"
            id="15"
            width={200}
            height={100}
            style={{
              opacity: reserved.includes("15")
                ? 0.3
                : 1,
              background: reserved.includes("15")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            15
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tables;
