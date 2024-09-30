import Item from "./Item";


const FoodItems = ({items}) => {  
    return (
        <>
            <ul className='list-group'>
                {items.map((itemss) => (
                   <Item key={items} foodItems={itemss}></Item>
                ))}
            </ul>
        </>
    );
}

export default FoodItems;