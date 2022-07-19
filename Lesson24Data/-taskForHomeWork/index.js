const getDiff = (staffDate, endDate) => {
  const firstDate = new Date(staffDate);
  const secondDate = new Date(endDate);
  const timeDiff = Math.abs(firstDate - secondDate);

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDiff / (1000 * 60 * 60)) - days * 24;
  const minutes =
    Math.floor(timeDiff / (1000 * 60)) - days * 24 * 60 - hours * 60;
  const seconds =
    Math.floor(timeDiff / 1000) -
    minutes * 60 -
    hours * 60 * 60 -
    days * 24 * 60 * 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// test Data
// console.log(new Date());
let time = new Date();
time = new Date();
time.setDate(30);
time.setHours(24);
time.setMinutes(59);
time.setSeconds(59);
console.log(getDiff(new Date(), time));
