const catsAndElems = () => {

    const cats = document.querySelectorAll('.item');
    console.log(`В списке ${cats.length} категории.`)
    

    cats.forEach(element =>
    {
        console.log(`Категории: ${element.querySelector('h2').textContent}`);
        console.log(`Количество элементов: ${element.querySelectorAll('li').length} `)
    })
  
}

catsAndElems();