document.title = "Salam Dunya"

// let paragraph = document.getElementById ("myParagraph")
// paragraph.innerHTML = "Yeni mezmun"

let paragraph = document.querySelector("#myParagraph")
paragraph.textContent = "Yeni məzmun"



let email = document.querySelector('input[name="email"]')
email.value = "admin@gmail.com"




let div = document.querySelector("#myDiv")
div.classList.add("zzz")



let divv = document.querySelector(".zzz")
let divvId = divv.id
console.log(divvId);





const employeess = [
    {
        id: 1,
        name: 'Farman',
        age: 22,
        position: 'Frontend | Team Leader',
        salary: 250
    },
    {
        id: 2,
        name: 'Subhan',
        age: 22,
        position: 'Backend | Team Leader',
        salary: 250
    },
    {
        id: 3,
        name: 'Aqil',
        age: 27,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 4,
        name: 'Lala',
        age: 18,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 5,
        name: 'Oktay',
        age: 12,
        position: 'Frontend',
        salary: 160
    }
]

let tableBody = document.querySelector("#tableBody")


    employeess.forEach(employee => {
        
        let employeeR = "<tr>"
        employeeR += `<td>${employee.id}</td>`
        employeeR += `<td>${employee.name}</td>`
        employeeR += `<td>${employee.age}</td>`
        employeeR += `<td>${employee.position}</td>`
        employeeR += `<td>${employee.salary}</td>`
        employeeR += "</tr>"
        
        tableBody.innerHTML += employeeR;
    });








