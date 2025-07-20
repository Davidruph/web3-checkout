import Footer from "@/components/Footer";
import PricingPlan from "@/components/PricingPlan";
import Invoicing from "@/components/Invoicing";
import Developer from "@/components/Developer";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Why />
      <Invoicing />
      <PricingPlan />
      <Developer />
      <Footer />
    </>
  );
}
