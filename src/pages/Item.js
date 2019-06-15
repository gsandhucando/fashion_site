import React from "react";

const Item = (props) => {
  console.log(props)
  return (
    <div>
      <h4>route params{props.match.params.id}</h4>
    </div>
  )
}

export default Item;