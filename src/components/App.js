import React,{useState} from 'react'
const allitems1=[
    {
        id:1,
        title:"buttermilk pancakes",
        category:"breakfast",
        price:15.99,
        img:"https://www.allrecipes.com/thmb/6J1kUO2YkWc1Y6F6b0ZxX1f0kLA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/682907-056c6f5d3dfd4d3a9b8e3f3f6e4f6a8e.jpg",   },
    {
        id:2,
        title:"diner double",   
        category:"breakfast",
        price:13.99,
        img:"https://www.allrecipes.com/thmb/3yX0bX3p3b7kU5h3Q1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228293-diner-double-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {
        id:3,
        title:"godzilla milkshake",
        category:"breakfast",
        price:6.99,
        img:"https://www.allrecipes.com/thmb/7Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {
        id:4,   
        title:"briyani",
        category:"lunch",   
        price:22.99,
        img:"https://www.allrecipes.com/thmb/8Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {
        id:5,
        title:"pizza",
        category:"lunch",
        price:18.99,
        img:"https://www.allrecipes.com/thmb/9Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {
        id:6,
        title:"burger",
        category:"lunch",
        price:12.99,
        img:"https://www.allrecipes.com/thmb/10Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {
        id:7,
        title:"oreo shake",
        category:"shakes",  
        price:7.99,
        img:"https://www.allrecipes.com/thmb/11Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {   
        id:8,
        title:"banana shake",
        category:"shakes",  
        price:6.99,
        img:"https://www.allrecipes.com/thmb/12Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {
        id:9,   
        title:"strawberry shake",
        category:"shakes",
        price:7.49,
        img:"https://www.allrecipes.com/thmb/13Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    },
    {
        id:10,  
        title:"chocolate shake",
        category:"shakes",
        price:8.49,
        img:"https://www.allrecipes.com/thmb/14Jt5vX1F2v6Jg5k8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219164-godzilla-milkshake-4x3-1-2000-4c9f5e1f3dfd4d3a9b8e3f3f6e4f6a8e.jpg",
    }
];
const App = () => {
    const [items, setItems] = useState([]);
    const allitems=()=>{
        setItems(()=>[...allitems1]);
    }
    const breakfast=()=>{
        setItems(()=>{
            return allitems1.filter((item)=>item.category==="breakfast");
        });
    }
    const lunch=()=>{
        setItems(()=>{
            return allitems1.filter((item)=>item.category==="lunch");
        });
    }   
    const shakes=()=>{
        setItems(()=>{
            return allitems1.filter((item)=>item.category==="shakes");
        });
    }
  return (
    <div id='main'>
        <h1>Our Menu</h1>
        <div className='menu-item'>
            <button id='filter-btn-0' onClick={allitems}>All</button>
            <button id='filter-btn-1' onClick={breakfast}>Breakfast</button>
            <button id='filter-btn-2' onClick={lunch}>Lunch</button>
            <button id='filter-btn-3' onClick={shakes}>Shakes</button>   
        </div>
        <div id='menu-list'>
            {
                items.map((item)=>{ 
                    return(
                        <div className='menu-item' key={item.id} data-test-id={`menu-item-${item.category}`}>
                            <img src={item.img} alt={item.title}/>
                            <div className='item-info'>
                                <div className='item-header'>   
                                    <h4>{item.title}</h4>
                                    <h4 className='item-price'>${item.price}</h4>
                                </div>  
                                <div className='item-text'>
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default App