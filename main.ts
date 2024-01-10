import chalk from "chalk"
import inquirer from "inquirer";
console.log(`${chalk.blueBright.italic("STARZ CURRENCY EXCHANGER")}`)

 const api = " https://v6.exchangerate-api.com/v6/a1815ac0d9d79b79da878d64/latest/USD";

const fetchData = async (data: any) => {
     
        const fetchdata = await fetch(data);
        const res = await fetchdata.json();
        return res.conversion_rates;
    }
    let aaa = await fetchData(api)
   
   let countries =  Object.keys(aaa)
   
const firstCountry = await inquirer.prompt([{
            type: "list",
            name: "name",
            choices: countries,
            message: "Select the currency which you want to change :"
        }]);

       console.log(`converting from => ${chalk.greenBright.bold(firstCountry.name)}`)
       const usermoney = await inquirer.prompt([{
        type:"number",
        name:"money",
        message:`please enter the amount in  ${chalk.greenBright.bold(firstCountry.name)}`
    }])
        const secondcountry = await inquirer.prompt([{
         type: "list",
        name: "name",
        choices: countries,
        message: `please select your currency which you want    `
    }])
    console.log(`Converted to => ${chalk.bgBlue.bold(secondcountry.name)}`)
           
        
 const nv = `https://v6.exchangerate-api.com/v6/a1815ac0d9d79b79da878d64/pair/${firstCountry.name}/${secondcountry.name}`
//  const pak = "https://v6.exchangerate-api.com/v6/a1815ac0d9d79b79da878d64/pair/USD/PKR"      
const CnvData = async (data: any) => {
     
    const Cnvdata = await fetch(data);
    const res = await Cnvdata.json();
    return res.conversion_rate;
}

let cnvrate  = await CnvData(nv);

 let convertedrate = usermoney.money * cnvrate;
console.log(`Amount = ${convertedrate}`)
console.log(`${chalk.yellowBright.bold("THANK YOU FOR USING OUR SERVICE !!")}`)
