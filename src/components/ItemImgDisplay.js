import React from 'react';

const styles = {
  image: {
    height: 100,
    width: '100%'
  }
}

const ItemImgDisplay = ({items}) => {


  let front = items.map(img => {
    return <img style={styles.image} src={img.frontImg}/>
  })
  let side = items.map(img => {
    return <img style={styles.image} src={img.sideImg}/>
  })
  let back = items.map(img => {
    return <img style={styles.image} src={img.backImg}/>
  })
  return (
    <section style={{position: 'flex'}}>
      <aside style={{height: '540px', width: 200}}>
        <ul>
          {front}
          {side}
          {back}
        </ul>
      </aside>

    </section>
  )
}

export default ItemImgDisplay;