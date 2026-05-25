import ContactForm from "@/app/components/contact/ContactForm";
import Headline from "@/app/components/Headline";
import Header from "@/app/components/Header";
export default function Contact() {
  return (
    <main>
      <div className="sticky-container">
        <Header />
      </div>
      <Headline text="contact us" />
      <ContactForm />
    </main>
  );
}
