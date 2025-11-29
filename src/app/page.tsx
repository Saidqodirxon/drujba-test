import Concerts from "@/components/layout/Concerts";
import ForKids from "@/components/layout/ForKids";
import Hero from "@/components/layout/Hero";
import LocalEvents from "@/components/layout/LocalEvents";
import NewConcerts from "@/components/layout/News";
import Panarama from "@/components/layout/Panarama";
import PopularProducts from "@/components/layout/PopularProducts";
import SocialCards from "@/components/layout/SocialCards";
import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularProducts />
      <SocialCards />
      <Concerts />
      <ForKids />
      <NewConcerts />
      <Panarama />
      <LocalEvents />
    </>
  );
}
