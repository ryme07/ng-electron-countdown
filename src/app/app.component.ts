import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countdown';

  public days = 0;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;

  constructor() { }

  ngOnInit(): void {
    this.displayTime()
  }

  countDown(): void {
    const goalDate = "25 december, 2021";
    const now = new Date().getTime();
    const xmas = new Date(goalDate).getTime();

    const differenceBetweenNowAndGoalDate = xmas - now;

    const days = Math.floor(differenceBetweenNowAndGoalDate / (1000 * 60 * 60 * 24))
    const hours = Math.floor((differenceBetweenNowAndGoalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((differenceBetweenNowAndGoalDate % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((differenceBetweenNowAndGoalDate % (1000 * 60)) / 1000)

    this.days = days;
    this.hours = this.formatTime(hours);
    this.minutes = this.formatTime(minutes);
    this.seconds = this.formatTime(seconds)

  }

  formatTime(time: any) {
    return time < 10 ? `0${time}` : time;
  }

  displayTime(): void {
    setInterval(() => {
      this.countDown()
    }, 1000)
  }
}
