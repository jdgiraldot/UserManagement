const apiUrl = 'http://localhost:5000/api/users'; // URL del backend

// Crear un nuevo usuario
async function createUser() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const salary = document.getElementById('salary').value;

    const user = { id, name, email, salary };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();
        showResponse(result);
    } catch (error) {
        console.error('Error:', error);
        showResponse({ error: 'An error occurred while creating the user.' });
    }
}

// Obtener un usuario por ID
async function getUserById() {
    const id = document.getElementById('userId').value;

    try {
        const response = await fetch(`${apiUrl}/${id}`);
        const result = await response.json();
        showResponse(result);
    } catch (error) {
        console.error('Error:', error);
        showResponse({ error: 'An error occurred while fetching the user.' });
    }
}

// Actualizar un usuario por ID
async function updateUser() {
    const id = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const salary = document.getElementById('salary').value;

    const user = { name, email, salary };

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();
        showResponse(result);
    } catch (error) {
        console.error('Error:', error);
        showResponse({ error: 'An error occurred while updating the user.' });
    }
}

// Eliminar un usuario por ID
async function deleteUserById() {
    const id = document.getElementById('userId').value;

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });

        const result = await response.json();
        showResponse(result);
    } catch (error) {
        console.error('Error:', error);
        showResponse({ error: 'An error occurred while deleting the user.' });
    }
}

// Mostrar la respuesta del backend en la interfaz
function showResponse(response) {
    const responseOutput = document.getElementById('response-output');
    responseOutput.textContent = JSON.stringify(response, null, 2);
}
