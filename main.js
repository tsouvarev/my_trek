google.charts.load('current', {'packages': ['gantt']});

var app = new Vue({
    el: '#app',
    data: {
        orange: {
            tours: [],
            toursToDraw: [],
        }
    },
    methods: {
        fetchOrange: function () {
            orangeKedData.forEach(function (item) {
                item.start = new Date(item.start);
                item.end = new Date(item.end);
            });
            this.orange.tours = orangeKedData;
            this.orange.toursToDraw = [...this.orange.tours];
        },
        hideTour: function (tour) {
            // list.splice( list.indexOf('foo'), 1 );
            this.orange.toursToDraw.splice(this.orange.toursToDraw.indexOf(tour), 1);
            this.drawGantt();
        },
        drawGantt: function () {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Task ID');
            data.addColumn('string', 'Task Name');
            data.addColumn('string', 'Resource');
            data.addColumn('date', 'Start Date');
            data.addColumn('date', 'End Date');
            data.addColumn('number', 'Duration');
            data.addColumn('number', 'Percent Complete');
            data.addColumn('string', 'Dependencies');

            let rows = [];
            this.orange.toursToDraw.forEach(function (item, index) {
                rows.push([index.toString(), item.title.toString(), 'orange', item.start, item.end, null, null, null]);
            });
            data.addRows(rows);
            var options = {
                height: 900,
                gantt: {
                    trackHeight: 30
                }
            };
            var chart = new google.visualization.Gantt(document.getElementById('gantt'));
            chart.draw(data, options);
            // var gantt = new Gantt("#gantt", this.orange.tours, {view_mode: 'month'})
        }
    }
});

let orangeKedData = [
    {start: "2020-03-01", end: "2020-03-09", title: "Турция Ликийская тропа (запад)"},
    {start: "2020-03-01", end: "2020-03-09", title: "Байкал на коньках"},
    {start: "2020-03-22", end: "2020-04-06", title: "Треккинг в Непале Лангтанг"},
    {start: "2020-04-26", end: "2020-05-06", title: "Турция Ликия и Каппадокия"},
    {start: "2020-04-27", end: "2020-05-06", title: "Треккинг на Мадейре"},
    {start: "2020-05-20", end: "2020-05-29", title: "Путешествие по Португалии"},
    {start: "2020-06-22", end: "2020-07-02", title: "Алтай Шавлинские озера и долина Маашей"},
    {start: "2020-06-29", end: "2020-07-08", title: "Треккинг по Сванетии без рюкзаков"},
    {start: "2020-07-11", end: "2020-07-22", title: "Треккинг в Исландии"},
    {start: "2020-07-12", end: "2020-07-23", title: "Таджикистан Фанские горы"},
    {start: "2020-07-13", end: "2020-07-23", title: "Киргизия Поход по Тянь-Шаню"},
    {start: "2020-07-26", end: "2020-08-05", title: "Грузия Поход к озерам Тоба"},
    {start: "2020-07-31", end: "2020-08-12", title: "Треккинг в Норвегии"},
    {start: "2020-08-03", end: "2020-08-14", title: "Камчатка Вокруг Толбачика"},
    {start: "2020-08-17", end: "2020-08-30", title: "Камчатка Вулканы и Океан"},
    {start: "2020-08-23", end: "2020-08-30", title: "Поход по Кольскому полуострову"},
    {start: "2020-08-30", end: "2020-09-07", title: "Горный Крым и морской каякинг"},
];