export function numberFormat(num) {
    return num && num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }