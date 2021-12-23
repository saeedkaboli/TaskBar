import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    const date = new Date();
    console.log(date);
    let today = new Date().toLocaleDateString("fa-IR");
    // ------------------------------------------------------------

    // let Day="";
    // if(date.getDay()===1){
    //   return  Day="دوشنبه"
    // }else if(date.getDay()===5){
    //     return Day="جمعه"
    // }

    //------------------------------------------------------------

    return (
      <div id="Header">
        <h1>تسک روزانه</h1>
        <div id="Header-Date">
          <b>روز : </b>{" "}
          {date.getDay() === 1
            ? "دوشنبه"
            : date.getDay() === 2
            ? "سه شنبه"
            : date.getDay() === 3
            ? "چهارشنبه"
            : date.getDay() === 4
            ? "پنج شنبه"
            : date.getDay() === 5
            ? "جمعه"
            : date.getDay() === 6
            ? "شنبه"
            : date.getDay() === 7
            ? "یک شنبه"
            : "Erorr"}
          <br />
          <b>تاریخ :</b> {today}
          <i className="fa fa-list" aria-hidden="true"></i>
        </div>
        <div id="Header-Hour">
          <b>ساعت : </b> {date.getHours()}:{date.getMinutes()}
          <br />
        </div>
      </div>
    );
  }
}
export default Header;
