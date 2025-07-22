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
        className={`
    bg-[#FDF8F3]
    bg-no-repeat
    bg-center
    bg-cover
    relative
    z-10
    bg-[url('/images/hero.svg')] 
    md:bg-[url('/images/allbg.svg')]
  `}
      >
        <div className="container mx-auto flex flex-col w-full px-3 lg:px-5 relative z-20 pb-20">
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
