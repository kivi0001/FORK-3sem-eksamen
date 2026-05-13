import BookTableForm from "@/app/components/booktable/BookTableForm";
import Headline from "@/app/components/Headline";

export default function BookTable() {
  return (
    <main>
      <Headline text="book table" />
      <BookTableForm />
    </main>
  );
}
