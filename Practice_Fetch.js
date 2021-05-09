function fetchUserdata() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
}

function fetchUserData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => bindData(data))
}

function binddata() {
    Let tabledata =`
                <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gautham Nandimalla</td>
                                <td>nandhi@gmail.com</td>
                                <td>9989123123</td>
                                <td>g123@abcd.com</td>
                                
                            </tr>
                        </tbody>
    
    `
    document.getElementById("tblUserInfo").innerHTML = tabledata
}