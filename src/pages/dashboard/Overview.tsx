import Carousel from "./components/Carousel";
import OverViewGrid from "./components/OverViewGrid";

export default function Overview() {
  return (
    <main className="max-h-full">
      <Carousel />
      <OverViewGrid/>
    </main>
  );
}
