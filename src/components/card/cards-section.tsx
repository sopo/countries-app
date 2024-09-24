import Card from "./Card";
import CardHeader from "./card-header/CardHeader";
import CardContent from "./card-content/card-content";
import CardFooter from "./card-footer/card-footer";
export default function CardsSection() {
  return (
    <div className="container-xl title-m margin-vertical-xl">
      <p className="title-s text-primary margin-vertical-xl">New offers</p>
      <Card>
        <CardHeader />
        <CardContent />
        <CardFooter />
      </Card>
    </div>
  );
}
