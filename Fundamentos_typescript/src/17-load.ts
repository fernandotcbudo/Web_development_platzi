import _ from 'lodash';

const data=[
    {
        username: 'nico',
        role: 'admin',
    },

    {
        username: 'diego',
        role: 'seller',
    },

    {
        username: 'nico',
        role: 'custumer',
    },

    {
        username: 'fer',
        role: 'admin',
    },

];

const rta = _.groupBy(data,(item) => item.role);
console.log(rta);
