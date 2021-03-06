import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { ExercisesProvider } from '../providers/exercises/exercises';
import { IonicStorageModule } from '@ionic/storage';
import { WorkoutModel } from '@models/workoutModel';
import { Model } from '@providers/model';
import { WorkoutProvider } from '../providers/workout/workout';
import { SelectExercisesPage } from '@pages/select-exercises/select-exercises';
import { CreateWorkoutPage } from '@pages/create-workout/create-workout';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { PopoverWorkoutItem } from '../components/workout-list-item/popover'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SelectExercisesPage,
    CreateWorkoutPage,
    PopoverWorkoutItem,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelectExercisesPage,
    CreateWorkoutPage,
    PopoverWorkoutItem
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ExercisesProvider,
    WorkoutModel,
    Model,
    WorkoutProvider,
  ]
})
export class AppModule {}
