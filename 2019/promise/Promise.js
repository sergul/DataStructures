getData = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Resolved ...');
    }, 2000);
  });
}

getData()
    .then(data => console.log(data))
    .catch(error => console.log(error));