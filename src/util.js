function getPrice(p) {
  let ret = '';
  if (p.lp) {
    ret = '$'+p.lp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  }
  return ret;
}

export {getPrice};