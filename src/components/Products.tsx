import { useState } from "react";

// картинки продуктов
const productImages: Record<string, string[]> = {
    "Aluminium Picture Frames": [
        "/assets/alumPikcher1.jpg",
        "/assets/alumPikcher2.jpg",
        "/assets/alumPikcher3.jpg",
        "/assets/alumPikcher4.jpg",
    ],
    "Wooden Picture Frames": [
        "/assets/woodShelvs1.jpg",
        "/assets/woodShelvs2.jpg",
        "/assets/woodShelvs3.jpg",
        "/assets/woodShelvs4.jpg",
    ],
    "Wooden Wall Hooks": [
        "/assets/WoodenWallHooks1.jpg",
        "/assets/WoodenWallHooks2.jpg",
        "/assets/WoodenWallHooks3.jpg",
        "/assets/WoodenWallHooks4.jpg",
    ],
    "Wooden Wall Shelves": [
        "/assets/WoodenWallShelves1.jpg",
        "/assets/WoodenWallShelves2.jpg",
        "/assets/WoodenWallShelves3.jpg",
        "/assets/WoodenWallShelves4.jpg",
    ],
};

// описания продуктов
const productDescriptions: Record<string, string> = {
    "Aluminium Picture Frames":
        "TRANSFORM YOUR SPACE - Elevate your decor with our chic, modern floating shelves that ooze elegance. Your walls will never look the same, turning every head that walks through your door.",
    "Wooden Picture Frames":
        "Classic Design! Because of its classy appearance, you'll be able to enhance your photos easily and transform them into true artwork. These frames make whatever you framing feel professional without breaking the bank for a custom frame.",
    "Wooden Wall Hooks":
        "Mid-Century Modern Decor — These decorative wall hooks showcase neutral white powder-coated metal with gorgeous natural walnut blocks revealing its own character of knots and natural wood grain, making each hook a little different but equally stunning.",
    "Wooden Wall Shelves":
        "High-quality wooden picture frames with a smooth natural finish, built for durability and everyday use. A simple, elegant way to showcase your photos and artwork.",
};

export default function Products() {
    // по умолчанию открыта первая кнопка
    const [selected, setSelected] = useState<keyof typeof productImages>(
        "Aluminium Picture Frames"
    );

    return (
        <section className="section light">
            <h2>Our Products</h2>
            <ul className="products">
                {Object.keys(productImages).map((product) => (
                    <li
                        key={product}
                        onClick={() => setSelected(product)}
                        className={selected === product ? "active" : ""}
                    >
                        {product}
                    </li>
                ))}
            </ul>

            {selected && (
                <div className="product-preview">
                    <p>{productDescriptions[selected]}</p>
                    {productImages[selected].map((img, idx) => (
                        <img key={idx} src={img} alt={`${selected} ${idx + 1}`} />
                    ))}
                </div>
            )}
        </section>
    );
}

