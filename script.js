document.addEventListener("DOMContentLoaded", () => {
    // Exemplo de produtos
    const products = [
        { id: 1, name: "Produto 1", price: 100, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Produto 2", price: 150, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Produto 3", price: 200, image: "https://via.placeholder.com/150" }
    ];

    // Renderizar os produtos
    const productGrid = document.getElementById("productGrid");
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>R$ ${product.price.toFixed(2)}</p>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });

    // Conectar o formulário à API
    const form = document.getElementById("dataForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value
        };

        console.log("Enviando dados:", formData);

        try {
            const response = await fetch("http://localhost:3000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
                        
            });

            const result = await response.json();
            console.log("Resposta da API:", result);
            alert("Dados enviados com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            alert("Falha ao enviar os dados.");
        }
    });
});