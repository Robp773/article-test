import React from "react";
import { useRouteData } from "react-static";
import { Link } from 'components/Router'

export default function Test() {
  const { test } = useRouteData();
  return (
    <ul>
      {test.map((item, index)=>{
          return (
              <li key={index}>   
                <Link to={`/test/${item.data.slug}`}>{item.data.title}</Link>
              </li>
          )
      })}
    </ul>
  );
}