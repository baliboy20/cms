import {Component, OnInit} from '@angular/core';
// import * as Highcharts from 'highcharts/highcharts';
import * as Highcharts from 'highcharts/highcharts-gantt';
// const Boost = require('highcharts/modules/boost');
// const noData = require('highcharts/modules/no-data-to-display');
// const More = require('highcharts/highcharts-more');
//
// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
// noData(Highcharts);

enum datez {a, b, c, d}

@Component({
    selector: 'app-campaign-gantt',
    templateUrl: './campaign-gantt.component.html',
    styleUrls: ['./campaign-gantt.component.css']
})
export class CampaignGanttComponent implements OnInit {
    public static dt1 = new Date();
    public static ddate: Date;
    to = {
        id: 's',
        name: 'Modus Furniture Drinks Evening',
        start: Date.UTC(2019, 10, 20),
        end: Date.UTC(2019, 10, 21),
    };

    to1 = {
        id: 'b',
        name: 'Future Megacities Challenge',
        start: Date.UTC(2019, 10, 20),
        end: Date.UTC(2019, 10, 23),
        dependency: 's'
    };

    to2 = {
        id: 'a',
        name: 'Talk: BIID Presidents Breakfast (invitation only via BIID)',
        start: Date.UTC(2019, 10, 24),
        end: Date.UTC(2019, 10, 27),
    };

    to3 = {
        name: 'Sneak preview breakfast\n' +
        'Spacestor',
        start: Date.UTC(2019, 10, 28),
        end: Date.UTC(2019, 11, 29),
        dependency: ['a', 'b']
    };
    Highcharts: typeof Highcharts = Highcharts; // required
    chartConstructor = 'ganttChart'; // optional string, defaults to 'chart'
    chartOptions = {
        title: {
            text: 'Actions Timetable'
        },

        series: [{
            name: 'Clerken well desigh week attendance',
            data: [this.to, this.to1, this.to2, this.to3]
        }]
    };
    // required
    updateFlag = false; // optional boolean
    oneToOneFlag = true; // optional boolean, defaults to false
    runOutsideAngular = false; // optional boolean, defaults to false
    chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
    }; // optional function, defaults to null

    ngOnInit(): void {

        const a = CampaignGanttComponent.dt1;
    }

    getDate() {
        return new Date();
    }
}
