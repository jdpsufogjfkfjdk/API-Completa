fetch('produtos.json')
    .then(response => response.json())
    .then(products => {
        const productGrid = document.getElementById('productGrid');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <pclass="description">${product.description}</pclass=>
                <p class="price">R$ ${product.price.toFixed(2)}</p>
                <button class="button">Comprar</button>
            `;
            productGrid.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error loading product data:', error));
