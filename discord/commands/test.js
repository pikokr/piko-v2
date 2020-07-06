const { CanvasRenderService } = require('chartjs-node-canvas')
const Discord = require('discord.js')

const width = 400;
const height = 400;
const chartCallback = (ChartJS) => {
    ChartJS.defaults.global.elements.rectangle.borderWidth = 2;
    ChartJS.plugins.register({
    });
    ChartJS.controllers.MyType = ChartJS.DatasetController.extend({
    });
};
const canvasRenderService = new CanvasRenderService(width, height, chartCallback);

module.exports = {
    name: '테스트',
    aliases: [],
    exec: async function (msg, client, args) {
        const configuration = {
            type: 'bar',
            data: {
                labels: ['뭐', '뭐2', '뭐3', '뭐4', '뭐5', '뭐6'],
                datasets: [{
                    label: '예에에에에ㅔ',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: (value) => '$' + value
                        }
                    }]
                }
            }
        };
        const attachment = new Discord.MessageAttachment(await canvasRenderService.renderToBuffer(configuration), 'test.png');
        msg.channel.send("", attachment)
    }
}