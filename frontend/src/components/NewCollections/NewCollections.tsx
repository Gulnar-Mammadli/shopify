import "./NewCollections.css";
import new_collections from "../../assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((collection, i) => {
          return (
            <Item
              key={i}
              id={collection.id}
              image={collection.image}
              name={collection.name}
              new_price={collection.new_price}
              old_price={collection.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
