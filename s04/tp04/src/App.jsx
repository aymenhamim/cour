import Product from "./Product";
const products = [
  {
    id: 1,
    title: "PC Portable Gamer HP VICTUS",
    price: "7490 DH",
    thumbnail: "HP16D0195NF.jpg",
  },
  {
    id: 2,
    title: "PC Portable Gamer HP VICTUS",
    price: "2190 DH",
    thumbnail: "HP14424U3EA.jpg",
  },
  {
    id: 3,
    title: "Pc Portable Chromebook Acer",
    price: "3640 DH",
    thumbnail: "NXATHEF002.jpg",
  },
  {
    id: 4,
    title: "PC Portable - HUAWEI",
    price: "1270 DH",
    thumbnail: "HUA6901443442959.jpg",
  },
];

function App() {
  return (
    <>
      <li>
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}{" "}
      </li>
    </>
  );
}

export default App;
