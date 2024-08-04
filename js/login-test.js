const usuarios = [
    {
        "matricula": "123456",
        "nombre": "Juan Pérez",
        "imageProfile": "https://example.com/juan-perez.jpg",
        "password": "password123"
    },
    {
        "matricula": "654321",
        "nombre": "María García",
        "imageProfile": "https://example.com/maria-garcia.jpg",
        "password": "password456"
    },
    {
        "matricula": "789012",
        "nombre": "Pedro López",
        "imageProfile": "https://example.com/pedro-lopez.jpg",
        "password": "password789"
    },
    {
        "matricula": "345678",
        "nombre": "Ana Sánchez",
        "imageProfile": "https://example.com/ana-sanchez.jpg",
        "password": "password012"
    },
    {
        "matricula": "987654",
        "nombre": "Carlos Rodríguez",
        "imageProfile": "https://example.com/carlos-rodriguez.jpg",
        "password": "password345"
    },
    {
        "matricula": "234567",
        "nombre": "Sofia Martínez",
        "imageProfile": "https://example.com/sofia-martinez.jpg",
        "password": "password678"
    },
    {
        "matricula": "876543",
        "nombre": "David Gómez",
        "imageProfile": "https://example.com/david-gomez.jpg",
        "password": "password901"
    },
    {
        "matricula": "456789",
        "nombre": "Laura González",
        "imageProfile": "https://example.com/laura-gonzalez.jpg",
        "password": "password234"
    },
    {
        "matricula": "012345",
        "nombre": "Alejandro Moreno",
        "imageProfile": "https://example.com/alejandro-moreno.jpg",
        "password": "password567"
    },
    {
        "matricula": "567890",
        "nombre": "Isabel Fernández",
        "imageProfile": "https://example.com/isabel-fernandez.jpg",
        "password": "password890"
    }
];

const handleLogin = () => {
    
    const matricula = document.getElementById('matricula').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Buscar el usuario
    const usuario = usuarios.find(user => user.matricula === matricula && user.password === password);
    
    if (usuario) {
        window.location.href = 'templates/student-profile.html';
    } else {
        alert('no se encontro el alumno')
    }
}