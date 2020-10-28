document.querySelectorAll('.button-container').forEach(element =>{
    element.addEventListener('click', () => {
        if(element.classList.contains('selected')){
            element.classList.remove('selected');
        } else {
            element.classList.add('selected');
        }
        updateColors();
    });
})

function updateColors(){
    let selectedColors = [];
    let colorNames = {
        '': 'Colorless',
        W: 'White',
        G: 'Green',
        U: 'Blue',
        B: 'Black',
        R: 'Red',
        WG: 'Selesnya',
        WU: 'Azorius',
        WB: 'Orzhov',
        WR: 'Boros',
        GU: 'Simic',
        GB: 'Golgari',
        GR: 'Gruul',
        UB: 'Dimir',
        UR: 'Izzet',
        BR: 'Rakdos',
        WGU: 'Bant',
        WGB: 'Abzan',
        WGR: 'Naya',
        WUB: 'Esper',
        WUR: 'Jeskai',
        WBR: 'Mardu',
        GUB: 'Sultai',
        GUR: 'Temur',
        GBR: 'Jund',
        UBR: 'Grixis',
        WGUB: 'Witch/Growth',
        WGUR: 'Ink/Altruism', 
        WGBR: 'Dune/Aggresion',
        WUBR: 'Yore/Artifice',
        GUBR: 'Glint/Chaos',
        WGUBR: 'Rainbow'
    }
    document.querySelectorAll('.selected').forEach(element =>{
        selectedColors.push(element.id);
    })
    document.getElementById('nome').innerHTML = colorNames[selectedColors.join('')];
}



