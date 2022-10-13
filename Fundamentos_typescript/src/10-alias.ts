(() => {
    //Alias
    type User= string|boolean|number;

    let userId: User = 'Diego';

    function greeting(userId: User) {
      if (typeof userId === 'string'){
          console.log(`String ${userId.toLowerCase()}`);
      }
    }

    type UserID = string | boolean | number;

    let dynamicVar: UserID = "300";

    function helloUser( dynamicVar: UserID ) {
      console.log(`Un saludo al usuario con el número de id ${dynamicVar}`);
    }

    greeting(userId);
    helloUser(dynamicVar);

    //Literal types
    let shirt : 'S' | 'B' | 22;
    console.log(shirt='S')

    //Literal types + Alias

    type Sizes = 'S' | 'M' | 'L' | 'XL';

    let shirtSize: Sizes;
    shirtSize = "M";

    function yourSize( userSize: Sizes ){
      console.log(`Tu medida es ${userSize}`);
    }

    yourSize('XL');

})();
