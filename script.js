const BoxList = [
    {
        title: "Время",
        info: "Выбирайте любое удобное время — мы подстроимся под ваш график.",
        icon: "clock_icon_svg.jpg"
    },
    {
        title: "Место",
        info: "Учитесь откуда угодно – дома, в офисе, в кафе.",
        icon: "divan_icon_svg.png"
    },
    {
        title: "Эффективность",
        info: "Наша задача – сделать так, чтобы вы сразу начали говорить.",
        icon: "grafic_icon_svg.jpg"
    }
]

// console.log(BoxList)

BoxListElement = document.getElementById("box-list")

for (i=0;i<BoxList.length;i++) {
    BoxListElement.insertAdjacentHTML(
    'beforeend',
    `
    <div class="box">
        <img src="${BoxList[i].icon}" style="width:200px;">
        <h2>${BoxList[i].title}</h2>
        <p>${BoxList[i].info}</p>
    </div>
    `)
}