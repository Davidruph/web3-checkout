import Footer from "@/components/Footer";
import PricingPlan from "@/components/PricingPlan";
import Invoicing from "@/components/Invoicing";
import Developer from "@/components/Developer";
import Why from "@/components/Why";
import GenerateInvoice from "@/components/GenerateInvoice";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <section
        className="bg-[#FDF8F3] bg-no-repeat bg-center bg-contain relative pb-8 z-99"
        style={{ backgroundImage: "url('/images/hero.svg')" }}
      >
        <div className="container mx-auto flex flex-col w-full px-3 md:px-5 lg:px-8">
          <Nav />
          <Hero />
        </div>
      </section>

      <GenerateInvoice />
      <Why />
      <Invoicing />
      <PricingPlan />
      <Developer />
      <Footer />
    </>
  );
}
