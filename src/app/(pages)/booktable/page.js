import BookTableForm from "@/app/components/booktable/BookTableForm";
import Headline from "@/app/components/Headline";
import Tables from "@/app/components/booktable/Tables";

export default function BookTable() {
  return (
    <main>
      <Headline text="book table" />
      <Tables />
      <BookTableForm />
    </main>
  );
}
