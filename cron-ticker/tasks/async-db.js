let times = 0;

const  syncDB = () => {
  times++;
  console.log("running a task every second", times);

  return times;
};

module.exports = {
  syncDB,
};
