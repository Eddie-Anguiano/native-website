import React from 'react';
import Cookies from "js-cookie";

const internaltraffic = () => {
  Cookies.set('isee', 'you');

  return null;
}

export default internaltraffic;