import "./Products.css";
import Card from "./Card";

export default function Products() {
  return (
    <section id="products">
      <h1>Products</h1>

      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        repellendus commodi ad eos reprehenderit adipisci. Totam nesciunt
        consequuntur, in tempora perferendis dolorem officia vel aliquam optio
        fugit doloribus, sed reprehenderit, iusto impedit. Similique harum fugit
        sint, aperiam totam, obcaecati ut eius quisquam nulla voluptas enim,
        nostrum dicta veritatis numquam. Culpa.
      </p>
      <br />
      <a href="./src/assets/Menue.pdf" download target="blank">
        PDF Download
      </a>
      <Card/>
    </section>
  );
}