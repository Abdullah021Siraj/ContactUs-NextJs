import ContactForm from "../app/components/ContactForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />
    </>
  );
}
