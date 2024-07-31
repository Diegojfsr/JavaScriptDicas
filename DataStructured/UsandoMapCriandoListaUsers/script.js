// desafio
// Cadastrar varios usuarios,
// o usuario tera nome e o username
// temos q evitar cadastro de usurios duplicados



// resolvendo o desafio no modo padrao {

    const listaDeUsuarios = [
        {name:"Diego", userName:"diegojfsr"},
    ];
        
    //caso eu  queira cadastrar um novo usuario
    //priemiro vamos verificar se alista ja tem o usuario.

    const newUser = {name:"Diego", userName:"diegojfsr"}; //userName repetido, nao deixa entrar
    //const newUser = {name:"Diego", userName:"diegojfsrsss"}; //userName diferente, deixa entrar
    const hasUser = listaDeUsuarios.find((user) => {
        return user.userName == newUser.userName;
    });
    if(!hasUser){
        listaDeUsuarios.push(newUser);
    }

    const result = listaDeUsuarios;
    console.log("Usando o modo padrao: ");
    console.log(result);

// }

//
// resolvendo o desafio com o Map {

const listaDeUsuarios2 = new Map();

listaDeUsuarios2.set(
'User1',{name:'Diego', userName:'diegojfsr'}
);
//so deixa entrar o segundo registro se o user for diferente.
listaDeUsuarios2.set(
'User2',{name:'Diego', userName:'diegojfsr'}
 );


const result2 = listaDeUsuarios2;
console.log("Usando o Map: ");
console.log(result2);




