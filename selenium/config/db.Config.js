module.exports ={
    HOST:"localhost",
    USER: "SQLExpress",
    PASSWORD: "Your Password",
    server: 'fe80::d4ce:49f0:4746:44d5%4',
    DB: 'database Name here',
    dialect: 'mssql',
    options:{
        trustedconnection:true,
        enableArithAort: true,
        instacename:'09217561-TANANY'
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    port:1433
    };
