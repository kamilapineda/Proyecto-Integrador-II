function login(e) {
    e.preventDefault();
    console.log('Agel bobo');


    let inputUsuario = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    console.log(inputUsuario);
    console.log(inputPassword);

    fetch("http://89.116.25.43:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
            usuario: inputUsuario,
            password: inputPassword
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            sessionStorage.setItem("token", data["jwt"])
            sessionStorage.setItem("usuario", JSON.stringify(data.usuario))

            if(data.status == 200){
                location.href ="dashboard.html"
            }else{
                alert("Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.")
            }
        })
//         .then(redirect => location.href = 'dashboard.html')

//         .catch(err => console.log(err));
}
function getUsers(){
    fetch('http://89.116.25.43:3000/api/usuarios/listar')
    .then(response => response.json())
    .then(data => {
        console.log(data.usuarios);
        // creates a <table> element and a <tbody> element
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
        const userList = data.usuarios
        for(let i = 0; i < userList.length; i++){
            const row = document.createElement("tr");
            for (const property in userList[i]) {

                const cell = document.createElement("td");
                const cellText = document.createTextNode(`${userList[i][property]}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
                console.log(`${property}: ${userList[i][property]}`);
              }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "5");
        const cells = tbl.getElementsByTagName("td");
                for (let i = 0; i < cells.length; i++) {
                cells[i].style.padding = "3px";
                cells[i].style.border = "2px solid black";
                }
                tbl.style.marginLeft = "2%";

                const tblHead = document.createElement("thead");
                const headers = Object.keys(userList[0]);
                const headerRow = document.createElement("tr");

                for (let i = 0; i < headers.length ; i++) {
                const headerCell = document.createElement("th");
                const headerText = document.createTextNode(headers[i]);
                headerCell.appendChild(headerText);
                headerRow.appendChild(headerCell);
                }
                tblHead.appendChild(headerRow);
                tbl.appendChild(tblBody);
                tblHead.style.backgroundColor = "lightGray"
                tbl.appendChild(tblHead);
        console.log(data);
     })
  .catch(error => console.error(error));

}

//Consumir el metodo de listar
// function consumirListar() {
//     fetch('http://89.116.25.43:3000/api/usuarios/listar',{
//         method: 'GET'
//     })
//         .then(response => response.json())
//         .then(data => generateTable(data));
// }


    // const usuarios= {
    //     "usuarios": [
    //         {
    //             "_id": "63fd24066b626f11ed6341ca",
    //             "password": "$2a$10$7VI0MCfYFJg0e6F/X2gKoOH1oeZsv.2GfW7kD3vr53/S4mKE0heIy",
    //             "identificacion": "1065623223",
    //             "nombres": "luis Fernando",
    //             "apellidos": "Orellano",
    //             "telefono": "3214567890",
    //             "direccion": "cra 21 #90-1234",
    //             "email": "luis@example.com",
    //             "usuario": "luis",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "63fea07cbed44e4f7b102234",
    //             "password": "$2a$10$66zDNnROZ43O2dwoEmuiyecqPzvow8C9ats/JXR5lGs4IcSPjKOBC",
    //             "identificacion": "1065623221",
    //             "nombres": "Juan Fernando",
    //             "apellidos": "Orellano",
    //             "telefono": "3244567890",
    //             "direccion": "cra 21 #90-1234",
    //             "email": "juan@example.com",
    //             "usuario": "juan",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "63ff6a0bf542180989926f05",
    //             "password": "$2a$10$Rdi/ahBmAMTQLkdh3.Pm4uouGhlhpfwK1lZH8nOcfNbcZ/URzD3nu",
    //             "identificacion": "10656234111",
    //             "nombres": "Daniel Fernando",
    //             "apellidos": "Orellano",
    //             "telefono": "322567890",
    //             "direccion": "cra 21 #90-1234",
    //             "email": "juan@example.com",
    //             "usuario": "daniel",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "63ff6a1df542180989926f08",
    //             "password": "$2a$10$Jp/uNbWueH7doWqLpePygOqNB97d.xjMNBah0URsdafgY4HyfdgpK",
    //             "identificacion": "10656234111",
    //             "nombres": "Daniel Fernando",
    //             "apellidos": "Orellano",
    //             "telefono": "322567890",
    //             "direccion": "cra 21 #90-1234",
    //             "email": "juan@example.com",
    //             "usuario": "daniel",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "63ffb102cee73a6c40f7f08d",
    //             "password": "$2a$10$PtaQBMdnnfZnLWBdBfvMLejM/gUG06tyFPR6n8nkbOy0YaZu5cDmy",
    //             "identificacion": "1065623223",
    //             "nombres": "luis Fernando",
    //             "apellidos": "Orellano",
    //             "telefono": "3214567890",
    //             "direccion": "cra 21 #90-1234",
    //             "email": "luis@example.com",
    //             "usuario": "luis",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "6404dbc2ff15e48bcb7d7b42",
    //             "password": "$2a$10$/kHU.24P/nNZXONk6WDR7ecGCpkZHn99PWdY10Nuwh39GY.hfLi1W",
    //             "identificacion": "1065623223",
    //             "nombres": "luis Fernando",
    //             "apellidos": "Orellano",
    //             "telefono": "3214567890",
    //             "direccion": "cra 21 #90-1234",
    //             "email": "luis@example.com",
    //             "usuario": "luis",
    //             "__v": 0
    //         }
    //     ]
    // }
    // console.log(usuarios.usuarios);
    //     // creates a <table> element and a <tbody> element
    //     const tbl = document.createElement("table");
    //     const tblBody = document.createElement("tbody");
    //     const userList = usuarios.usuarios
    //     for(let i = 0; i < userList.length; i++){
    //         const row = document.createElement("tr");
    //         for (const property in userList[i]) {

    //             const cell = document.createElement("td");
    //             const cellText = document.createTextNode(`${userList[i][property]}`);
    //             cell.appendChild(cellText);
    //             row.appendChild(cell);
    //             console.log(`${property}: ${userList[i][property]}`);
    //           }
    //         // add the row to the end of the table body
    //         tblBody.appendChild(row);
    //     }
    //     // put the <tbody> in the <table>
    //     tbl.appendChild(tblBody);
    //     // appends <table> into <body>
    //     document.body.appendChild(tbl);
    //     // sets the border attribute of tbl to '2'
    //     tbl.setAttribute("border", "2");
    //   }


//console.log(getUsers());
