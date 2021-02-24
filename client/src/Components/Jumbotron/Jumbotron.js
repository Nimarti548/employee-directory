import React from "react";

const Jumbotron = () => {
  const styles = {
    heading: {
      textAlign: "center" 
    }
  }
  return (
  <div className="jumbotron">
<h1 style={styles.heading} >Employee Directory</h1>
  </div>
  )
};

export default Jumbotron;
