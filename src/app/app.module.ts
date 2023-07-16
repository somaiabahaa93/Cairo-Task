import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts/lib/angular-charts.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SharedModule } from './shared/shared.module';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskGraphComponent } from './task-graph/task-graph.component';
import { TaskReminderComponent } from './task-reminder/task-reminder.component';
import { ProjectCallComponent } from './project-call/project-call.component';
import { MessageComponent } from './message/message.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    TaskCardComponent,
    TaskGraphComponent,
    TaskReminderComponent,
    ProjectCallComponent,
    MessageComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,

    SharedModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
