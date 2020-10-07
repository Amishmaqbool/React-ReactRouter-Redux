import React from "react"
import { connect } from "react-redux";
import { amountAdded, setVisiable } from "../redux/actions/addAmmountActions";

function Home(props) {
  const {Amount, changeAmount} = props;
  console.log(Amount)
  return(
   <main>
     <h1>Home</h1>
  <div>Data from redux
    <p>
    Amount data from redux:{Amount.amount}
   </p> 
  
    </div>

    <button onClick = {() => {
      changeAmount(Amount.amount + 1)
    }}>Amount+1 </button>
   </main>
  );


}

const mapStateToProps = (state) => {
  return {
    Amount: state.enterAmount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount: (value)=>{
      dispatch(amountAdded(value))
    },
    modalvisibalityHandler:() =>{
      dispatch(setVisiable())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);


