import { lazy, Suspense } from "react";
import Loading from "@/components/loading/loading";
import countries from "../../components/cards/static-data/cards-data";
const Banner = lazy(() => import("../../components/banner"));
const CardsSection = lazy(() => import("../../components/cards/section"));
const CardContainer = lazy(() => import("../../components/cards/container"));
const CardContent = lazy(() => import("../../components/cards/content"));
const CardHeader = lazy(() => import("../../components/cards/header"));
const CardFooter = lazy(() => import("../../components/cards/footer"));

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
            <CardContent country={countries[0]} />
            <CardFooter />
          </CardContainer>

          <CardContainer>
            <CardHeader />
            <CardContent country={countries[1]} />
            <CardFooter />
          </CardContainer>

          <CardContainer>
            <CardHeader />
            <CardContent country={countries[2]} />
            <CardFooter />
          </CardContainer>


        </CardsSection>
      </Suspense>
    </div>
  );
};
export default DefaultHome;
