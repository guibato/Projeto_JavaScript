class Product {
    constructor(product, unit_cost, sale_price, classification) {
        this.product = product;
        this.unit_cost = this.convertToFloat(unit_cost);
        this.sale_price = this.convertToFloat(sale_price);
        this.classification = classification;
        this.profit = this.calculateProfit();
        this.profit_margin = this.calculateProfitMargin();
    }

    checkFields() {
        return this.product !== '' && this.unit_cost !== '' && this.sale_price !== '' && this.classification !== '';
    }

    checkNumbers() {
        return !isNaN(this.unit_cost) && !isNaN(this.sale_price);
    }

    checkPrices() {
        return this.sale_price > this.unit_cost;
    }

    convertToFloat(value) {
        return parseFloat(value);
    }

    calculateProfit() {
        return (this.sale_price - this.unit_cost)-((this.sale_price - this.unit_cost)*this.getTaxes());
    }

    calculateProfitMargin() {
        return (this.profit / this.sale_price) * 100;
    }

    getTaxes() {
        if (this.classification === 'Electronic') {
            return 0.05;
        } else if (this.classification === 'Furniture') {
            return 0.08;
        } else if (this.classification === 'Office supplies') {
            return 0.10;
        } else if (this.classification === 'Estationary') {
            return 0.15;
        } else {
            return 0.20; //For the Electronics
        }
    }

    register() {
        // Get the table
        var table = document.getElementById('TableProducts'); 
        var row = table.insertRow(-1);

        // Insert cells in the row
        var cellRow = row.insertCell(0);
        var cellProduct = row.insertCell(1);
        var cellUnitCost = row.insertCell(2);
        var cellClassification = row.insertCell(3);
        var cellSalePrice = row.insertCell(4);
        var cellTaxes = row.insertCell(5);
        var cellProfit = row.insertCell(6);
        var cellProfitMargin = row.insertCell(7);

        // Insert values in the cells
        cellRow.innerHTML = table.rows.length - 1;
        cellProduct.innerHTML = this.product;
        cellUnitCost.innerHTML = this.unit_cost.toFixed(2);
        cellClassification.innerHTML = this.classification;
        cellSalePrice.innerHTML = this.sale_price.toFixed(2);
        cellTaxes.innerHTML = (this.getTaxes() * 100) + '%';
        cellProfit.innerHTML = this.profit.toFixed(2);
        cellProfitMargin.innerHTML = this.profit_margin.toFixed(2) + '%';
    }
}

function addProduct() {
    var product = document.getElementById('product').value;
    var unit_cost = document.getElementById('unitCost').value;
    var sale_price = document.getElementById('salePrice').value;
    var selectElement = document.getElementById('productClass');
    var classification = selectElement.value;
    var newProduct = new Product(product, unit_cost, sale_price, classification);

    // check if the values are filled
    if (!newProduct.checkFields()) {
        alert('Please fill all fields!');
        return;
    }

    // check if the values are numbers
    if (!newProduct.checkNumbers()) {
        alert('Please fill the unit cost and sale price with numbers!');
        return;
    }

    // check if the sale price is greater than the unit cost
    if (!newProduct.checkPrices()) {
        alert('The sale price must be greater than the unit cost!');
        return;
    }

    //check if the product is already registered
    var table = document.getElementById('TableProducts');
    for (var i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[1].innerHTML === product) {
            alert('This product is already registered!');
            return;
        }
    }

    // Register the product in the table
    newProduct.register();

    // Clear the input fields
    document.getElementById('product').value = '';
    document.getElementById('unitCost').value = '';
    document.getElementById('salePrice').value = '';
    document.getElementById('productClass').value = '';
}