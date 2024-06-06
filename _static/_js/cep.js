async function getCEPData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            return { status: response.status, data: data };
        } else {
            return { status: response.status, data: "" };
        }
    } catch (error) {
        console.error('Erro:', error);
        return { status: 500, data: "" };
    }
}

