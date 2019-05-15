function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}

//asyncCall();

function lkjlk(addr) {
  var reg = new RegExp("^[A-Z0-8]");
  return reg.test(addr);
}

lkjlk('werwer');