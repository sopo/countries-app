import { lazy, Suspense } from "react";
import Loading from "@/components/loading/loading";

const Banner = lazy(() => import("../../components/banner"));
const CardsSection = lazy(() => import("../../components/cards/section"));
const CardContainer = lazy(() => import("../../components/cards/container"));
const CardContent = lazy(() => import("../../components/cards/content"));
const CardHeader = lazy(() => import("../../components/cards/header"));
const CardFooter = lazy(() => import("../../components/cards/footer"));

const country = {
  name: "Tajikistan",
  population: 10590927,
  capital: "Dushanbe",
};
const DefaultHome: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<Loading title="section"/>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<Loading title="section"/>}>
        <CardsSection>
          <CardContainer>
            <CardHeader />
            <CardContent country={country} />
            <CardFooter />
          </CardContainer>
        </CardsSection>
      </Suspense>
    </div>
  );
};
export default DefaultHome;
