(()=>{
    let myUserId: string| number;
    myUserId = 'Hello1';

    function greeting(myText: string| number) {
        if (typeof myText === 'string'){
            console.log(`String ${myText.toLowerCase()}`);
        } else{
            console.log(`Number ${myText.toFixed(1)}`);
        }
    }

    greeting('Hola');
    greeting(12.25);
})();
