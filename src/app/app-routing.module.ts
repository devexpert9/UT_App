import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'weight',
    loadChildren: () => import('./weight/weight.module').then( m => m.WeightPageModule)
  },
  {
    path: 'activitylevel',
    loadChildren: () => import('./activitylevel/activitylevel.module').then( m => m.ActivitylevelPageModule)
  },
  {
    path: 'uploadimage',
    loadChildren: () => import('./uploadimage/uploadimage.module').then( m => m.UploadimagePageModule)
  },
  {
    path: 'readytogo',
    loadChildren: () => import('./readytogo/readytogo.module').then( m => m.ReadytogoPageModule)
  },
  {
    path: 'getstarted',
    loadChildren: () => import('./getstarted/getstarted.module').then( m => m.GetstartedPageModule)
  },
  {
    path: 'workoutselection',
    loadChildren: () => import('./workoutselection/workoutselection.module').then( m => m.WorkoutselectionPageModule)
  },
  {
    path: 'program-abilities',
    loadChildren: () => import('./program-abilities/program-abilities.module').then( m => m.ProgramAbilitiesPageModule)
  },
  {
    path: 'all-workout',
    loadChildren: () => import('./all-workout/all-workout.module').then( m => m.AllWorkoutPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./exercises/exercises.module').then( m => m.ExercisesPageModule)
  },
  {
    path: 'exercises-filter',
    loadChildren: () => import('./exercises-filter/exercises-filter.module').then( m => m.ExercisesFilterPageModule)
  },
  {
    path: 'exercise-details',
    loadChildren: () => import('./exercise-details/exercise-details.module').then( m => m.ExerciseDetailsPageModule)
  },
  {
    path: 'start-workout',
    loadChildren: () => import('./start-workout/start-workout.module').then( m => m.StartWorkoutPageModule)
  },
  {
    path: 'favorite-exercises',
    loadChildren: () => import('./favorite-exercises/favorite-exercises.module').then( m => m.FavoriteExercisesPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'nutrition-details',
    loadChildren: () => import('./nutrition-details/nutrition-details.module').then( m => m.NutritionDetailsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'workoutprogress',
    loadChildren: () => import('./workoutprogress/workoutprogress.module').then( m => m.WorkoutprogressPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'rescheduleexercise',
    loadChildren: () => import('./rescheduleexercise/rescheduleexercise.module').then( m => m.RescheduleexercisePageModule)
  },
  {
    path: 'scheduleexercise',
    loadChildren: () => import('./scheduleexercise/scheduleexercise.module').then( m => m.ScheduleexercisePageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'height',
    loadChildren: () => import('./height/height.module').then( m => m.HeightPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'calexercisedetail',
    loadChildren: () => import('./calexercisedetail/calexercisedetail.module').then( m => m.CalexercisedetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
