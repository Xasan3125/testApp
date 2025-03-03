function App() {
  console.log("Hello World");
}

App();

console.log("I am here!");

function time() {
  let num = 1;
  const timer = setInterval(() => {
    console.log(num);
    num++;
    if (num > 10) {
      clearInterval(timer);
    }
  }, 1000);
}

time();
