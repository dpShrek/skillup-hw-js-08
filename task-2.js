//Организовать функцию getInfo, которая принимает объект вида

//{ name: ..., info: { employees: [...], partners: [ … ] } }

//и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

console.log('Задача № 2');


const organisation = {
    name: "Google",
    info: {
      employees: ["Vlad", "Olga"],
      partners: ["Microsoft", "Facebook", "Xing"],
    },
  };
  
  const getInfo = (organisation) => {
    const {
      name,
      info: { partners },
    } = organisation;
    return { name: name || "UNKNOWN", partners: partners.slice(0, 2) };
  };
  
  console.log(getInfo(organisation));

