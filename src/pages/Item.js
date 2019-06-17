import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ItemImgDisplay from '../components/ItemImgDisplay';
import ItemDiscDisplay from '../components/ItemDiscDisplay';
const ChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-around'
    // background: 'red'
  },
  button: {
    height: 50,
    width: 130,
    margin: 10
  },
  mainImg: {
    height: 300,
    width: 300
  }
}


const Item = props => {
  let [id, setId ] = useState(null)
  useEffect(() => {
    let id = props.match.params.id

    setId(id)
  }, []);

  console.log(props)
  return (
    <div style={styles.item}>
      {/* <h4>route params{props.match.params.id}</h4> */}
      <button style={styles.button}>{ChevronLeft} back</button>
      <ItemImgDisplay id={id} items={props.location.state.menu}/>
      <ItemDiscDisplay id={id} items={props.location.state}/>
    </div>
  );
};

export default Item;
