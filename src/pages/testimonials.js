import React from "react";
import { useRouteData } from "react-static";
import { Link } from 'components/Router'

export default function Testimonials() {
  const { testimonials } = useRouteData();
  console.log(testimonials);
  return (
      <div>TESTIMONIALS</div>
    // <ul>
    //   {testimonials.map((item, index)=>{
    //       return (
    //         <div>{item}</div>
    //       )
    //   })}
    // </ul>
  );
}