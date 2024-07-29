import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Gaya offers a rich array of traditional dishes, including Litti Chokha, Pitha, Khaja, Tilkut, Ghugni, Sattu Paratha, and Kala Jamun, each showcasing local flavors and culinary expertise cherished by its residents and visitors alike. These dishes range from savory roasted wheat-flour balls to sweet sesame-based treats, reflecting Gaya's diverse culinary heritage!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
