const Card = ({ product }) => {
    return (
      <div className="card-box">
        <img className="card-img" src={product.thumbnail} alt={product.title} />
        <h4>{product.title}</h4>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
      </div>
    );
  }

export default Card;
