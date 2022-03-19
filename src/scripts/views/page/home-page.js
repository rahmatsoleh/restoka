class HomePage {
    static mainHome(element){
        element.innerHTML = `
            <hero-element></hero-element>
            <category-food></category-food>
            <slogan-comp></slogan-comp>
            <explore-restaurant></explore-restaurant>
        `;
    }

    static searchPage(element, query){
        element.innerHTML = `
            <hero-element></hero-element>
            <explore-restaurant keyword="${query}"></explore-restaurant>
        `;

        const inputSearch = document.querySelector('#hero form input');
        inputSearch.value = query;
        inputSearch.focus();
    }

    static detailResto(element, dataId){
        element.innerHTML = `<detail-restaurant data-id="${dataId}"></detail-restaurant>`;  
    }
}

export default HomePage;