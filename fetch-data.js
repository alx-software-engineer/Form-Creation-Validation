async function fetchUserData() {
    const dataContainer = document.getElementById("api-data");
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(apiUrl); 
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement("ul");
        users.forEach(element => {
            const item = document.createElement("li");
            item.textContent = element.name
            userList.appendChild(item);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = "Failed to load user data."
    }
}

document.addEventListener("DOMContentLoaded", fetchUserData);