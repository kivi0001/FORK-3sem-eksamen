import ContactForm from "@/app/components/contact/ContactForm";
import Headline from "@/app/components/Headline";
import Header from "@/app/components/Header";
export default function Contact() {
  return (
    <main>
      <Header />
      <Headline text="contact us" />
      <ContactForm />
    </main>
  );
}
