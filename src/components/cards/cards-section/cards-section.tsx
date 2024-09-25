
import { PropsWithChildren } from "react";
const CardsSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container-xl title-m margin-vertical-xl">
      <p className="title-s text-primary margin-vertical-xl">New offers</p>
      {children}
    </div>
  );
}
export default CardsSection;
{/* <Card>
<CardHeader />
<CardContent />
<CardFooter />
</Card> */}