import { Component } from "react";
import "./index.css";

const names = [
  "Prajwal Yadav B R",
  "Vijay",
  "Balaji",
  "Dinesh",
  "Sanjeev",
  "Pramodh",
  "Swaroop",
  "karthik",
  "Shuas",
  "Poojeth",
];



class Sample extends Component {
  state = { count: 1,userinputvalue:2};


  // ChangeName = () => {
  //   const { count } = this.state;
  //   if (count === names.length - 1) {
  //     this.setState({ count: 0 });
  //     return;
  //   }
  //   this.setState((prev) => ({ count: prev.count + 1 }));
  // };

  OnChangeNextPage=()=>{
    this.setState(prev=>({count:prev.count+1}))
  }

  OnChangePrevPage=()=>{
    this.setState(prev=>({count:prev.count-1}))
  }

  onChnageSelect=(event)=>{
    this.setState({userinputvalue:+event.target.value})
  }

  render() {
    const { count,userinputvalue } = this.state;
    console.log(count);
    const StartIndex=(count-1)*userinputvalue
    console.log("Check",StartIndex,StartIndex+userinputvalue)
    let Totalpage= Math.ceil(names.length/userinputvalue) 
    console.log("Pages",Totalpage)
    return (
      <div className="MainContainer">
        <div className="subContainer">
          <select className="" onChange={this.onChnageSelect}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
         {names.slice(StartIndex,StartIndex+userinputvalue).map((eachItem,index)=>(
          <p className="" key={index}>{eachItem}</p>
         ))}
          <div className="ButtonFlex">
            
            {count>1 && <button className="button-style" onClick={this.OnChangePrevPage}>
              PrevName
            </button>}
            {count<Totalpage && <button className="button-style" onClick={this.OnChangeNextPage}>
              NextName
            </button>}
          </div>
        </div>
      </div>
    );
  }
}
export default Sample;
